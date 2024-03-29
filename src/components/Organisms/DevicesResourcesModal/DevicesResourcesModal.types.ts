import { ReactNode } from 'react'
import { resourceModalTypes } from '../../../common/constants'
import { ForwardProps, NotificationI18n } from './DevicesResourcesModalNotifications/DevicesResourcesModalNotifications.types'

export type DevicesResourcesModalType = (typeof resourceModalTypes)[keyof typeof resourceModalTypes]

export type DevicesResourcesModalParamsType = {
    href: string
    currentInterface: string
}

export type Props = {
    confirmDisabled?: boolean
    createResource: ({ href, currentInterface }: DevicesResourcesModalParamsType, jsonData?: any) => void
    data?: {
        deviceId?: string
        href?: string
        interfaces?: string[]
        types: string[]
    }
    deviceName: string
    deviceId?: string
    fetchResource: ({ href, currentInterface }: DevicesResourcesModalParamsType) => void | Promise<void>
    i18n: {
        close: string
        commandTimeout: string
        compactView: string
        create: string
        creating: string
        deviceId: string
        fullView: string
        interfaces: string
        resourceInterfaces: string
        retrieve: string
        retrieving: string
        supportedTypes: string
        types: string
        update: string
        updating: string
    } & NotificationI18n
    isDeviceOnline: boolean
    isUnregistered: boolean
    loading: boolean
    onClose: () => void
    resourceData?: {
        types: string[]
        data: {
            content: any
            status: string
        }
    }
    retrieving: boolean
    ttlControl?: ReactNode
    type?: DevicesResourcesModalType
    updateResource: ({ href, currentInterface }: DevicesResourcesModalParamsType, jsonData?: any) => void
    show: boolean
} & ForwardProps

export const defaultProps = {
    type: resourceModalTypes.UPDATE_RESOURCE,
    show: false,
}
