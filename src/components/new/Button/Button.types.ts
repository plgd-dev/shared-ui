import { MouseEvent, ReactNode } from 'react'
import { iconPositions, buttonVariants, buttonSizes } from './constants'

export type ButtonIconPositionType = typeof iconPositions[keyof typeof iconPositions]
export type ButtonVariantsType = typeof buttonVariants[keyof typeof buttonVariants]
export type ButtonSizesType = typeof buttonSizes[keyof typeof buttonSizes]

export type Props = {
    children: ReactNode
    className?: string
    disabled?: boolean
    fullWidth?: boolean
    htmlType?: 'submit' | 'button' | 'reset'
    icon?: ReactNode
    iconPosition?: ButtonIconPositionType
    loading?: boolean
    onClick?: (e: MouseEvent<HTMLElement>) => void
    size?: ButtonSizesType
    variant?: ButtonVariantsType
}

export const defaultProps: Partial<Props> = {
    iconPosition: iconPositions.ICON_LEFT,
    variant: buttonVariants.SECONDARY,
    htmlType: 'submit',
    size: buttonSizes.NORMAL,
}
