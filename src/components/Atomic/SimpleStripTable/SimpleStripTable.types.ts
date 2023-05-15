import { ReactNode } from 'react'

export type Row = {
    attribute: string
    value: ReactNode
}

export type Props = {
    className?: string
    id?: string
    rows: Row[]
}
