import { TableDataType } from '../TableNew/Table.types'
import { Column } from 'react-table'

export type Props = {
    className?: string
    columns: Column[]
    data: TableDataType
    dataTestId?: string
    defaultSortBy?: {
        id?: string
        desc?: boolean
    }[]
    getRowProps?: (data?: any) => {}
    height?: number
    id?: string
    rowHeight?: number
}

export const defaultProps = {
    getRowProps: () => ({}),
    defaultSortBy: [],
    rowHeight: 54,
}
