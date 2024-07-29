import { CSSProperties, ReactNode } from 'react'
import { statuses } from './constants'

export type StatusType = (typeof statuses)[keyof typeof statuses]

export type TabItemType = {
    content: ReactNode
    dataTestId?: string
    disabled?: boolean
    id: number
    innerPadding?: boolean
    name: string
    status?: StatusType
}

export type Props = {
    activeItem: number
    className?: string
    fullHeight?: boolean
    innerPadding?: boolean
    isAsync?: boolean
    onAnimationComplete?: () => void
    onItemChange?: (activeItem: number) => void
    style?: CSSProperties
    tabs?: TabItemType[]
    children?: ReactNode[]
}

export const defaultProps: Partial<Props> = {
    activeItem: 0,
}
