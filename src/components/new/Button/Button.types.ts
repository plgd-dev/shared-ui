import { MouseEvent } from 'react'
import { iconPositions, buttonVariants } from './constants'

export type ButtonIconPositionType = typeof iconPositions[keyof typeof iconPositions]
export type ButtonVariantsType = typeof buttonVariants[keyof typeof buttonVariants]

export type Props = {
    className?: string
    disabled?: boolean
    icon?: string
    iconPosition?: ButtonIconPositionType
    loading?: boolean
    onClick?: (e: MouseEvent<HTMLElement>) => void
    variant?: ButtonVariantsType
}

export const defaultProps: Partial<Props> = {
    iconPosition: iconPositions.ICON_LEFT,
    variant: buttonVariants.PRIMARY,
}
