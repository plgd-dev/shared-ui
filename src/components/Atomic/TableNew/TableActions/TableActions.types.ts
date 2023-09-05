import { ReactNode } from 'react'

export type TableActionItemType = {
    hidden?: boolean
    icon: ReactNode
    id: string
    onClick: () => void
    size?: number
    tooltipText: string
}

export type Props = {
    className?: string
    id?: string
    items: TableActionItemType[]
}
