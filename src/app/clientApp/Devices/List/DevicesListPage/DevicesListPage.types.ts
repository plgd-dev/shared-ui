import { ResourcesType } from '../../Devices.types'

export type DpsDataType = {
    deviceId: string
    resources: ResourcesType[] | undefined
}
