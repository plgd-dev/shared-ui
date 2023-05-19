import { ReactNode } from 'react'

export type TableActionItemType = {
    icon: ReactNode
    id: string
    onClick: () => void
    tooltipText: string
    size?: number
}

export type Props = {
    className?: string
    id?: string
    items: TableActionItemType[]
}
