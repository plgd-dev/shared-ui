import { FC, useEffect, useMemo, useState } from 'react'
import { useResizeDetector } from 'react-resize-detector'
import { useNavigate, useParams } from 'react-router-dom'
import { useIntl } from 'react-intl'
import omit from 'lodash/omit'

import { useIsMounted } from '../../../../../../common/hooks'
import DevicesResourcesModal from '../../../../../../components/Organisms/DevicesResourcesModal'
import Notification from '../../../../../../components/Atomic/Notification/Toast'
import { DevicesResourcesModalParamsType } from '../../../../../../components/Organisms/DevicesResourcesModal/DevicesResourcesModal.types'
import DeleteModal from '../../../../../../components/Atomic/Modal/components/DeleteModal'
import { isNotificationActive } from '../../../slice'
import { defaultNewResource, resourceModalTypes, knownResourceHref } from '../../../constants'
import {
    handleCreateResourceErrors,
    handleDeleteResourceErrors,
    handleFetchResourceErrors,
    handleUpdateResourceErrors,
    updateResourceMethod,
    hasGeneratedResourcesForm,
} from '../../../utils'
import { createDevicesResourceApi, deleteDevicesResourceApi, getDevicesResourcesApi } from '../../../rest'
import { messages as t } from '../../../Devices.i18n'
import { deviceResourceUpdateListener } from '../../../websockets'
import DevicesResources from '../../../Resources/DevicesResources'
import { Props } from './Tab2.types'
import { DevicesDetailsResourceModalData } from '../DevicesDetailsPage.types'
import DevicesDPSModal from '../../../DevicesDPSModal'
import notificationId from '../../../../notificationId'
import { Property } from '../../../../../../components/Organisms/GeneratedResourceForm/GeneratedResourceForm.types'

const Tab2: FC<Props> = (props) => {
    const {
        closeDpsModal,
        detailLinkPrefix,
        deviceName,
        deviceStatus,
        isActiveTab,
        isOnline,
        isOwned,
        isUnregistered,
        loadingResources,
        refreshResources,
        resourcesData,
        showDpsModal,
    } = props
    const { id: routerId, deviceId, ...others } = useParams()
    // if deviceId is set, ignore id, id is clientId
    const id = deviceId || routerId || ''
    const hrefParam = others['*'] || ''

    const { formatMessage: _ } = useIntl()
    const { ref, width, height } = useResizeDetector()
    const isMounted = useIsMounted()
    const navigate = useNavigate()

    const [resourceModalData, setResourceModalData] = useState<DevicesDetailsResourceModalData | undefined>(undefined)
    const [loadingResource, setLoadingResource] = useState(false)
    const [savingResource, setSavingResource] = useState(false)
    const [deleteResourceHref, setDeleteResourceHref] = useState<string>('')
    const [resourceModal, setResourceModal] = useState(false)

    const resources = useMemo(() => resourcesData?.resources || [], [resourcesData])

    const generatedResourcesForm = useMemo(() => hasGeneratedResourcesForm(resources), [resources])

    const loadFormData = async () => {
        try {
            const { data: resourceData } = await getDevicesResourcesApi({
                deviceId: id,
                href: knownResourceHref.WELL_KNOW_WOT,
                currentInterface: '',
            })

            return resourceData.data.content
        } catch (error) {
            console.error(error)
            if (error) {
                Notification.error(
                    { title: _(t.resourceGetKnowConfErrorTitle), message: _(t.resourceGetKnowConfErrorMessage) },
                    {
                        notificationId: notificationId.SU_CA_DEVICE_DETAIL_TAB_2_GET_RESOURCE,
                    }
                )
            }
        }
    }

    // Open the resource modal when href is present
    useEffect(
        () => {
            if (hrefParam && !loadingResources) {
                openUpdateModal({ href: `/${hrefParam}` }).then()
            }
        },
        [hrefParam, loadingResources] // eslint-disable-line
    )

    // Fetches the resources supported types and sets its values to the modal data, which opens the modal.
    const openCreateModal = async (href: string) => {
        // If there is already a fetch for a resource, disable the next attempt for a fetch until the previous fetch finishes
        if (loadingResource) {
            return
        }

        setLoadingResource(true)

        try {
            const { data: deviceData } = await getDevicesResourcesApi({
                deviceId: id,
                href,
            })
            const supportedTypes = deviceData?.data?.content?.rts || []

            if (isMounted.current) {
                setLoadingResource(false)

                // Setting the data and opening the modal
                setResourceModalData({
                    data: {
                        href,
                        types: supportedTypes,
                    },
                    resourceData: {
                        ...defaultNewResource,
                        rt: supportedTypes,
                    },
                    type: resourceModalTypes.CREATE_RESOURCE,
                })
                setResourceModal(true)
            }
        } catch (error) {
            if (error && isMounted.current) {
                setLoadingResource(false)
                handleFetchResourceErrors(error, _)
            }
        }
    }

    // Created a new resource through rest API
    const createResource = async ({ href, currentInterface = '' }: DevicesResourcesModalParamsType, resourceDataCreate: object) => {
        setSavingResource(true)

        try {
            await createDevicesResourceApi({ deviceId: id, href, currentInterface }, resourceDataCreate)

            if (isMounted.current) {
                Notification.success(
                    {
                        title: _(t.resourceCreateSuccess),
                        message: _(t.resourceWasCreated),
                    },
                    {
                        notificationId: notificationId.SU_CA_DEVICE_DETAIL_TAB2_CREATE_RESOURCE,
                    }
                )

                refreshResources()
                setResourceModalData(undefined) // close modal
                setSavingResource(false)
            }
        } catch (error) {
            if (error && isMounted.current) {
                handleCreateResourceErrors(error, { id, href }, _)
                setSavingResource(false)
            }
        }
    }

    // Updates the resource through rest API
    const updateResource = async ({ href, currentInterface = '' }: DevicesResourcesModalParamsType, resourceDataUpdate: any) => {
        setSavingResource(true)

        await updateResourceMethod(
            { deviceId: id, href, currentInterface },
            resourceDataUpdate,
            () => {
                Notification.success(
                    {
                        title: _(t.resourceUpdateSuccess),
                        message: _(t.resourceWasUpdated),
                    },
                    {
                        notificationId: notificationId.SU_CA_DEVICE_DETAIL_TAB_2_UPDATE_RESOURCE,
                    }
                )
                handleCloseUpdateModal()
                setSavingResource(false)
            },
            (error: any) => {
                setSavingResource(false)
                handleUpdateResourceErrors(error, { id, href }, _)
            }
        )
    }

    // Fetches the resource and sets its values to the modal data, which opens the modal.
    const openUpdateModal = async ({ href, currentInterface = '' }: { href: string; currentInterface?: string }) => {
        // If there is already a fetch for a resource, disable the next attempt for a fetch until the previous fetch finishes
        if (loadingResource) {
            return
        }

        setLoadingResource(true)

        try {
            const { data: resourceData } = await getDevicesResourcesApi({
                deviceId: id,
                href,
                currentInterface,
            })

            let formProperties: Property | false = false

            if (generatedResourcesForm) {
                const generatedFormResourceData = await loadFormData()
                formProperties = href === knownResourceHref.WELL_KNOW_WOT ? generatedFormResourceData : generatedFormResourceData?.properties[href]
            }

            omit(resourceData, ['data.content.if', 'data.content.rt'])

            if (isMounted.current) {
                setLoadingResource(false)

                // Retrieve the types and interfaces of this resource
                const { resourceTypes: types = [], interfaces = [] } = resources?.find?.((link: { href: string }) => link.href === href) || {}

                // Setting the data and opening the modal
                setResourceModalData({
                    data: {
                        href,
                        types,
                        interfaces,
                    },
                    resourceData,
                    formProperties,
                })
                setResourceModal(true)
                navigate(`${detailLinkPrefix || ''}/devices/${id}/resources${href}`, { replace: true })
            }
        } catch (error) {
            if (error && isMounted.current) {
                setLoadingResource(false)
                handleFetchResourceErrors(error, _)
                navigate(`${detailLinkPrefix || ''}/devices/${id}/resources`, { replace: true })
            }
        }
    }

    const deleteResource = async () => {
        setLoadingResource(true)

        try {
            await deleteDevicesResourceApi({
                deviceId: id,
                href: deleteResourceHref || '',
            })

            if (isMounted.current) {
                Notification.success(
                    {
                        title: _(t.resourceDeleteSuccess),
                        message: _(t.resourceWasDeleted),
                    },
                    {
                        notificationId: notificationId.SU_CA_DEVICE_DETAIL_TAB_2_DELETE_RESOURCE,
                    }
                )

                refreshResources()
                setLoadingResource(false)
                closeDeleteModal()
            }
        } catch (error) {
            if (error && isMounted.current) {
                handleDeleteResourceErrors(error, { id, href: deleteResourceHref }, _)
                setLoadingResource(false)
                closeDeleteModal()
            }
        }
    }

    const openDeleteModal = (href: string) => {
        setDeleteResourceHref(href)
    }

    const closeDeleteModal = () => {
        setDeleteResourceHref('')
        navigate(`${detailLinkPrefix || ''}/devices/${id}/resources`, { replace: true })
    }

    const handleCloseUpdateModal = () => {
        setResourceModal(false)
        navigate(`${detailLinkPrefix || ''}/devices/${id}/resources`, { replace: true })
    }

    return (
        <div
            ref={ref}
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <DevicesResources
                data={resources}
                deviceId={id}
                deviceStatus={deviceStatus}
                isActiveTab={isActiveTab}
                isOwned={isOwned}
                loading={loadingResource}
                onCreate={openCreateModal}
                onDelete={openDeleteModal}
                onUpdate={openUpdateModal}
                pageSize={{ width, height: height ? height - 44 : 0 }} // tree switch
            />

            <DevicesResourcesModal
                {...resourceModalData}
                createResource={createResource}
                deviceId={id}
                deviceName={deviceName}
                deviceResourceUpdateListener={deviceResourceUpdateListener}
                fetchResource={openUpdateModal}
                generatedResourcesForm={generatedResourcesForm}
                i18n={{
                    advancedView: _(t.advancedView),
                    close: _(t.close),
                    commandTimeout: _(t.commandTimeout),
                    compactView: _(t.compactView),
                    content: _(t.content),
                    create: _(t.create),
                    creating: _(t.creating),
                    deviceId: _(t.deviceId),
                    fullView: _(t.fullView),
                    interfaces: _(t.interfaces),
                    invalidNumber: '',
                    maxValue: () => '',
                    minValue: () => '',
                    notifications: _(t.notifications),
                    off: _(t.off),
                    on: _(t.on),
                    resourceInterfaces: _(t.resourceInterfaces),
                    retrieve: _(t.retrieve),
                    retrieving: _(t.retrieving),
                    supportedTypes: _(t.supportedTypes),
                    types: _(t.types),
                    update: _(t.update),
                    updating: _(t.updating),
                }}
                isDeviceOnline={isOnline}
                isNotificationActive={isNotificationActive}
                isUnregistered={isUnregistered}
                loading={savingResource}
                onClose={handleCloseUpdateModal}
                retrieving={loadingResource}
                show={resourceModal}
                updateResource={updateResource}
            />

            <DeleteModal
                footerActions={[
                    {
                        label: _(t.cancel),
                        onClick: closeDeleteModal,
                        variant: 'tertiary',
                    },
                    {
                        label: _(t.delete),
                        onClick: deleteResource,
                        variant: 'primary',
                    },
                ]}
                onClose={closeDeleteModal}
                show={!!deleteResourceHref}
                subTitle={_(t.deleteResourceMessageSubtitle)}
                title={_(t.deleteResourceMessage)}
            />

            <DevicesDPSModal onClose={closeDpsModal} resources={resources} show={showDpsModal} updateResource={updateResource} />
        </div>
    )
}

Tab2.displayName = 'Tab2'

export default Tab2
