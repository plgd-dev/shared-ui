import { HTMLAttributeAnchorTarget, MouseEvent, ReactNode } from 'react'

import { linkSizes } from './constants'
export type LinkSizesType = (typeof linkSizes)[keyof typeof linkSizes]

export type Props = {
    children: ReactNode
    dataTestId?: string
    disabled?: boolean
    href?: string
    onClick?: (e: MouseEvent<HTMLElement>) => void
    preventDefault?: boolean
    size?: LinkSizesType
    target?: HTMLAttributeAnchorTarget
    tabIndex?: number
}

export const defaultProps = {
    size: linkSizes.NORMAL,
    tabIndex: 1,
}
