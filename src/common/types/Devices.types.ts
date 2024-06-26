import { devicesStatuses, shadowSynchronizationStates } from '../constants'

export type DevicesDetailMetaDataStatusValueType = (typeof devicesStatuses)[keyof typeof devicesStatuses]

export type DevicesDetailMetaDataStatusShadowSynchronizationType = (typeof shadowSynchronizationStates)[keyof typeof shadowSynchronizationStates]

export type ResourcesType = {
    deviceId: string
    href: string
    interfaces: string[]
    resourceTypes: string[]
}

export type StreamApiPropsType = {
    data: any
    updateData: any
    loading: boolean
    error: string | null
    refresh: () => void
}

export type DeviceResourcesCrudType = {
    onCreate: (href: string) => Promise<void>
    onDelete: (href: string) => void
    onUpdate: ({ deviceId, href }: { deviceId?: string; currentInterface?: string; href: string }) => void | Promise<void>
}

export type DeviceDataType = {
    id: string
    types: string[]
    endpoints: string[]
    name: string
    metadata: {
        status: {
            value: DevicesDetailMetaDataStatusValueType
        }
        shadowSynchronization: DevicesDetailMetaDataStatusShadowSynchronizationType
    }
}
