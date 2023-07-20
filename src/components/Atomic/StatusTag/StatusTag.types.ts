import { ReactNode } from 'react'
import { tagVariants } from './constants'

export type TagTypeType = typeof tagVariants[keyof typeof tagVariants]

export type Props = {
    children: ReactNode
    onClick?: () => void
    variant: TagTypeType
}

export const defaultProps = {
    variant: tagVariants.SUCCESS,
}
