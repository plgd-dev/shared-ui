import { devicesStatuses } from '../../constants'
import { DeviceResourcesCrudType } from '../../Devices.types'

export type DevicesResourcesDeviceStatusType = (typeof devicesStatuses)[keyof typeof devicesStatuses]

export type Props = {
    data: {
        deviceId?: string
        href?: string
        interfaces: string[]
        resourceTypes: string[]
    }
    deviceId: string
    deviceStatus: DevicesResourcesDeviceStatusType
    isActiveTab: boolean
    isOwned: boolean
    loading: boolean
    pageSize: {
        height?: number
        width?: number
    }
} & DeviceResourcesCrudType
