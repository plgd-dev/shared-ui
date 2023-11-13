import React, { forwardRef, useCallback, useContext, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import { useIntl } from 'react-intl'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { Props, Tab1RefType, defaultProps } from './Tab1.types'
import DevicesList from '../../../../../../components/Organisms/DevicesList'
import { messages as d, messages as t } from '../../../Devices.i18n'
import ConfirmModal from '../../../../../../components/Atomic/ConfirmModal'
import { DEVICE_TYPE_OIC_WK_D, devicesOwnerships, NO_DEVICE_NAME } from '../../../constants'
import TagGroup from '../../../../../../components/Atomic/TagGroup'
import Tag from '../../../../../../components/Atomic/Tag'
import StatusTag from '../../../../../../components/Atomic/StatusTag'
import DevicesListActionButton from '../../DevicesListActionButton'
import { DpsDataType } from '../DevicesListPage.types'
import { deleteDevicesApi, disownDeviceApi, ownDeviceApi } from '../../../rest'
import Notification from '../../../../../../components/Atomic/Notification/Toast'
import notificationId from '../../../../notificationId'
import { disOwnDevice, flushDevices, ownDevice } from '../../../slice'
import { handleDeleteDevicesErrors, handleOwnDevicesErrors, sleep } from '../../../utils'
import { useIsMounted } from '../../../../../../common/hooks'
import AppContext from '../../../../../share/AppContext'
import { messages as app } from '../../../../App/App.i18n'
import { useDevicesList, useDevicesListCache } from '../../../hooks'
import { getApiErrorMessage } from '../../../../../../common/utils'

const { OWNED, UNSUPPORTED } = devicesOwnerships

const Tab1 = forwardRef<Tab1RefType, Props>((props, ref) => {
    const {
        detailLinkPrefix,
        loading,
        setDpsData,
        setDeleting,
        setOwning,
        setShowDpsModal,
        isActiveTab,
        unselectRowsToken,
        setLoading,
        useDevicesList: useDevicesListProp,
    } = { ...defaultProps, ...props }
    const { formatMessage: _ } = useIntl()
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const [selectedDevices, setSelectedDevices] = useState([])
    const [isAllSelected, setIsAllSelected] = useState(false)
    const { data, loading: loadingData, error: deviceError, refresh, discovery, setState } = useDevicesListCache(useDevicesListProp)
    const [singleDevice, setSingleDevice] = useState<null | string>(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { collapsed } = useContext(AppContext)
    const isMounted = useIsMounted()

    useImperativeHandle(ref, () => ({
        refresh: () => discovery(),
        flush: () => {
            setState((prevState: any) => ({ ...prevState, data: [] }))
        },
    }))

    useEffect(() => {
        if (isActiveTab) {
            refresh()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isActiveTab])

    useEffect(() => {
        setLoading(loadingData)
    }, [loadingData])

    useEffect(() => {
        setSelectedDevices([])
        setIsAllSelected(false)
    }, [unselectRowsToken])

    const handleOpenDeleteModal = useCallback(
        (deviceId?: string) => {
            if (typeof deviceId === 'string') {
                setSingleDevice(deviceId)
            } else if (singleDevice && !deviceId) {
                setSingleDevice(null)
            }

            setDeleteModalOpen(true)
        },
        [singleDevice]
    )

    const handleCloseDeleteModal = useCallback(() => {
        setDeleteModalOpen(false)
    }, [])

    const deleteDevices = async () => {
        try {
            setDeleting(true)
            await deleteDevicesApi()
            await sleep(200)

            if (isMounted) {
                Notification.success(
                    {
                        title: _(t.devicesDeleted),
                        message: _(t.devicesDeletedMessage),
                    },
                    {
                        notificationId: notificationId.SU_CA_DEVICE_LIST_DELETE_DEVICES,
                    }
                )

                // @ts-ignore
                dispatch(flushDevices(data))

                setDeleting(false)
                setDeleteModalOpen(false)
                handleCloseDeleteModal()
            }
        } catch (error) {
            setDeleting(false)
            handleDeleteDevicesErrors(error, _)
        }
    }

    const handleOwnDevice = async (isOwned: boolean, deviceId: string, deviceName: string) => {
        try {
            setOwning(true)
            isOwned ? await disownDeviceApi(deviceId) : await ownDeviceApi(deviceId)

            if (isMounted) {
                Notification.success(
                    {
                        title: isOwned ? _(t.deviceDisOwned) : _(t.deviceOwned),
                        message: isOwned ? _(t.deviceWasDisOwned, { name: deviceName }) : _(t.deviceWasOwned, { name: deviceName }),
                    },
                    {
                        notificationId: notificationId.SU_CA_DEVICE_LIST_HANDLE_OWN_DEVICE,
                    }
                )

                if (!isOwned) {
                    // @ts-ignore
                    dispatch(ownDevice(deviceId))
                } else {
                    // @ts-ignore
                    dispatch(disOwnDevice(deviceId))
                    refresh()
                }

                setOwning(false)
            }
        } catch (error) {
            handleOwnDevicesErrors(error, _)
            refresh()
            setOwning(false)
        }
    }

    const columns = useMemo(
        () => [
            {
                Header: _(t.name),
                accessor: 'data.content.n',
                Cell: ({ value, row }: { value: any; row: any }) => {
                    const deviceName = value || NO_DEVICE_NAME
                    return (
                        <Link data-test-id={deviceName} to={`${detailLinkPrefix}/devices/${row.original?.id}`}>
                            <span className='no-wrap-text'>{deviceName}</span>
                        </Link>
                    )
                },
                style: { width: '100%' },
            },
            {
                Header: 'Types',
                accessor: 'types',
                style: { maxWidth: '350px', width: '100%' },
                Cell: ({ value }: { value: any }) => {
                    if (!value) {
                        return null
                    }
                    return (
                        <TagGroup
                            i18n={{
                                more: _(app.more),
                                types: _(app.types),
                            }}
                        >
                            {value
                                .filter((i: string) => i !== DEVICE_TYPE_OIC_WK_D)
                                .map((i: string) => (
                                    <Tag key={i}>{i}</Tag>
                                ))}
                        </TagGroup>
                    )
                },
            },
            {
                Header: 'ID',
                accessor: 'id',
                style: { maxWidth: '350px', width: '100%' },
                Cell: ({ value }: { value: any }) => {
                    return <span className='no-wrap-text'>{value}</span>
                },
            },
            {
                Header: _(t.ownershipStatus),
                accessor: 'ownershipStatus',
                style: { width: '250px' },
                Cell: ({ value }: { value: any }) => {
                    const isOwned = OWNED === value

                    if (UNSUPPORTED === value) {
                        return <StatusTag variant='normal'>{_(t.unsupported)}</StatusTag>
                    }

                    return <StatusTag variant={isOwned ? 'success' : 'error'}>{isOwned ? _(t.owned) : _(t.unowned)}</StatusTag>
                },
            },
            {
                Header: _(t.actions),
                accessor: 'actions',
                disableSortBy: true,
                Cell: ({ row }: { row: any }) => {
                    const {
                        original: { id, ownershipStatus, data },
                    } = row
                    const isOwned = ownershipStatus === OWNED

                    return (
                        <DevicesListActionButton
                            deviceId={id}
                            onDelete={deleteDevices}
                            onOwnChange={() => handleOwnDevice(isOwned, id, data.content.name)}
                            onView={(deviceId) => navigate(`${detailLinkPrefix}/devices/${deviceId}`)}
                            ownershipStatus={ownershipStatus}
                            resourcesLoadedCallback={(resources) => {
                                setDpsData((prevData: DpsDataType) => ({
                                    ...prevData,
                                    resources,
                                }))
                            }}
                            showDpsModal={(deviceId: string) => {
                                setDpsData((prevData: DpsDataType) => ({ ...prevData, deviceId }))
                                setShowDpsModal(true)
                            }}
                        />
                    )
                },
                className: 'actions',
            },
        ],
        [loading] // eslint-disable-line
    )

    useEffect(() => {
        deviceError &&
            Notification.error(
                { title: _(d.deviceError), message: getApiErrorMessage(deviceError) },
                {
                    notificationId: notificationId.SU_CA_DEVICE_LIST_DEVICE_ERROR,
                }
            )
    }, [deviceError])

    const dataToDisplay = data || []

    return (
        <div style={{ height: '100%', display: 'flex' }}>
            <DevicesList
                collapsed={collapsed ?? false}
                columns={columns}
                data={loading ? [] : dataToDisplay}
                i18n={{
                    delete: _(t.delete),
                    search: _(t.search),
                    select: _(t.select),
                }}
                isActiveTab={isActiveTab}
                isAllSelected={isAllSelected}
                loading={loading}
                onDeleteClick={handleOpenDeleteModal}
                selectedDevices={selectedDevices}
                setIsAllSelected={setIsAllSelected}
                setSelectedDevices={setSelectedDevices}
                unselectRowsToken={unselectRowsToken}
            />

            <ConfirmModal
                body={_(t.flushDevicesMessage)}
                confirmButtonText={_(t.flushCache)}
                loading={loading}
                onClose={handleCloseDeleteModal}
                onConfirm={deleteDevices}
                show={deleteModalOpen}
                title={<>{_(t.flushDevices)}</>}
            >
                {_(t.flushCache)}
            </ConfirmModal>
        </div>
    )
})

Tab1.displayName = 'Tab1'

export default Tab1
