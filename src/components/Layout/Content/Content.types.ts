import { ReactNode } from 'react'
import { ButtonVariantsType } from '../../Atomic/Button/Button.types'

export type ContentActionType = {
    icon: ReactNode
    text: string
    variant?: ButtonVariantsType
    onClick: () => void
}

export type Props = {
    actionPrimary?: ContentActionType
    actions?: ContentActionType[]
    children?: ReactNode
    headline: string
    headlineStatusTag?: ReactNode
}
