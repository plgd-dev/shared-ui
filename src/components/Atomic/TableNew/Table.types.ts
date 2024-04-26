import { ReactNode } from 'react'
import { DEFAULT_ROW_HEIGHT } from './constants'

export type ColumnsComponentType = string | ReactNode | Function

export type TableColumnType = {
    Cell?: ColumnsComponentType
    Footer?: ColumnsComponentType
    Header?: ColumnsComponentType
    accessor?: string
    id?: string
    maxWidth?: number
    minWidth?: number
    width?: number
}

export type TableDataType = any

export type Props = {
    autoHeight?: boolean
    autoFillEmptyRows?: boolean
    className?: string
    columns: TableColumnType[]
    data: TableDataType
    defaultPageSize?: number
    defaultSelectedRowIds?: {}
    defaultSortBy?: {
        id?: string
        desc?: boolean
    }[]
    enablePagination?: boolean
    height?: number
    hideHeader?: boolean
    i18n: {
        search: string
        placeholder?: string
    }
    id?: string
    getCellProps?: (data: any) => void
    getColumnProps?: (data?: any) => void
    getRowProps?: (data?: any) => void
    globalSearch?: boolean
    onRowsSelect?: (isAllRowsSelected: boolean, data?: any) => void
    paginationProps?: object
    paginationPortalTargetId?: any
    primaryAttribute?: string
    rowHeight?: number
    showFilterButton?: boolean
    unselectRowsToken?: string | number
}

export const defaultProps = {
    defaultPageSize: 10,
    defaultSortBy: [],
    enablePagination: true,
    getCellProps: () => ({}),
    getColumnProps: () => ({}),
    getRowProps: () => ({}),
    globalSearch: true,
    rowHeight: DEFAULT_ROW_HEIGHT,
}
