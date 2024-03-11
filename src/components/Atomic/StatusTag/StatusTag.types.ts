import { ReactNode } from 'react'
import { tagVariants } from './constants'

export type TagTypeType = (typeof tagVariants)[keyof typeof tagVariants]

export type Props = {
    children: ReactNode
    lowercase?: boolean
    onClick?: () => void
    variant: TagTypeType
}

export const defaultProps: Partial<Props> = {
    lowercase: true,
    variant: tagVariants.SUCCESS,
}
