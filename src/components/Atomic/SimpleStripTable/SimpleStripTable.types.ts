import { ReactElement, ReactNode } from 'react'

export type Row = {
    attribute: string
    autoHeight?: boolean
    copyValue?: string | boolean
    dataTestId?: string
    key?: string
    required?: boolean
    value: ReactNode | ReactElement
}

export type Props = {
    className?: string
    headerLeft?: string
    headerRight?: string
    i18n?: {
        copy: string
    }
    id?: string
    leftColSize?: number
    rightColSize?: number
    rows: Row[]
}

export const defaultProps: Partial<Props> = {
    leftColSize: 8,
    rightColSize: 4,
}
