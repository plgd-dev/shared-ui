import { ReactNode } from 'react'
import { tagSizes, tagVariants } from './constants'

export type TagTypeType = (typeof tagVariants)[keyof typeof tagVariants]
export type TagSizeType = (typeof tagSizes)[keyof typeof tagSizes]

export type Props = {
    children: ReactNode
    lowercase?: boolean
    onClick?: () => void
    size?: TagSizeType
    variant: TagTypeType
}

export const defaultProps: Partial<Props> = {
    lowercase: true,
    size: tagSizes.SMALL,
    variant: tagVariants.SUCCESS,
}
