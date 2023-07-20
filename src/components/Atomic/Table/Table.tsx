// @ts-nocheck
import { FC, useEffect } from 'react'
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table'
import BTable from 'react-bootstrap/Table'
import { Props, defaultProps } from './Table.types'
import classNames from 'classnames'
import Pagination from './Pagination'
import { compareIgnoreCase } from './Utils'

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
        useRowSelect
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
    useEffect(() => {
        setPageSize(defaultPageSize)
    }, [defaultPageSize]) // eslint-disable-line

    return (
        <>
            <div className={classNames('plgd-table', className)}>
                <BTable responsive striped {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup: any) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column: any) => (
                                    // Sorting props to control sorting
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        className={classNames(column.getHeaderProps(column.getSortByToggleProps()).className, column.className)}
                                        style={{
                                            ...column.getHeaderProps(column.getSortByToggleProps()).style,
                                            ...column.style,
                                        }}
                                    >
                                        <div className='th-div'>
                                            {column.render('Header')}
                                            {column.canSort && (
                                                <span
                                                    className={classNames('sort-arrows', {
                                                        desc: column.isSorted && column.isSortedDesc,
                                                        asc: column.isSorted && !column.isSortedDesc,
                                                    })}
                                                >
                                                    <i className='fas fa-caret-up icon-asc' />
                                                    <i className='fas fa-caret-down icon-desc' />
                                                </span>
                                            )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps(getRowProps!(row))}>
                                    {row.cells.map((cell: any) => {
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
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                        {autoFillEmptyRows &&
                            page.length < pageSize &&
                            Array(pageSize - page.length)
                                .fill(0)
                                .map((emptyRow, i) => {
                                    return (
                                        <tr key={`empty-table-row-${i}`}>
                                            <td colSpan={100} />
                                        </tr>
                                    )
                                })}
                    </tbody>
                </BTable>
            </div>

            <div className='table-bottom-controls'>
                {bottomControls || <div />}
                {pageCount > 0 && enablePagination && (
                    <Pagination
                        {...paginationProps}
                        canNextPage={canNextPage}
                        canPreviousPage={canPreviousPage}
                        gotoPage={gotoPage}
                        nextPage={nextPage}
                        pageCount={pageCount}
                        pageIndex={pageIndex}
                        pageLength={page.length}
                        pageOptions={pageOptions}
                        pageSize={pageSize}
                        previousPage={previousPage}
                        setPageSize={setPageSize}
                    />
                )}
            </div>
        </>
    )
}

Table.displayName = 'Table'
Table.defaultProps = defaultProps

export default Table
