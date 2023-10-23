import { ReactNode } from 'react'
import { justifyContent } from './constants'

export type TagGroupJustifyContentType = (typeof justifyContent)[keyof typeof justifyContent]

export type Props = {
    children: ReactNode[] | ReactNode
    className?: string
    id?: string
    i18n: {
        more: string
        types: string
    }
    justifyContent?: TagGroupJustifyContentType
}

export const defaultProps: Partial<Props> = {
    justifyContent: justifyContent.START,
}
