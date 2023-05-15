import { CSSProperties, ReactElement, ReactNode } from 'react'

export type ColumnSizeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'equal' | 'auto'

export type ColumnSizesType = {
    size?: ColumnSizeType
    sm?: ColumnSizeType
    md?: ColumnSizeType
    lg?: ColumnSizeType
    xl?: ColumnSizeType
}

export type Props = {
    children: ReactNode | ReactElement
    id?: string
    className?: string
    style?: CSSProperties
} & ColumnSizesType

export const defaultProps: Partial<Props> = {
    size: 12,
}
