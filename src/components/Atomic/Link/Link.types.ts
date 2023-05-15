import { HTMLAttributeAnchorTarget, MouseEvent, ReactNode } from 'react'

export type Props = {
    children: ReactNode
    disabled?: boolean
    href?: string
    onClick?: (e: MouseEvent<HTMLElement>) => void
    preventDefault?: boolean
    target?: HTMLAttributeAnchorTarget
    tabIndex?: number
}

export const defaultProps = {
    tabIndex: 1,
}
