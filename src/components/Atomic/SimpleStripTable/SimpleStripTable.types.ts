import { ReactNode } from 'react'

export type Row = {
    attribute: string
    value: ReactNode
    dataTestId?: string
}

export type Props = {
    className?: string
    id?: string
    rows: Row[]
}
