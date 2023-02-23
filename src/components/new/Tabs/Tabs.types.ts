import { ReactNode } from 'react'

export type TabItem = {
    name: string
    content: ReactNode
}

export type Props = {
    tabs: TabItem[]
    activeItem?: number
    onItemChange?: (activeItem: number) => void
}

export const defaultProps = {
    activeItem: 0,
}
