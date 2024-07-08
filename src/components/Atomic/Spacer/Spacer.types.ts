import { CSSProperties, ReactNode } from 'react'

export type Props = {
    className?: string
    children: ReactNode
    dataTestId?: string
    id?: string
    style?: CSSProperties
    type: string
}

export type Property = { name: string; size: string }
