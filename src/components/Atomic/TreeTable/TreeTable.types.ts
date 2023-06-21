import { TableDataType } from '../TableNew/Table.types'
import { Column } from 'react-table'

export type Props = {
    className?: string
    columns: Column[]
    data: TableDataType
    getRowProps?: (data?: any) => {}
    defaultSortBy?: {
        id?: string
        desc?: boolean
    }[]
    rowHeight?: number
}

export const defaultProps = {
    getRowProps: () => ({}),
    defaultSortBy: [],
    rowHeight: 54,
}
