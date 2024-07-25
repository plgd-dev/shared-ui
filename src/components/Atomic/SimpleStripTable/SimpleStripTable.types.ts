import { ReactElement, ReactNode } from 'react'
import { Props as ColumnProps } from '../Grid/Column/Column.types'

export type Row = {
    attribute: ReactNode
    autoHeight?: boolean
    copyValue?: string | boolean
    dataTestId?: string
    key?: string
    required?: boolean
    value: ReactNode | ReactElement
}

export type Props = {
    className?: string
    dataTestId?: string
    headerLeft?: string
    headerRight?: string
    i18n?: {
        copy: string
    }
    id?: string
    noSidePadding?: boolean
    lastRowBorder?: boolean
    leftColSize?: number
    leftColProps?: ColumnProps
    rightColSize?: number
    rightColProps?: ColumnProps
    rows: Row[]
}

export const defaultProps: Partial<Props> = {
    leftColSize: 8,
    rightColSize: 4,
    lastRowBorder: true,
}
