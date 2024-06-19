export type ResourceContentType = object | string | number | boolean

export type ResourceType = {
    href: string
    timeToLive: string
    content: ResourceContentType
    resourceUpdated?: {
        content: ResourceContentType
    }
}

export type Props = {
    className?: string
    dataTestId?: string
    defaultOpen?: boolean
    i18n: {
        add: string
        addContent: string
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
    onDeleted?: () => void
    onUpdate?: (data: ResourceType) => void
    readOnly?: boolean
    resourceData: ResourceType
    responsive?: boolean
}
