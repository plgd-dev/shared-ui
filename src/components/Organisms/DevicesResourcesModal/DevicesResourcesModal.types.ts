import { ReactNode } from 'react'
import { resourceModalTypes } from '../../../common/constants'
import { ForwardProps, NotificationI18n } from './DevicesResourcesModalNotifications'
import { Property } from '../GeneratedResourceForm/GeneratedResourceForm.types'

export type DevicesResourcesModalType = (typeof resourceModalTypes)[keyof typeof resourceModalTypes]

export type DevicesResourcesModalParamsType = {
    href: string
    currentInterface: string
}

export type DevicesDetailsResourceDataType = {
    types: string[]
    data: {
        content: any
        status: string
    }
}

export type DevicesDetailsResourceModalData = {
    data: {
        deviceId?: string
        href?: string
        interfaces?: string[]
        types: string[]
        content?: any
        status?: string
    }
    formProperties?: Property | false
    resourceData: any
    type?: DevicesResourcesModalType
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
    formProperties?: Property | false
    i18n: {
        advancedView: string
        close: string
        commandTimeout: string
        compactView: string
        content: string
        create: string
        creating: string
        deviceId: string
        fullView: string
        interfaces: string
        invalidNumber: string
        maxValue: (field: string, length: number) => string
        minValue: (field: string, length: number) => string
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
    resourceData?: DevicesDetailsResourceDataType
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
