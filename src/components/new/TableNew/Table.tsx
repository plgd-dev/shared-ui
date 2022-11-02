import { FC, forwardRef, useEffect, useRef } from 'react'
import { Props, defaultProps } from './Table.types'
import * as styles from './Table.styles'
import { usePagination, useRowSelect, useSortBy, useTable } from 'react-table'
import { compareIgnoreCase } from './Utils'
import classNames from 'classnames'
import Icon from '../Icon'

const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }: any, ref) => {
    const defaultRef = useRef()
    const resolvedRef = ref || defaultRef

    useEffect(() => {
        // @ts-ignore
        // resolvedRef?.current?.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return <input ref={resolvedRef} type='checkbox' {...rest} />
})

const Table: FC<Props> = (props) => {
    const {
        className,
        columns,
        data,
        onRowsSelect,
        primaryAttribute,
        defaultSortBy,
        defaultPageSize,
        autoFillEmptyRows,
        getRowProps,
        getColumnProps,
        getCellProps,
        paginationProps,
        enablePagination,
        bottomControls,
        unselectRowsToken,
    } = { ...defaultProps, ...props }

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        selectedFlatRows,
        toggleAllRowsSelected,
        state: { pageIndex, pageSize, selectedRowIds },
    } = useTable(
        {
            columns,
            data,
            initialState: {
                sortBy: defaultSortBy,
                pageSize: defaultPageSize,
            },
            sortTypes: {
                alphanumeric: (row1: any, row2: any, columnName: string) => compareIgnoreCase(row1.values[columnName], row2.values[columnName]),
            },
            autoResetPage: false,
            autoResetSelectedRows: false,
        },
        useSortBy,
        usePagination,
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns) => [
                // Let's make a column for selection
                {
                    id: 'selection',
                    // The header can use the table's getToggleAllRowsSelectedProps method
                    // to render a checkbox
                    Header: ({ getToggleAllPageRowsSelectedProps }: any) => (
                        <div>
                            <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
                        </div>
                    ),
                    // The cell can use the individual row's getToggleRowSelectedProps method
                    // to the render a checkbox
                    Cell: ({ row }: any) => (
                        <div>
                            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                        </div>
                    ),
                },
                ...columns,
            ])
        }
    )

    // Calls the onRowsSelect handler after a row was selected/unselected,
    // so that the parent can store the current selection.
    useEffect(() => {
        if (onRowsSelect && selectedRowIds && primaryAttribute) {
            onRowsSelect(selectedFlatRows.map((d: any) => d.original[primaryAttribute]))
        }
    }, [selectedRowIds, primaryAttribute]) // eslint-disable-line

    // Any time the unselectRowsToken is changed, all rows are gonna be unselected
    useEffect(() => {
        toggleAllRowsSelected(false)
    }, [unselectRowsToken]) // eslint-disable-line

    // When the defaultPageSize is changed, update the pageSize in the table
    // useEffect(() => {
    // setPageSize(defaultPageSize)
    // }, [defaultPageSize]) // eslint-disable-line

    console.log(page)

    return (
        <div className={className}>
            <table {...getTableProps()} css={styles.table}>
                <thead>
                    {headerGroups.map((headerGroup: any) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column: any, key: number) => (
                                // Sorting props to control sorting
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className={classNames(column.getHeaderProps(column.getSortByToggleProps()).className, column.className)}
                                    css={styles.headerTh}
                                    style={{
                                        ...column.getHeaderProps(column.getSortByToggleProps()).style,
                                        ...column.style,
                                    }}
                                >
                                    <div
                                        css={[
                                            styles.headerItem,
                                            key === 0 && styles.headerItemFirst,
                                            key === headerGroup.headers.length - 1 && styles.headerItemLast,
                                        ]}
                                        className='th-div'
                                    >
                                        <span css={styles.headerTitle}>{column.render('Header')}</span>
                                        {column.canSort && (
                                            <span
                                                className={classNames('sort-arrows', {
                                                    desc: column.isSorted && column.isSortedDesc,
                                                    asc: column.isSorted && !column.isSortedDesc,
                                                })}
                                                css={styles.sortArrows}
                                            >
                                                <Icon css={styles.sortArrow} icon='sort-up' size={6} />
                                                <Icon css={styles.sortArrow} icon='sort-down' size={6} />
                                            </span>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row: any, key: number) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps(getRowProps!(row))} css={styles.row}>
                                {row.cells.map((cell: any, cellKey: number) => {
                                    const Cell = styles.cell
                                    return (
                                        <td
                                            {...cell.getCellProps([
                                                {
                                                    className: cell.column.className,
                                                    style: cell.column.style,
                                                },
                                                getColumnProps!(cell.column),
                                                getCellProps!(cell),
                                            ])}
                                        >
                                            <Cell
                                                css={[
                                                    key === 0 && styles.firstRowCell,
                                                    cellKey === 0 && styles.firstCell,
                                                    cellKey === row.cells.length - 1 && styles.lastCell,
                                                ]}
                                            >
                                                {cell.render('Cell')}
                                            </Cell>
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    {/*{autoFillEmptyRows &&*/}
                    {/*    page.length < pageSize &&*/}
                    {/*    Array(pageSize - page.length)*/}
                    {/*        .fill(0)*/}
                    {/*        .map((emptyRow, i) => {*/}
                    {/*            return (*/}
                    {/*                <tr key={`empty-table-row-${i}`}>*/}
                    {/*                    <td colSpan={100} />*/}
                    {/*                </tr>*/}
                    {/*            )*/}
                    {/*        })}*/}
                </tbody>
            </table>
        </div>
    )
}

Table.displayName = 'Table'

export default Table
