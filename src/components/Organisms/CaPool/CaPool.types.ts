import { ReactNode, RefObject } from 'react'

export type Props = {
    customComponent?: ReactNode
    data: { id: string; name: string }[]
    headline: string
    headlineRef?: RefObject<HTMLHeadingElement>
    i18n: {
        delete: string
        download: string
        edit: string
        search: string
        showMore: string
        update: string
        view: string
    }
    onAdd?: () => void
    onDownload?: (id: string) => void
    onDelete?: (id: string) => void
    onEdit?: (id: string) => void
    onUpdate?: (id: string) => void
    onView?: (id: string) => void
    tableSearch?: boolean
}
