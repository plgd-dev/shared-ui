import { ReactElement, ReactNode } from 'react'

export type Row = {
    attribute: string
    autoHeight?: boolean
    value: ReactNode | ReactElement
    dataTestId?: string
    key?: string
}

export type Props = {
    className?: string
    headerLeft?: string
    headerRight?: string
    id?: string
    leftColSize?: number
    rightColSize?: number
    rows: Row[]
}

export const defaultProps: Partial<Props> = {
    leftColSize: 8,
    rightColSize: 4,
}
