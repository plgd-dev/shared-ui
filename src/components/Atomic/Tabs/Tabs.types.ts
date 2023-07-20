import { ReactNode } from 'react'

export type TabItem = {
    id: number
    name: string
    content: ReactNode
}

export type Props = {
    activeItem?: number
    fullHeight?: boolean
    onItemChange?: (activeItem: number) => void
    tabs: TabItem[]
}

export const defaultProps = {
    activeItem: 0,
}
