import { DeviceDataType, ResourcesType } from '../../../Devices.types'

export type Props = {
    deviceId: string
    data: DeviceDataType
    isActiveTab: boolean
    isOwned: boolean
    isUnsupported: boolean
    onboardResourceLoading: boolean
    deviceOnboardingResourceData: any
    resources: ResourcesType[]
}
