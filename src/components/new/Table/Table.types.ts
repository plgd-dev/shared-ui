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
export type TableDataType = object[]

export type Props = {
    autoFillEmptyRows?: boolean
    bottomControls?: ReactNode
    className?: string
    columns: TableColumnType[]
    data: TableDataType
    defaultPageSize?: number
    defaultSortBy?: {
        id?: string
        desc?: boolean
    }[]
    enablePagination?: boolean
    getCellProps?: (data: any) => {}
    getColumnProps?: (data?: any) => {}
    getRowProps?: (data?: any) => {}
    onRowsSelect?: (data?: any) => {}
    paginationProps?: object
    primaryAttribute?: string
    unselectRowsToken?: string | number
}

export const defaultProps = {
    defaultSortBy: [],
    defaultPageSize: 10,
    enablePagination: true,
    getCellProps: () => ({}),
    getColumnProps: () => ({}),
    getRowProps: () => ({}),
}
