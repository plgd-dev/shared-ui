// @ts-nocheck
import React, { FC, useMemo } from 'react'
import classNames from 'classnames'
import { useTable, useExpanded, useSortBy } from 'react-table'
import * as styles from './TreeTable.styles'
import * as tableStyles from '../TableNew/Table.styles'

import { Props, defaultProps } from './TreeTable.types'
import { compareIgnoreCase } from '../TableNew/Utils'
import { convertSize, IconTableArrowDown, IconTableArrowUp } from '../Icon'
import ConditionalWrapper from '../ConditionalWrapper'
import { ReactComponent as IconSubLine } from './assets/sub-line.svg'

const defaultPropGetter = () => ({})

const HEADER_HEIGHT = 62

const TreeTable: FC<Props> = (props) => {
    const { className, columns, data, height, id, getRowProps = defaultPropGetter, defaultSortBy, rowHeight } = props
    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } = useTable(
        {
            columns,
            data,
            initialState: {
                sortBy: defaultSortBy,
            },
            sortTypes: {
                alphanumeric: (row1: any, row2: any, columnName: string) => compareIgnoreCase(row1.values[columnName], row2.values[columnName]),
            },
            // autoResetExpanded: false,
        },
        useSortBy,
        useExpanded
    )

    const getMainRowId = (row) => row.id.split('.')[0]

    const expanded = useMemo(() => {
        const _expanded = []

        rows.forEach((r) => {
            if (r.depth === 0) {
                _expanded[r.id] = []
                _expanded[r.id][0] = []
            } else {
                const mainId = getMainRowId(r)
                if (!_expanded[mainId].hasOwnProperty(r.depth)) {
                    _expanded[mainId][r.depth] = []
                }
                _expanded[mainId][r.depth].push(r.id)
            }
        })

        return _expanded
    }, [rows])

    const isLastFromExpanded = (row) => {
        const mainRowId = getMainRowId(row)
        const group = expanded[mainRowId][row.depth]

        return group[group.length - 1] === row.id
    }

    const HeaderTitle = tableStyles.headerTitle
    const Cell = tableStyles.cell

    return (
        <div className={className} css={styles.treeComponent} id={id}>
            <div
                css={tableStyles.tableWrapper}
                style={{
                    height: height ? height - HEADER_HEIGHT : height,
                }}
            >
                <table {...getTableProps()} className={className} css={styles.table}>
                    <thead>
                        {headerGroups.map((headerGroup: any) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column: any, key: number) => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        className={classNames(column.getHeaderProps(column.getSortByToggleProps()).className, column.className)}
                                        css={tableStyles.headerTh}
                                        style={{
                                            ...column.getHeaderProps().style,
                                            ...column.style,
                                        }}
                                    >
                                        <div
                                            css={[
                                                tableStyles.headerItem,
                                                key === 0 && tableStyles.headerItemFirst,
                                                key === headerGroup.headers.length - 1 && tableStyles.headerItemLast,
                                            ]}
                                        >
                                            <HeaderTitle>{column.render('Header')}</HeaderTitle>
                                            {column.canSort && (
                                                <span
                                                    className={classNames('sort-arrows', {
                                                        desc: column.isSorted && column.isSortedDesc,
                                                        asc: column.isSorted && !column.isSortedDesc,
                                                    })}
                                                    css={tableStyles.sortArrows}
                                                >
                                                    <IconTableArrowUp
                                                        {...convertSize(6)}
                                                        css={[tableStyles.sortArrow, column.isSorted && !column.isSortedDesc && tableStyles.sortActive]}
                                                    />
                                                    <IconTableArrowDown
                                                        {...convertSize(6)}
                                                        css={[tableStyles.sortArrow, column.isSorted && column.isSortedDesc && tableStyles.sortActive]}
                                                    />
                                                </span>
                                            )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row: any, key: number) => {
                            prepareRow(row)
                            const _isLastFromExpanded = isLastFromExpanded(row)

                            return (
                                <tr {...row.getRowProps(getRowProps!(row))} css={[tableStyles.row, styles.row]}>
                                    {row.cells.map((cell: any, cellKey: number) => (
                                        <td
                                            {...cell.getCellProps([
                                                {
                                                    className: cell.column.className,
                                                    style: cell.column.style,
                                                },
                                            ])}
                                            data-row={row.id}
                                        >
                                            <Cell
                                                css={[
                                                    styles.treeCell,
                                                    key === 0 && tableStyles.firstRowCell,
                                                    cellKey === 0 && styles.depthLeftBorder(row.depth),
                                                    cellKey === row.cells.length - 1 && styles.depthRightBorder(row.depth),
                                                    row.isExpanded && styles.removeBottomBorderRadius,
                                                    row.depth > 0 && _isLastFromExpanded && styles.removeTopBorderRadius,
                                                    row.depth > 0 && !_isLastFromExpanded && styles.removeBorderRadius,
                                                ]}
                                                rowHeight={rowHeight}
                                            >
                                                <ConditionalWrapper
                                                    condition={cellKey === 0}
                                                    wrapper={(c) => (
                                                        <div
                                                            css={[
                                                                styles.expanderWrapper,
                                                                cellKey === 0 &&
                                                                    row.isExpanded &&
                                                                    styles.drawExpandLine(
                                                                        expanded[getMainRowId(row)][row.depth + 1].length,
                                                                        rowHeight,
                                                                        row.depth
                                                                    ),
                                                            ]}
                                                        >
                                                            {c}
                                                            {row.depth > 0 && <IconSubLine css={styles.icoSubLine(row.depth)} />}
                                                        </div>
                                                    )}
                                                >
                                                    {cell.render('Cell')}
                                                </ConditionalWrapper>
                                            </Cell>
                                        </td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

TreeTable.displayName = 'TreeTable'
TreeTable.defaultProps = defaultProps

export default TreeTable
