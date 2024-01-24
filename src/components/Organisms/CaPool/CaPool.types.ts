import { RefObject } from 'react'

export type Props = {
    data: { id: number; name: string }[]
    headline: string
    headlineRef?: RefObject<HTMLHeadingElement>
    i18n: {
        delete: string
        search: string
        showMore: string
        update: string
        view: string
    }
    onAdd?: () => void
    onDelete?: (id: string) => void
    onUpdate?: (id: string) => void
    onView?: (id: string) => void
    tableSearch?: boolean
}
