import { ReactNode } from 'react'
import { tagVariants } from './constants'

export type TagVariantType = (typeof tagVariants)[keyof typeof tagVariants]

export type Props = {
    className?: string
    children: ReactNode
    dataTestId?: string
    icon?: ReactNode
    id?: string
    onClick?: () => void
    variant?: TagVariantType
}

export const defaultProps = {
    variant: tagVariants.DEFAULT,
}
