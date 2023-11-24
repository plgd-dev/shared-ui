import React, { FC, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useIntl } from 'react-intl'
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom'

import Notification from '../../../../../components/Atomic/Notification/Toast'
import PageLayout from '../../../../../components/Atomic/PageLayout'
import { messages as menuT } from '../../../../../components/Atomic/Menu/Menu.i18n'
import Footer from '../../../../../components/Layout/Footer'
import { DevicesResourcesModalParamsType } from '../../../../../components/Organisms/DevicesResourcesModal/DevicesResourcesModal.types'
import { ResourcesType } from '../../Devices.types'
import { handleUpdateResourceErrors, updateResourceMethod } from '../../utils'
import { messages as t } from '../../../RemoteClients/RemoteClients.i18n'
import { messages as d } from '../../../Devices/Devices.i18n'
import DevicesListHeader from '../DevicesListHeader'
import DevicesTimeoutModal from '../DevicesTimeoutModal'
import DevicesDPSModal from '../../DevicesDPSModal'
import { defaultProps, DpsDataType, Props } from './DevicesListPage.types'
import Breadcrumbs from '../../../../../components/Layout/Header/Breadcrumbs'
import notificationId from '../../../notificationId'
import Tabs from '../../../../../components/Atomic/Tabs/Tabs'
import Tab1 from './Tabs/Tab1'
import Tab2 from './Tabs/Tab2'
import { remoteClientStatuses } from '../../../RemoteClients/constants'
import AppContext from '../../../../share/AppContext'
import { Tab1RefType } from './Tabs/Tab1.types'
import FooterVersion from '../../FooterVersion/FooterVersion'

import { deleteDevicesApi } from '../../rest'

export const DevicesListPage: FC<Props> = (props) => {
    const {
        detailLinkPrefix,
        breadcrumbs: breadcrumbsProp,
        clientData,
        defaultActiveTab,
        initializedByAnother,
        reInitializationError,
        loading: loadingProp,
        title,
    } = { ...defaultProps, ...props }
    const { formatMessage: _ } = useIntl()
    const { isHub } = useContext(AppContext)
    const tab1Ref = useRef<Tab1RefType | null>(null)

    const [timeoutModalOpen, setTimeoutModalOpen] = useState(false)
    const [showDpsModal, setShowDpsModal] = useState(false)
    const [dpsData, setDpsData] = useState<DpsDataType>({
        deviceId: '',
        resources: undefined,
    })
    const [activeTabItem, setActiveTabItem] = useState(defaultActiveTab ?? 0)
    const [owning, setOwning] = useState(false)
    const [loading, setLoading] = useState(false)
    const [deleting, setDeleting] = useState(false)

    const navigate = useNavigate()
    const [isDomReady, setIsDomReady] = useState(false)
    const [unselectRowsToken, setUnselectRowsToken] = useState(0)
    const isReachable = useMemo(() => {
        if (!isHub) {
            return !initializedByAnother
        }

        return clientData?.status === remoteClientStatuses.REACHABLE
    }, [clientData?.status, initializedByAnother, isHub])

    useEffect(() => {
        setIsDomReady(true)
        if (defaultActiveTab === 1) {
            const base = isHub ? `/remote-clients/${clientData?.id}` : ''
            navigate(`${base}/configuration`, { replace: true })
        }
    }, [clientData?.id, defaultActiveTab, isHub, navigate])

    const handleTabChange = useCallback(
        (i: number) => {
            setActiveTabItem(i)
            const base = isHub ? `/remote-clients/${clientData?.id}` : ''
            navigate(`${base}${i === 1 ? '/configuration' : '/'}`, { replace: true })
        },
        [clientData?.id, isHub, navigate]
    )

    const handleRefresh = useCallback(() => {
        tab1Ref?.current?.refresh()
    }, [])

    const handleFlushDevices = useCallback(() => {
        try {
            deleteDevicesApi().then((r) => {
                tab1Ref?.current?.flush()

                Notification.success(
                    {
                        title: _(d.devicesDeleted),
                        message: _(d.devicesDeletedMessage),
                    },
                    {
                        notificationId: notificationId.SU_CA_DEVICE_LIST_FLUSH_DEVICES,
                    }
                )
            })
        } catch (e: any) {
            console.log(e)
            Notification.error(
                {
                    title: _(d.deviceFlushError),
                    message: e.message,
                },
                {
                    notificationId: notificationId.SU_CA_DEVICE_LIST_FLUSH_DEVICES_ERROR,
                }
            )
        }
    }, [])

    // Updates the resource through rest API
    const updateResource = async ({ href, currentInterface = '' }: DevicesResourcesModalParamsType, resourceDataUpdate: any) => {
        await updateResourceMethod(
            { deviceId: dpsData.deviceId, href, currentInterface },
            resourceDataUpdate,
            () => {
                Notification.success(
                    {
                        title: _(d.resourceUpdateSuccess),
                        message: _(d.resourceWasUpdated),
                    },
                    {
                        notificationId: notificationId.SU_CA_DEVICE_LIST_HANDLE_UPDATE_RESOURCE,
                    }
                )
                setShowDpsModal(false)
                setDpsData({ deviceId: '', resources: undefined })
            },
            (error: any) => {
                handleUpdateResourceErrors(error, { id: dpsData.deviceId, href }, _)
            }
        )
    }

    const loadingOrOwning = useMemo(() => owning || loading || loadingProp, [owning, loading, loadingProp])
    const loadingOrDeletingOrOwning = useMemo(() => loadingOrOwning || deleting, [loadingOrOwning, deleting])

    const handleOpenTimeoutModal = useCallback(() => {
        setTimeoutModalOpen(true)
    }, [])

    useEffect(() => {
        if ((initializedByAnother || reInitializationError) && loading) {
            setLoading(false)
        }
    }, [reInitializationError, loading, initializedByAnother])

    const breadcrumbs = useMemo(() => breadcrumbsProp ?? [{ label: _(menuT.devices), link: '/' }], [breadcrumbsProp])

    useEffect(() => {
        if (activeTabItem === 0 && (!isReachable || initializedByAnother || reInitializationError)) {
            setTimeout(() => {
                handleTabChange(1)
            }, 0)
        }
    }, [isReachable, activeTabItem, handleTabChange, initializedByAnother, reInitializationError])

    return (
        <PageLayout
            footer={
                <Footer
                    contentLeft={isHub ? undefined : <FooterVersion />}
                    footerExpanded={false}
                    paginationComponent={<div id='paginationPortalTarget'></div>}
                />
            }
            header={
                <DevicesListHeader
                    handleFlushDevices={handleFlushDevices}
                    i18n={{
                        flushCache: _(d.flushCache),
                    }}
                    loading={loadingOrOwning || !isReachable || !!initializedByAnother || activeTabItem === 1}
                    openTimeoutModal={handleOpenTimeoutModal}
                    refresh={handleRefresh}
                />
            }
            loading={loadingOrOwning}
            title={title ?? _(menuT.devices)}
        >
            {isDomReady && ReactDOM.createPortal(<Breadcrumbs items={breadcrumbs} />, document.querySelector('#breadcrumbsPortalTarget') as Element)}

            <Tabs
                activeItem={activeTabItem}
                fullHeight={true}
                onAnimationComplete={() => setUnselectRowsToken(Math.random())}
                onItemChange={handleTabChange}
                tabs={[
                    {
                        name: _(t.devices),
                        id: 0,
                        content:
                            isReachable && !initializedByAnother ? (
                                <Tab1
                                    detailLinkPrefix={detailLinkPrefix}
                                    isActiveTab={activeTabItem === 0}
                                    loading={loadingOrDeletingOrOwning}
                                    ref={tab1Ref}
                                    setDeleting={setDeleting}
                                    setDpsData={setDpsData}
                                    setLoading={setLoading}
                                    setOwning={setOwning}
                                    setShowDpsModal={setShowDpsModal}
                                    unselectRowsToken={unselectRowsToken}
                                    useDevicesList={!reInitializationError && !loadingProp && activeTabItem === 0 && isReachable}
                                />
                            ) : (
                                <div />
                            ),
                        disabled: !isReachable || initializedByAnother || reInitializationError,
                    },
                    {
                        name: _(t.configuration),
                        id: 1,
                        content: <Tab2 clientData={clientData} initializedByAnother={initializedByAnother || reInitializationError} />,
                    },
                ]}
            />

            <DevicesTimeoutModal onClose={() => setTimeoutModalOpen(false)} show={timeoutModalOpen} />

            <DevicesDPSModal
                onClose={() => setShowDpsModal(false)}
                resources={dpsData.resources as ResourcesType[]}
                show={showDpsModal}
                updateResource={updateResource}
            />
        </PageLayout>
    )
}

DevicesListPage.defaultProps = defaultProps
DevicesListPage.displayName = 'DevicesListPage'

export default DevicesListPage
