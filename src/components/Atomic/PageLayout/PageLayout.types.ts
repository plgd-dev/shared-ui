import { ReactNode } from 'react'

export type Props = {
    children?: any
    collapsed?: boolean
    dataTestId?: string
    footer?: ReactNode
    header?: any
    headlineStatusTag?: ReactNode
    loading?: any
    title?: string
}
