import { FC, useCallback } from 'react'

import { Props, defaultProps, Row as RowType } from './SimpleStripTable.types'
import * as styles from './SimpleStripTable.styles'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import { ColumnSizeType } from '../Grid/Column/Column.types'
import ConditionalWrapper from '../ConditionalWrapper'
import CopyIcon from '../CopyIcon'

const SimpleStripTable: FC<Props> = (props) => {
    const {
        className,
        dataTestId,
        headerLeft,
        headerRight,
        id,
        i18n,
        noSidePadding,
        lastRowBorder,
        leftColSize,
        leftColProps,
        rightColProps,
        rightColSize,
        rows,
    } = {
        ...defaultProps,
        ...props,
    }

    const getDataTestId = useCallback(
        (r: RowType, suffix: string, rowId: number) => {
            if (r.hasOwnProperty('dataTestId')) {
                return r.dataTestId?.concat(`-${suffix}`)
            } else if (dataTestId) {
                return dataTestId.concat(`-row-${rowId}-${suffix}`)
            }

            return undefined
        },
        [dataTestId]
    )

    return (
        <ConditionalWrapper
            condition={!!id || !!className || !!dataTestId}
            wrapper={(c) => (
                <div className={className} data-test-id={dataTestId} id={id}>
                    {c}
                </div>
            )}
        >
            <>
                {(headerLeft || headerRight) && (
                    <Row css={[styles.row, styles.headerRow]} dataTestId={dataTestId?.concat('-header')} gutters={false}>
                        <Column size={leftColSize as ColumnSizeType} {...leftColProps}>
                            <div css={[styles.attribute]}>{headerLeft}</div>
                        </Column>
                        <Column size={rightColSize as ColumnSizeType} {...rightColProps}>
                            <div css={[styles.value]}>{headerRight}</div>
                        </Column>
                    </Row>
                )}
                {rows.map((r, key) => (
                    <Row
                        css={[styles.row, r.autoHeight && styles.autoHeight, noSidePadding && styles.noRowPadding]}
                        dataTestId={dataTestId?.concat(`-row-${key}`)}
                        gutters={false}
                        key={r.key || key}
                    >
                        <Column size={leftColSize as ColumnSizeType} {...leftColProps}>
                            <div
                                css={[
                                    styles.attribute,
                                    styles.border,
                                    styles.borderLeft,
                                    r.autoHeight && styles.autoHeight,
                                    lastRowBorder === false && key === rows.length - 1 && styles.noLastRowBorder,
                                    noSidePadding && styles.noLeftPadding,
                                ]}
                                data-test-id={getDataTestId(r, 'attribute', key)}
                            >
                                {r.attribute}
                                {r.required && <span css={styles.required}> *</span>}
                            </div>
                        </Column>
                        <Column size={rightColSize as ColumnSizeType} {...rightColProps}>
                            <div
                                css={[
                                    styles.value,
                                    styles.border,
                                    styles.borderRight,
                                    r.autoHeight && styles.autoHeight,
                                    lastRowBorder === false && key === rows.length - 1 && styles.noLastRowBorder,
                                    noSidePadding && styles.noRightPadding,
                                ]}
                                data-test-id={getDataTestId(r, 'value', key)}
                            >
                                {r.value}
                                {r.copyValue && (
                                    <CopyIcon
                                        i18n={{ content: i18n?.copy || '' }}
                                        value={typeof r.copyValue === 'string' ? r.copyValue : (r.value as string)}
                                    />
                                )}
                            </div>
                        </Column>
                    </Row>
                ))}
            </>
        </ConditionalWrapper>
    )
}

export default SimpleStripTable
