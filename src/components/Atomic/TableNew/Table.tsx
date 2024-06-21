// @ts-nocheck
import React, { ChangeEvent, FC, useEffect, useMemo, useState, useRef, useCallback } from 'react'
import { Props, defaultProps } from './Table.types'
import * as styles from './Table.styles'
import { usePagination, useRowSelect, useSortBy, useTable, useGlobalFilter } from 'react-table'
import { compareIgnoreCase } from './Utils'
import classNames from 'classnames'
import { IconTableArrowDown, IconTableArrowUp, convertSize } from '../Icon'
import Checkbox from '../Checkbox'
import { createPortal } from 'react-dom'
import Pagination from '../../Layout/Footer/Pagination/Pagination'
import isEqual from 'lodash/isEqual'
import isEmpty from 'lodash/isEmpty'
import TableGlobalFilter from './TableGlobalFilter'
import { GLOBAL_FILTER_HEIGHT, HEADER_HEIGHT } from './constants'
import ConditionalWrapper from '../ConditionalWrapper'
import IconLoader from '../Loader/IconLoader'

const Table: FC<Props> = (props) => {
    const {
        autoHeight,
        className,
        columns,
        data,
        dataTestId,
        defaultPageSize,
        defaultSelectedRowIds,
        defaultSortBy,
        enablePagination,
        getCellProps,
        getColumnProps,
        getRowProps,
        globalSearch,
        height,
        hideHeader,
        i18n,
        id,
        loading,
        onRowsSelect,
        paginationPortalTargetId,
        paginationProps,
        primaryAttribute,
        rowHeight,
        showFilterButton,
        unselectRowsToken,
    } = { ...defaultProps, ...props }

    const Cell = styles.cell
    const HeaderTitle = styles.headerTitle

    // prevent re-rendering with same selection
    const [prevSelectedRowIds, setPrevSelectedRowIds] = useState(isEmpty(defaultSelectedRowIds) ? {} : defaultSelectedRowIds)

    const globalFilterHeight = useMemo(() => (globalSearch ? GLOBAL_FILTER_HEIGHT : 0), [globalSearch])

    const tableRef = useRef<HTMLDivElement>(null)

    const getPageSize = useCallback(
        (defaultSize: number) => {
            if (autoHeight && tableRef.current?.clientHeight) {
                return Math.floor((tableRef.current?.clientHeight - HEADER_HEIGHT - globalFilterHeight) / rowHeight)
            } else if (height) {
                return Math.max(Math.floor((height - HEADER_HEIGHT - globalFilterHeight) / rowHeight), defaultSize)
            }
            return defaultSize
        },
        [tableRef, autoHeight, height, rowHeight, globalFilterHeight]
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        selectedFlatRows,
        toggleAllRowsSelected,
        isAllRowsSelected,
        toggleAllPageRowsSelected,
        preGlobalFilteredRows,
        setGlobalFilter,
        state: { pageIndex, pageSize, selectedRowIds, globalFilter },
    } = useTable(
        {
            columns,
            data,
            initialState: {
                sortBy: defaultSortBy,
                pageSize: getPageSize(defaultPageSize),
                selectedRowIds: isEmpty(defaultSelectedRowIds) ? {} : defaultSelectedRowIds,
            },
            sortTypes: {
                alphanumeric: (row1: any, row2: any, columnName: string) => compareIgnoreCase(row1.values[columnName], row2.values[columnName]),
            },
            autoResetPage: false,
            autoResetSelectedRows: false,
            autoResetGlobalFilter: false,
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
                                    topOffset={false}
                                />
                            )
                        },
                        Cell: ({ row }: any) => {
                            const { indeterminate, ...rest } = row.getToggleRowSelectedProps()
                            return <Checkbox {...rest} name={`row-${row.id}`} topOffset={false} />
                        },
                        style: { width: '60px' },
                    },
                    ...columns,
                ])
        }
    )

    useEffect(() => {
        const numberOfRows = getPageSize(defaultPageSize)
        setPageSize(numberOfRows < 1 ? 1 : numberOfRows)
    }, [autoHeight, defaultPageSize, getPageSize, setPageSize])

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
        setPrevSelectedRowIds(isEmpty(defaultSelectedRowIds) ? {} : defaultSelectedRowIds)
        toggleAllPageRowsSelected(false)
    }, [unselectRowsToken]) // eslint-disable-line

    // When the defaultPageSize is changed, update the pageSize in the table
    useEffect(() => {
        if (!autoHeight) {
            setPageSize(getPageSize(defaultPageSize))
        }
    }, [defaultPageSize, autoHeight]) // eslint-disable-line

    useEffect(() => {
        if (!autoHeight) {
            setPageSize(getPageSize(defaultPageSize))
        }
    }, [defaultPageSize, height]) // eslint-disable-line

    const renderPagination = () => {
        let target = null

        if (paginationPortalTargetId) {
            target = document.getElementById(paginationPortalTargetId)
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
        <div
            className={className}
            css={styles.tableComponent}
            data-test-id={dataTestId}
            id={id}
            ref={tableRef}
            style={{
                height: autoHeight ? '100%' : undefined,
            }}
        >
            {globalSearch && (
                <TableGlobalFilter
                    dataTestId={dataTestId?.concat('-filter')}
                    globalFilter={globalFilter}
                    i18n={{
                        search: i18n.search,
                    }}
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    setGlobalFilter={setGlobalFilter}
                    showFilterButton={showFilterButton}
                />
            )}
            <div
                css={styles.tableWrapper}
                style={{
                    height: height ? height - globalFilterHeight : height,
                }}
            >
                <ConditionalWrapper condition={autoHeight} wrapper={(c) => <div>{c}</div>}>
                    <table {...getTableProps()} css={styles.table}>
                        {hideHeader !== true && (
                            <thead>
                                {headerGroups.map((headerGroup: any, groupKey: number) => (
                                    <tr {...headerGroup.getHeaderGroupProps()} key={groupKey}>
                                        {headerGroup.headers.map((column: any, key: number) => (
                                            // Sorting props to control sorting
                                            <th
                                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                                className={classNames(column.getHeaderProps(column.getSortByToggleProps()).className, column.className)}
                                                css={styles.headerTh}
                                                key={key}
                                                style={{
                                                    ...column.getHeaderProps(column.getSortByToggleProps()).style,
                                                    ...column.style,
                                                }}
                                            >
                                                <div
                                                    css={(theme) => [
                                                        styles.headerItem(theme),
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
                                                            <IconTableArrowUp
                                                                {...convertSize(6)}
                                                                css={(theme) => [
                                                                    styles.sortArrow,
                                                                    column.isSorted && !column.isSortedDesc && styles.sortActive(theme),
                                                                ]}
                                                            />
                                                            <IconTableArrowDown
                                                                {...convertSize(6)}
                                                                css={(theme) => [
                                                                    styles.sortArrow,
                                                                    column.isSorted && column.isSortedDesc && styles.sortActive(theme),
                                                                ]}
                                                            />
                                                        </span>
                                                    )}
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                        )}
                        <tbody {...getTableBodyProps()}>
                            {page.map((row: any, key: number) => {
                                prepareRow(row)
                                const rowProps = row.getRowProps(getRowProps!(row))
                                return (
                                    <tr
                                        {...rowProps}
                                        css={[styles.row, row.isSelected && styles.isSelected]}
                                        data-k={key}
                                        data-test-id={dataTestId?.concat(`-row-${row.id}`)}
                                        key={rowProps.key}
                                    >
                                        {row.cells.map((cell: any, cellKey: number) => (
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
                                                key={cell.getCellProps().key}
                                            >
                                                <Cell
                                                    css={[
                                                        key === 0 && styles.firstRowCell,
                                                        cellKey === 0 && styles.firstCell,
                                                        cellKey === row.cells.length - 1 && styles.lastCell,
                                                    ]}
                                                    rowHeight={rowHeight}
                                                >
                                                    {cell.render('Cell')}
                                                </Cell>
                                            </td>
                                        ))}
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
                    {i18n.placeholder && data.length === 0 && !loading && <div css={styles.placeholder}>{i18n.placeholder}</div>}
                    {loading && data.length === 0 && <IconLoader center className='loader-icon' size={20} type='secondary' />}
                </ConditionalWrapper>
            </div>
            {enablePagination && renderPagination()}
        </div>
    )
}

Table.displayName = 'Table'

export default Table
