import { ReactNode } from 'react'

export type ResourceContentType = object | string | number | boolean

export type ResourceStatusType = 'PENDING' | 'TIMEOUT' | 'DONE'
export type ResourceUpdateStatusType = 'OK' | 'ERROR' | 'CANCELED'

export type ResourceType = {
    content: ResourceContentType
    correlationId?: string
    href: string
    resourceUpdated?: {
        auditContext: {
            correlationId: string
            owner: string
        }
        content: ResourceContentType
        status: ResourceUpdateStatusType
        resourceId: {
            deviceId: string
            href: string
        }
    }
    status?: ResourceStatusType
    timeToLive: string
}

export type Props = {
    className?: string
    dataTestId?: string
    defaultOpen?: boolean
    i18n: {
        add: string
        addContent: string
        cancel?: string
        close: string
        compactView: string
        content: string
        default: string
        duration: string
        edit: string
        editContent: string
        fullView: string
        href: string
        name: string
        placeholder: string
        requiredField: (name: string) => string
        timeToLive: string
        unit: string
        update: string
        view: string
        viewContent: string
    }
    id?: string
    isTest?: boolean
    onCancelPending?: (resource: ResourceType) => void
    onDeleted?: () => void
    onUpdate?: (data: ResourceType) => void
    readOnly?: boolean
    resourceData: ResourceType
    responsive?: boolean
    statusTag?: ReactNode
}
