export type DataType = {
    id: number
    data: any
    dataChain: string
    name: string
}

export type Props = {
    actions?: {
        onDownload?: (id: number) => void
        onDelete?: (id: number) => void
        onView?: (id: number) => void
    }
    data: DataType[]
    i18n: {
        download: string
        delete: string
        view: string
    }
}
