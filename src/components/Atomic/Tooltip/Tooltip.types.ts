import { ReactNode } from 'react'
import { Placement } from '@floating-ui/react-dom-interactions'
import { tooltipVariants } from './constants'

export type TooltipVariantsType = (typeof tooltipVariants)[keyof typeof tooltipVariants]

export type Props = {
    children: JSX.Element
    className?: string
    content: ReactNode
    delay?: number
    id?: string
    initialOpen?: boolean
    maxWidth?: number
    placement?: Placement
    portalTarget?: HTMLElement
    variant?: TooltipVariantsType
    zIndex?: number
}

export const defaultProps: Partial<Props> = {
    placement: 'top',
    portalTarget: document.getElementById('modal-floating')!,
}

export type TooltipIconProps = Omit<Props, 'children'> & {
    iconSize?: number
}
