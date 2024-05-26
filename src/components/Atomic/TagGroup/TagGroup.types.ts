import { ReactNode } from 'react'
import { justifyContent } from './constants'

export type TagGroupJustifyContentType = (typeof justifyContent)[keyof typeof justifyContent]

export type Props = {
    children: ReactNode[] | ReactNode
    className?: string
    dataTestId?: string
    id?: string
    i18n: {
        more: string
        modalHeadline: string
    }
    justifyContent?: TagGroupJustifyContentType
}

export const defaultProps: Partial<Props> = {
    justifyContent: justifyContent.START,
}
