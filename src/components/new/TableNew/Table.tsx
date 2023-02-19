import { ChangeEvent, FC, useEffect, useState } from 'react'
import { Props, defaultProps } from './Table.types'
import * as styles from './Table.styles'
import { usePagination, useRowSelect, useSortBy, useTable, useGlobalFilter } from 'react-table'
import { compareIgnoreCase } from './Utils'
import classNames from 'classnames'
import Icon from '../Icon'
import Checkbox from '../Checkbox'
import { createPortal } from 'react-dom'
import Pagination from '../Layout/Footer/Pagination/Pagination'
import isEqual from 'lodash/isEqual'
import isEmpty from 'lodash/isEmpty'
import TableGlobalFilter from './TableGlobalFilter'

const Table: FC<Props> = (props) => {
    const {
        autoFillEmptyRows,
        className,
        columns,
        data,
        defaultPageSize,
        defaultSelectedRowIds,
        defaultSortBy,
        enablePagination,
        getCellProps,
        getColumnProps,
        getRowProps,
        globalSearch,
        onRowsSelect,
        paginationPortalTarget,
        paginationProps,
        primaryAttribute,
        unselectRowsToken,
    } = { ...defaultProps, ...props }

    const Cell = styles.cell
    const HeaderTitle = styles.headerTitle

    // prevent re-rendering with same selection
    const [prevSelectedRowIds, setPrevSelectedRowIds] = useState(isEmpty(defaultSelectedRowIds) ? {} : defaultSelectedRowIds)

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
        isAllRowsSelected,
        preGlobalFilteredRows,
        setGlobalFilter,
        state: { pageIndex, pageSize, selectedRowIds, globalFilter },
    } = useTable(
        {
            columns,
            data,
            initialState: {
                sortBy: defaultSortBy,
                pageSize: defaultPageSize,
                selectedRowIds: isEmpty(defaultSelectedRowIds) ? {} : defaultSelectedRowIds,
            },
            sortTypes: {
                alphanumeric: (row1: any, row2: any, columnName: string) => compareIgnoreCase(row1.values[columnName], row2.values[columnName]),
            },
            autoResetPage: false,
            autoResetSelectedRows: false,
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
        useRowSelect,
        (hooks) => {
            onRowsSelect &&
                hooks.visibleColumns.push((columns) => [
                    {
                        id: 'selection',
                        Header: ({ getToggleAllRowsSelectedProps }: any) => {
                            const headerCheckboxProps = getToggleAllRowsSelectedProps()
                            return (
                                <Checkbox
                                    {...headerCheckboxProps}
                                    name='table-header-select-all'
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        if (headerCheckboxProps.indeterminate) {
                                            toggleAllRowsSelected(false)
                                        } else {
                                            headerCheckboxProps.onChange(e)
                                        }
                                    }}
                                />
                            )
                        },
                        Cell: ({ row }: any) => {
                            const { indeterminate, ...rest } = row.getToggleRowSelectedProps()
                            return <Checkbox {...rest} name={`row-${row.id}`} />
                        },
                    },
                    ...columns,
                ])
        }
    )
    // so that the parent can store the current selection.
    useEffect(() => {
        if (onRowsSelect && selectedRowIds && !isEqual(prevSelectedRowIds, selectedRowIds)) {
            if (primaryAttribute) {
                onRowsSelect(
                    isAllRowsSelected,
                    selectedFlatRows.map((d: any) => d.original[primaryAttribute])
                )
            } else {
                onRowsSelect(isAllRowsSelected, selectedRowIds)
            }
            setPrevSelectedRowIds(selectedRowIds)
        }
    }, [selectedRowIds, primaryAttribute]) // eslint-disable-line

    // Any time the unselectRowsToken is changed, all rows are gonna be unselected
    useEffect(() => {
        // toggleAllRowsSelected(false)
    }, [unselectRowsToken]) // eslint-disable-line

    // When the defaultPageSize is changed, update the pageSize in the table
    useEffect(() => {
        setPageSize(defaultPageSize)
    }, [defaultPageSize]) // eslint-disable-line

    const renderPagination = () => {
        let target = null
        if (paginationPortalTarget.current) {
            target = paginationPortalTarget.current
        } else if (paginationPortalTarget && !paginationPortalTarget.hasOwnProperty('current')) {
            target = paginationPortalTarget
        }

        return target
            ? createPortal(
                  <Pagination
                      {...paginationProps}
                      canNextPage={canNextPage}
                      canPreviousPage={canPreviousPage}
                      gotoPage={gotoPage}
                      nextPage={nextPage}
                      pageCount={pageCount}
                      pageIndex={pageIndex}
                      pageLength={page.length}
                      // pageOptions={pageOptions}
                      pageSize={pageSize}
                      previousPage={previousPage}
                      setPageSize={setPageSize}
                  />,
                  target
              )
            : null
    }

    return (
        <div className={className}>
            {globalSearch && <TableGlobalFilter globalFilter={globalFilter} preGlobalFilteredRows={preGlobalFilteredRows} setGlobalFilter={setGlobalFilter} />}
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
                                    >
                                        <HeaderTitle>{column.render('Header')}</HeaderTitle>
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
                            <tr {...row.getRowProps(getRowProps!(row))} css={[styles.row, row.isSelected && styles.isSelected]}>
                                {row.cells.map((cell: any, cellKey: number) => {
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
                                            data-row={row.id}
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
                    {/* {autoFillEmptyRows &&*/}
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
            {enablePagination && renderPagination()}
        </div>
    )
}

Table.displayName = 'Table'

export default Table