import { useTable, useExpanded } from 'react-table'
import BTable from 'react-bootstrap/Table'
import { Props, defaultProps } from './TreeTable.types'
import classNames from 'classnames'
import { FC } from 'react'

const defaultPropGetter = () => ({})

const TreeTable: FC<Props> = (props) => {
    const { className, columns, data, getRowProps = defaultPropGetter } = props
    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } = useTable(
        {
            columns,
            data,
            // autoResetExpanded: false,
        },
        useExpanded
    )

    return (
        <>
            <div className={classNames('plgd-table', 'tree-table', className)}>
                <BTable responsive striped {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup: any) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column: any) => (
                                    <th
                                        {...column.getHeaderProps()}
                                        style={{
                                            ...column.getHeaderProps().style,
                                            ...column.style,
                                        }}
                                    >
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row: any) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps(getRowProps(row))}>
                                    {row.cells.map((cell: any) => (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </BTable>
            </div>
        </>
    )
}

TreeTable.displayName = 'TreeTable'
TreeTable.defaultProps = defaultProps

export default TreeTable
