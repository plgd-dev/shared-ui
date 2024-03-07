import { CSSProperties, ReactNode } from 'react'
import { statuses } from './constants'

export type StatusType = (typeof statuses)[keyof typeof statuses]

export type TabItem = {
    content: ReactNode
    dataTestId?: string
    disabled?: boolean
    id: number
    name: string
    status?: StatusType
}

export type Props = {
    activeItem?: number
    className?: string
    fullHeight?: boolean
    innerPadding?: boolean
    isAsync?: boolean
    onAnimationComplete?: () => void
    onItemChange?: (activeItem: number) => void
    style?: CSSProperties
    tabs: TabItem[]
}

export const defaultProps = {
    activeItem: 0,
}
