import { ButtonIconPositionType, ButtonVariantsType } from '../Button/Button.types'
import { buttonVariants, iconPositions } from '../Button'
import { AlignType } from 'react-bootstrap/types'
import { ActionButtonItemType } from '../ActionButton/ActionButton.types'
import { ReactNode } from 'react'

export type Props = {
    children: ReactNode
    className?: string
    disabled?: boolean
    icon?: string
    iconPosition?: ButtonIconPositionType
    items: ActionButtonItemType[]
    loading?: boolean
    menuProps?: {
        align?: AlignType
        flip?: boolean
    }
    onClick?: () => void
    variant?: ButtonVariantsType
}

export const defaultProps = {
    variant: buttonVariants.SECONDARY,
    iconPosition: iconPositions.ICON_LEFT,
}
