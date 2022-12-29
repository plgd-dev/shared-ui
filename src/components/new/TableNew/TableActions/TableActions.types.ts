export type TableActionItemType = {
    icon: string
    id: string
    onClick: () => void
    tooltipText: string
}

export type Props = {
    className?: string
    id?: string
    items: TableActionItemType[]
}
