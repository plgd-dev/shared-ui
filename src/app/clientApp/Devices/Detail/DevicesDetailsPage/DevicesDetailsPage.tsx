import { FC, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'
import { useIntl } from 'react-intl'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Footer from '../../../../../components/Layout/Footer'
import NotFoundPage from '../../../../../components/Templates/NotFoundPage'
import PageLayout from '../../../../../components/Atomic/PageLayout'
import { useIsMounted } from '../../../../../common/hooks'
import { messages as menuT } from '../../../../../components/Atomic/Menu/Menu.i18n'
import Notification from '../../../../../components/Atomic/Notification/Toast'
import StatusTag from '../../../../../components/Atomic/StatusTag'
import Breadcrumbs from '../../../../../components/Layout/Header/Breadcrumbs'
import EditNameModal from '../../../../../components/Organisms/EditNameModal'
import Tabs from '../../../../../components/Atomic/Tabs'
import { getApiErrorMessage } from '../../../../../common/utils'
import { disOwnDevice, ownDevice } from '../../slice'
import { devicesStatuses, NO_DEVICE_NAME, devicesOwnerships, devicesOnboardingStatuses } from '../../constants'
import { getDeviceChangeResourceHref, handleOwnDevicesErrors } from '../../utils'
import { useDeviceDetails, useDevicesResources, useOnboardingButton } from '../../hooks'
import { ownDeviceApi, disownDeviceApi, getDeviceAuthCode, onboardDeviceApi, offboardDeviceApi, PLGD_BROWSER_USED, updateDevicesResourceApi } from '../../rest'
import DevicesDetailsHeader from '../DevicesDetailsHeader'
import { messages as t } from '../../Devices.i18n'
import IncompleteOnboardingDataModal, { getOnboardingDataFromConfig } from '../IncompleteOnboardingDataModal'
import { OnboardingDataType, onboardingDataDefault } from '../IncompleteOnboardingDataModal/IncompleteOnboardingDataModal.types'
import FirstTimeOnboardingModal from '../FirstTimeOnboardingModal/FirstTimeOnboardingModal'
import Tab1 from './Tabs/Tab1'
import Tab2 from './Tabs/Tab2'
import { Props } from './DevicesDetailsPage.types'
import { getWellKnowConfig } from '../../../utils'
import notificationId from '../../../notificationId'
import AppContext from '../../../../share/AppContext'

const DevicesDetailsPage: FC<Props> = (props) => {
    const { defaultActiveTab, detailLinkPrefix, breadcrumbs: breadcrumbsProp, defaultDeviceId } = props
    const { formatMessage: _ } = useIntl()
    const { id: routerId } = useParams()
    const id = defaultDeviceId || routerId || ''

    const [showDpsModal, setShowDpsModal] = useState(false)
    const [showIncompleteOnboardingModal, setShowIncompleteOnboardingModal] = useState(false)
    const [showFirstTimeOnboardingModal, setShowFirstTimeOnboardingModal] = useState(false)
    const [onboardingData, setOnboardingData] = useState<OnboardingDataType>(onboardingDataDefault)
    const [onboarding, setOnboarding] = useState(false)
    const [showEditNameModal, setShowEditNameModal] = useState(false)
    const [deviceNameLoading, setDeviceNameLoading] = useState(false)
    const [activeTabItem, setActiveTabItem] = useState(defaultActiveTab ?? 0)
    const [ownLoading, setOwnLoading] = useState(false)
    const [isDomReady, setIsDomReady] = useState(false)

    const isMounted = useIsMounted()
    const { isHub } = useContext(AppContext)
    const { data, updateData, loading, error: deviceError } = useDeviceDetails(id, !isHub)
    const { data: resourcesData, loading: loadingResources, error: resourcesError, refresh: refreshResources } = useDevicesResources(id)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isOwned = useMemo(() => data?.ownershipStatus === devicesOwnerships.OWNED, [data])
    const isUnsupported = useMemo(() => data?.ownershipStatus === devicesOwnerships.UNSUPPORTED, [data])
    const resources = useMemo(() => resourcesData?.resources || [], [resourcesData])
    const breadcrumbBase = useMemo(
        () =>
            breadcrumbsProp ?? [
                {
                    link: '/',
                    label: _(menuT.devices),
                },
            ],
        [breadcrumbsProp, _]
    )
    const [breadcrumbs, setBreadcrumbs] = useState(breadcrumbBase)

    const [incompleteOnboardingData, onboardResourceLoading, deviceOnboardingResourceData, refetchDeviceOnboardingData] = useOnboardingButton({
        resources,
        isOwned,
        isUnsupported,
        deviceId: id,
    })

    const wellKnownConfig = getWellKnowConfig()
    const parseOnboardingData = useCallback(() => getOnboardingDataFromConfig(wellKnownConfig), [wellKnownConfig])
    const handleOpenEditDeviceNameModal = useCallback(() => setShowEditNameModal(true), [])

    useEffect(() => {
        setIsDomReady(true)
    }, [])

    // check onboarding status evert 1s if onboarding process running
    useEffect(() => {
        const { UNINITIALIZED, REGISTERED, FAILED } = devicesOnboardingStatuses

        if (deviceOnboardingResourceData?.content?.cps && ![UNINITIALIZED, REGISTERED, FAILED].includes(deviceOnboardingResourceData.content.cps)) {
            const interval = setInterval(() => {
                refetchDeviceOnboardingData()
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [deviceOnboardingResourceData, refetchDeviceOnboardingData])

    const openDpsModal = useCallback(() => setShowDpsModal(true), [])

    const handleOnboardCallback = useCallback(() => {
        if (deviceOnboardingResourceData.content.cps === devicesOnboardingStatuses.UNINITIALIZED) {
            if (incompleteOnboardingData) {
                setShowIncompleteOnboardingModal(true)
            } else {
                onboardDevice({ ...parseOnboardingData(), authorizationCode: '' }).then()
            }
        } else {
            offboardDeviceApi(id).then(() => {
                setOnboardingData({ ...onboardingData, authorizationCode: '' })
                refetchDeviceOnboardingData()
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deviceOnboardingResourceData, id, incompleteOnboardingData, onboardingData])

    const deviceName = useMemo(() => data?.data?.content?.n || NO_DEVICE_NAME, [data])

    const handleOwnChange = useCallback(() => {
        try {
            setOwnLoading(true)
            if (isOwned) {
                disownDeviceApi(id).then(() => {
                    if (isMounted.current) {
                        updateData({
                            ...data,
                            ownershipStatus: devicesOwnerships.UNOWNED,
                        })

                        // @ts-ignore
                        dispatch(disOwnDevice(id))

                        Notification.success(
                            {
                                title: _(t.deviceDisOwned),
                                message: _(t.deviceWasDisOwned, { name: deviceName }),
                            },
                            {
                                notificationId: notificationId.SU_CA_DEVICE_DETAIL_PAGE_OWN_CHANGE,
                            }
                        )

                        setOwnLoading(false)
                        navigate(`${detailLinkPrefix || ''}/`, { replace: true })
                    }
                })
            } else {
                ownDeviceApi(id).then(() => {
                    if (isMounted.current) {
                        updateData({
                            ...data,
                            ownershipStatus: devicesOwnerships.OWNED,
                        })

                        // @ts-ignore
                        dispatch(ownDevice(id))

                        Notification.success(
                            {
                                title: _(t.deviceOwned),
                                message: _(t.deviceWasOwned, { name: deviceName }),
                            },
                            {
                                notificationId: notificationId.SU_CA_DEVICE_DETAIL_PAGE_OWN_CHANGE,
                            }
                        )

                        setOwnLoading(false)
                    }
                })
            }
        } catch (error) {
            handleOwnDevicesErrors(error, _)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_, id, isMounted, isOwned, deviceName])

    const toggleOnboardingModal = useCallback((state = false) => {
        setShowIncompleteOnboardingModal(state)
    }, [])

    const openOnboardingModal = useCallback(() => {
        toggleOnboardingModal(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleTabChange = useCallback((i: number) => {
        setActiveTabItem(i)

        navigate(`${detailLinkPrefix || ''}/devices/${id}${i === 1 ? '/resources' : '/'}`, { replace: true })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (deviceName && deviceName !== NO_DEVICE_NAME) {
            setBreadcrumbs([...breadcrumbBase, { label: deviceName }])
        }
    }, [breadcrumbBase, deviceName])

    if (deviceError) {
        return <NotFoundPage message={_(t.deviceNotFoundMessage, { id })} title={_(t.deviceNotFound)} />
    }

    if (resourcesError) {
        return <NotFoundPage message={_(t.deviceResourcesNotFoundMessage, { id })} title={_(t.deviceResourcesNotFound)} />
    }

    const deviceStatus = data?.metadata?.status?.value
    const isOnline = true
    const isUnregistered = devicesStatuses.UNREGISTERED === deviceStatus

    const onboardDevice = async (onboardingData: OnboardingDataType) => {
        try {
            setOnboarding(true)

            const wasBrowserUsed = localStorage.getItem(PLGD_BROWSER_USED)

            if (!wasBrowserUsed) {
                localStorage.setItem(PLGD_BROWSER_USED, '1')
                setShowFirstTimeOnboardingModal(true)
            }

            const code =
                onboardingData.authorizationCode !== ''
                    ? onboardingData.authorizationCode
                    : await getDeviceAuthCode(id, detailLinkPrefix !== '' ? routerId : undefined)

            const cleanUpOnboardData = (d: string) => d.replace(/\\n/g, '\n')

            onboardDeviceApi(id, {
                coapGatewayAddress: onboardingData.deviceEndpoint || '',
                authorizationCode: code as string,
                authorizationProviderName: onboardingData.authorizationProvider || '',
                hubId: onboardingData.hubId || '',
                certificateAuthorities: cleanUpOnboardData(onboardingData.certificateAuthorities || ''),
                redirectUri: `${window.location.origin}/devices`,
            })
                .then(() => {
                    setOnboarding(false)
                    refetchDeviceOnboardingData()
                })
                .catch((e) => {
                    Notification.error(JSON.parse(e?.request?.response)?.message || e.message, { notificationId: notificationId.SU_CA_ONBOARD_DEVICE })
                    setOnboardingData(onboardingData)
                    toggleOnboardingModal(true)
                    setOnboarding(false)
                })
        } catch (e: any) {
            if (e !== 'user-cancel') {
                Notification.error(e.message, { notificationId: notificationId.SU_CA_ONBOARD_DEVICE })
                console.error(e)
            }

            setOnboarding(false)
        }
    }

    const updateDeviceName = async (name: string) => {
        if (name.trim() !== '' && name !== deviceName) {
            const href = getDeviceChangeResourceHref(resources)

            setDeviceNameLoading(true)

            try {
                const { data: responseData } = await updateDevicesResourceApi(
                    { deviceId: id, href },
                    {
                        n: name,
                    }
                )

                if (isMounted.current) {
                    setDeviceNameLoading(false)

                    // remove current name from breadcrumb
                    breadcrumbs.pop()

                    updateData({
                        ...data,
                        data: {
                            ...data.data,
                            content: {
                                ...data.data.content,
                                n: responseData?.content?.n || name,
                            },
                        },
                    })

                    setShowEditNameModal(false)
                }
            } catch (error) {
                if (error && isMounted.current) {
                    Notification.error(
                        {
                            title: _(t.deviceNameChangeFailed),
                            message: getApiErrorMessage(error),
                        },
                        {
                            notificationId: notificationId.SU_CA_UPDATE_DEVICE_NAME,
                        }
                    )
                    setDeviceNameLoading(false)
                    setShowEditNameModal(false)
                }
            }
        } else {
            setDeviceNameLoading(false)
            setShowEditNameModal(false)
        }
    }

    return (
        <PageLayout
            footer={<Footer footerExpanded={false} paginationComponent={<div id='paginationPortalTarget'></div>} />}
            header={
                <DevicesDetailsHeader
                    buttonsLoading={ownLoading}
                    deviceId={id}
                    deviceName={deviceName}
                    deviceOnboardingResourceData={deviceOnboardingResourceData}
                    handleOpenEditDeviceNameModal={handleOpenEditDeviceNameModal}
                    incompleteOnboardingData={incompleteOnboardingData}
                    isOwned={isOwned}
                    isUnregistered={isUnregistered}
                    isUnsupported={isUnsupported}
                    onOwnChange={handleOwnChange}
                    onboardButtonCallback={handleOnboardCallback}
                    onboardResourceLoading={onboardResourceLoading}
                    onboarding={onboarding}
                    openDpsModal={openDpsModal}
                    openOnboardingModal={openOnboardingModal}
                    resources={resources}
                />
            }
            headlineStatusTag={!isUnsupported && <StatusTag variant={isOwned ? 'success' : 'error'}>{isOwned ? _(t.owned) : _(t.unowned)}</StatusTag>}
            loading={loading}
            title={deviceName || ''}
        >
            {isDomReady &&
                ReactDOM.createPortal(
                    <Breadcrumbs
                        items={breadcrumbs}
                        onItemClick={(item, e) => {
                            e.preventDefault()
                            item.link && navigate(item.link)
                        }}
                    />,
                    document.querySelector('#breadcrumbsPortalTarget') as Element
                )}

            <Tabs
                activeItem={activeTabItem}
                fullHeight={true}
                onItemChange={handleTabChange}
                tabs={[
                    {
                        id: 0,
                        name: _(t.deviceInformation),
                        content: (
                            <Tab1
                                data={data}
                                deviceId={id}
                                deviceOnboardingResourceData={deviceOnboardingResourceData}
                                isActiveTab={activeTabItem === 0}
                                isOwned={isOwned}
                                isUnsupported={isUnsupported}
                                onboardResourceLoading={onboardResourceLoading}
                                resources={resources}
                            />
                        ),
                    },
                    {
                        id: 1,
                        name: _(t.resources),
                        content: (
                            <Tab2
                                closeDpsModal={() => setShowDpsModal(false)}
                                detailLinkPrefix={detailLinkPrefix}
                                deviceName={deviceName}
                                deviceStatus={deviceStatus}
                                isActiveTab={activeTabItem === 1}
                                isOnline={isOnline}
                                isOwned={isOwned}
                                isUnregistered={isUnregistered}
                                loadingResources={loadingResources}
                                refreshResources={refreshResources}
                                resourcesData={resourcesData}
                                showDpsModal={showDpsModal}
                            />
                        ),
                    },
                ]}
            />

            <IncompleteOnboardingDataModal
                deviceId={id}
                onClose={() => toggleOnboardingModal(false)}
                onSubmit={(onboardingData) => {
                    setOnboardingData(onboardingData)
                    onboardDevice(onboardingData).then()
                }}
                onboardingData={onboardingData}
                show={showIncompleteOnboardingModal}
            />

            <FirstTimeOnboardingModal
                onClose={() => {
                    setShowFirstTimeOnboardingModal(false)
                }}
                onSubmit={() => {
                    setShowFirstTimeOnboardingModal(false)
                }}
                show={showFirstTimeOnboardingModal}
            />

            <EditNameModal
                handleClose={() => setShowEditNameModal(false)}
                handleSubmit={updateDeviceName}
                i18n={{
                    close: _(t.close),
                    namePlaceholder: _(t.deviceName),
                    edit: _(t.edit),
                    name: _(t.name),
                    reset: _(t.reset),
                    saveChange: _(t.saveChange),
                    savingChanges: _(t.savingChanges),
                }}
                loading={deviceNameLoading}
                name={deviceName}
                show={showEditNameModal}
            />
        </PageLayout>
    )
}

export default DevicesDetailsPage
