import { ReactNode } from 'react'

export type Props = {
    children?: any
    collapsed?: boolean
    dataTestId?: string
    footer?: ReactNode
    header?: any
    headerBorder?: boolean
    headlineStatusTag?: ReactNode
    loading?: any
    title?: string
    xPadding?: boolean
}

export const defaultProps: Partial<Props> = {
    xPadding: true,
}
