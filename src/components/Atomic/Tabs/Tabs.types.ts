import { ReactNode } from 'react'

export type TabItem = {
    content: ReactNode
    dataTestId?: string
    disabled?: boolean
    id: number
    name: string
}

export type Props = {
    activeItem?: number
    fullHeight?: boolean
    innerPadding?: boolean
    isAsync?: boolean
    onAnimationComplete?: () => void
    onItemChange?: (activeItem: number) => void
    tabs: TabItem[]
}

export const defaultProps = {
    activeItem: 0,
}
