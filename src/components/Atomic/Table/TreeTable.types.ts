import { TableDataType } from './Table.types'
import { Column } from 'react-table'

export type Props = {
    className?: string
    columns: Column[]
    data: TableDataType
    getRowProps?: (data?: any) => {}
}

export const defaultProps = {
    getRowProps: () => ({}),
}
