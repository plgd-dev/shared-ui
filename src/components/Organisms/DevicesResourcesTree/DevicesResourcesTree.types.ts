import { devicesStatuses } from '../../../common/constants'

export type DevicesResourcesDeviceStatusType = (typeof devicesStatuses)[keyof typeof devicesStatuses]

export type Props = {
    columns: any
    data: {
        deviceId?: string
        href?: string
        interfaces: string[]
        resourceTypes: string[]
    }
    deviceStatus?: DevicesResourcesDeviceStatusType
}
