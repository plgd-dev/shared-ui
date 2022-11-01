import { MouseEvent } from 'react'

export type BreadcrumbItem = {
    label: string
    link?: string
    className?: string
}

export type Props = {
    className?: string
    id?: string
    items: BreadcrumbItem[]
    onItemClick?: (item: BreadcrumbItem, e: MouseEvent) => {}
}
