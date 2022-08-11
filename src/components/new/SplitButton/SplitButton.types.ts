import { ButtonIconPositionType, ButtonVariantsType } from '../Button/Button.types'
import { buttonVariants, iconPositions } from '../Button'
import { AlignType } from 'react-bootstrap/DropdownMenu'
import { ActionButtonItemType } from '../ActionButton/ActionButton.types'

export type Props = {
    variant: ButtonVariantsType
    icon?: string
    iconPosition?: ButtonIconPositionType
    onClick?: () => {}
    loading?: boolean
    disabled?: boolean
    className?: string
    menuProps: {
        align?: AlignType
        flip?: boolean
    }
    items: ActionButtonItemType[]
}

export const defaultProps = {
    variant: buttonVariants.SECONDARY,
    iconPosition: iconPositions.ICON_LEFT,
}
