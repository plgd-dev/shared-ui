import { ReactNode } from 'react'

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
    i18n: {
        search: string
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
}
