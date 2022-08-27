export type BreadcrumbItem = {
    to?: string
    label: string
    className?: string
}

export type Props = {
    className?: string
    items: BreadcrumbItem[]
}
