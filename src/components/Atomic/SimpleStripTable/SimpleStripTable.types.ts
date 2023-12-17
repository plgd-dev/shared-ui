import { ReactNode } from 'react'

export type Row = {
    attribute: string
    value: ReactNode
    dataTestId?: string
}

export type Props = {
    className?: string
    id?: string
    leftColSize?: number
    rightColSize?: number
    rows: Row[]
}

export const defaultProps: Partial<Props> = {
    leftColSize: 8,
    rightColSize: 4,
}
