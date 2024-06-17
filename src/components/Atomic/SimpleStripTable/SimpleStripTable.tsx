import { FC } from 'react'

import { Props, defaultProps } from './SimpleStripTable.types'
import * as styles from './SimpleStripTable.styles'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import { ColumnSizeType } from '../Grid/Column/Column.types'
import ConditionalWrapper from '../ConditionalWrapper'
import CopyIcon from '../CopyIcon'

const SimpleStripTable: FC<Props> = (props) => {
    const { className, headerLeft, headerRight, id, i18n, noSidePadding, lastRowBorder, leftColSize, rightColSize, rows } = { ...defaultProps, ...props }

    return (
        <ConditionalWrapper
            condition={!!id || !!className}
            wrapper={(c) => (
                <div className={className} id={id}>
                    {c}
                </div>
            )}
        >
            <>
                {(headerLeft || headerRight) && (
                    <Row css={[styles.row, styles.headerRow]} gutters={false}>
                        <Column size={leftColSize as ColumnSizeType}>
                            <div css={[styles.attribute]}>{headerLeft}</div>
                        </Column>
                        <Column size={rightColSize as ColumnSizeType}>
                            <div css={[styles.value]}>{headerRight}</div>
                        </Column>
                    </Row>
                )}
                {rows.map((r, key) => (
                    <Row css={[styles.row, r.autoHeight && styles.autoHeight, noSidePadding && styles.noRowPadding]} gutters={false} key={r.key || key}>
                        <Column size={leftColSize as ColumnSizeType}>
                            <div
                                css={[
                                    styles.attribute,
                                    styles.border,
                                    styles.borderLeft,
                                    r.autoHeight && styles.autoHeight,
                                    lastRowBorder === false && key === rows.length - 1 && styles.noLastRowBorder,
                                    noSidePadding && styles.noLeftPadding,
                                ]}
                                data-test-id={r.dataTestId?.concat('-attribute')}
                            >
                                {r.attribute}
                                {r.required && <span css={styles.required}> *</span>}
                            </div>
                        </Column>
                        <Column size={rightColSize as ColumnSizeType}>
                            <div
                                css={[
                                    styles.value,
                                    styles.border,
                                    styles.borderRight,
                                    r.autoHeight && styles.autoHeight,
                                    lastRowBorder === false && key === rows.length - 1 && styles.noLastRowBorder,
                                    noSidePadding && styles.noRightPadding,
                                ]}
                                data-test-id={r.dataTestId?.concat('-value')}
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
