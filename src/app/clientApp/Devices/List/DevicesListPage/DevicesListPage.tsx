import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import ReactDOM from 'react-dom'

import Notification from '../../../../../components/Atomic/Notification/Toast'
import PageLayout from '../../../../../components/Atomic/PageLayout'
import { messages as menuT } from '../../../../../components/Atomic/Menu/Menu.i18n'
import { getApiErrorMessage } from '../../../../../common/utils'
import Footer from '../../../../../components/Layout/Footer'
import { DevicesResourcesModalParamsType } from '../../../../../components/Organisms/DevicesResourcesModal/DevicesResourcesModal.types'
import { getDevices, updateDevices, flushDevices } from '../../slice'
import { DeviceDataType, ResourcesType } from '../../Devices.types'
import { handleUpdateResourceErrors, updateResourceMethod } from '../../utils'
import { useDevicesList } from '../../hooks'
import { messages as t } from '../../../RemoteClients/RemoteClients.i18n'
import { messages as d } from '../../../Devices/Devices.i18n'
import DevicesListHeader from '../DevicesListHeader'
import DevicesTimeoutModal from '../DevicesTimeoutModal'
import DevicesDPSModal from '../../DevicesDPSModal'
import { defaultProps, DpsDataType, Props } from './DevicesListPage.types'
import Breadcrumbs from '../../../../../components/Layout/Header/Breadcrumbs'
import notificationId from '../../../notificationId'
import testId from '../../../../../../../../src/testId'
import Tabs from '../../../../../components/Atomic/Tabs/Tabs'
import Tab1 from './Tabs/Tab1'
import Tab2 from './Tabs/Tab2'

const DevicesListPage: FC<Props> = (props) => {
    const { detailLinkPrefix, breadcrumbs: breadcrumbsProp, clientData, title } = { ...defaultProps, ...props }
    const { formatMessage: _ } = useIntl()
    const { data, loading, error: deviceError, refresh } = useDevicesList()

    const [timeoutModalOpen, setTimeoutModalOpen] = useState(false)
    const [showDpsModal, setShowDpsModal] = useState(false)
    const [dpsData, setDpsData] = useState<DpsDataType>({
        deviceId: '',
        resources: undefined,
    })
    const [activeTabItem, setActiveTabItem] = useState(0)
    const [owning, setOwning] = useState(false)
    const [deleting, setDeleting] = useState(false)

    const dispatch = useDispatch()
    const dataToDisplay: DeviceDataType = useSelector(getDevices)
    const [isDomReady, setIsDomReady] = useState(false)

    useEffect(() => {
        deviceError &&
            Notification.error(
                { title: _(d.deviceError), message: getApiErrorMessage(deviceError) },
                {
                    notificationId: notificationId.SU_CA_DEVICE_LIST_DEVICE_ERROR,
                }
            )
    }, [deviceError])

    useEffect(() => {
        // @ts-ignore
        data && dispatch(updateDevices(data))
    }, [data, dispatch])

    useEffect(() => {
        setIsDomReady(true)
    }, [])

    const handleTabChange = useCallback((i: number) => {
        setActiveTabItem(i)

        // navigate(`/devices/${id}${i === 1 ? '/resources' : ''}`, { replace: true })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleRefresh = useCallback(() => {
        refresh()
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const handleFlashDevices = () => {
        // @ts-ignore
        dispatch(flushDevices())
    }

    const loadingOrOwning = useMemo(() => loading || owning, [loading, owning])
    const loadingOrDeletingOrOwning = useMemo(() => loadingOrOwning || deleting, [loadingOrOwning, deleting])

    const handleOpenTimeoutModal = useCallback(() => {
        setTimeoutModalOpen(true)
    }, [])

    const breadcrumbs = useMemo(() => breadcrumbsProp ?? [{ label: _(menuT.devices), link: '/' }], [breadcrumbsProp])

    return (
        <PageLayout
            footer={<Footer footerExpanded={false} paginationComponent={<div id='paginationPortalTarget'></div>} />}
            header={
                <DevicesListHeader
                    handleFlashDevices={handleFlashDevices}
                    i18n={{
                        flushCache: _(d.flushCache),
                    }}
                    loading={loadingOrOwning}
                    openTimeoutModal={handleOpenTimeoutModal}
                    refresh={handleRefresh}
                />
            }
            loading={loading || owning}
            title={title ?? _(menuT.devices)}
        >
            {isDomReady && ReactDOM.createPortal(<Breadcrumbs items={breadcrumbs} />, document.querySelector('#breadcrumbsPortalTarget') as Element)}

            <Tabs
                activeItem={activeTabItem}
                fullHeight={true}
                onItemChange={handleTabChange}
                tabs={[
                    {
                        name: _(t.devices),
                        id: 0,
                        dataTestId: testId.remoteClients.detail.tabInformation,
                        content: (
                            <Tab1
                                data={dataToDisplay}
                                detailLinkPrefix={detailLinkPrefix}
                                loading={loadingOrDeletingOrOwning}
                                refresh={handleRefresh}
                                setDeleting={setDeleting}
                                setDpsData={setDpsData}
                                setOwning={setOwning}
                                setShowDpsModal={setShowDpsModal}
                            />
                        ),
                    },
                    {
                        name: _(t.configuration),
                        id: 1,
                        dataTestId: testId.remoteClients.detail.tabInformation,
                        content: <Tab2 clientData={clientData} />,
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
