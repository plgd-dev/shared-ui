import { ReactNode } from 'react'

export type Props = {
    children?: any
    collapsed?: boolean
    dataTestId?: string
    footer?: ReactNode
    header?: any
    headerBorder?: boolean
    headlineCustomContent?: ReactNode
    headlineStatusTag?: ReactNode
    loading?: any
    notFound?: boolean
    tableLayout?: boolean
    title?: string
    xPadding?: boolean
}

export const defaultProps: Partial<Props> = {
    xPadding: true,
}
