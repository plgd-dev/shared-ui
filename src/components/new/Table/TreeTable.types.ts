import { TableColumnType, TableDataType } from './Table.types'

export type Props = {
    className?: string
    columns: TableColumnType[]
    data: TableDataType
    getRowProps?: (data?: any) => {}
}

export const defaultProps = {
    getRowProps: () => ({}),
}
