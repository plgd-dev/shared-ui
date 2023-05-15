export type Props = {
    data: {
        deviceId?: string
        href?: string
        interfaces: string[]
        resourceTypes: string[]
    }
    columns: any
    isActiveTab: boolean
    i18n: {
        search: string
    }
    pageSize: {
        height?: number
        width?: number
    }
}
