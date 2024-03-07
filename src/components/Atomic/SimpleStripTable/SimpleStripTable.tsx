import { FC } from 'react'

import { Props, defaultProps } from './SimpleStripTable.types'
import * as styles from './SimpleStripTable.styles'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import { ColumnSizeType } from '../Grid/Column/Column.types'
import ConditionalWrapper from '../ConditionalWrapper'
import IconCopy from '../Icon/components/IconCopy'
import Tooltip from '../Tooltip'
import { copyToClipboard } from '../../../common/utils'

const SimpleStripTable: FC<Props> = (props) => {
    const { className, headerLeft, headerRight, id, i18n, leftColSize, rightColSize, rows } = { ...defaultProps, ...props }

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
                    <Row css={[styles.row, r.autoHeight && styles.autoHeight]} gutters={false} key={r.key || key}>
                        <Column size={leftColSize as ColumnSizeType}>
                            <div
                                css={[styles.attribute, styles.border, styles.borderLeft, r.autoHeight && styles.autoHeight]}
                                data-test-id={r.dataTestId?.concat('-attribute')}
                            >
                                {r.attribute}
                            </div>
                        </Column>
                        <Column size={rightColSize as ColumnSizeType}>
                            <div
                                css={[styles.value, styles.border, styles.borderRight, r.autoHeight && styles.autoHeight]}
                                data-test-id={r.dataTestId?.concat('-value')}
                            >
                                {r.value}
                                {r.copyValue && (
                                    <Tooltip content={i18n?.copy || ''} css={styles.copy}>
                                        <IconCopy onClick={() => copyToClipboard(typeof r.copyValue === 'string' ? r.copyValue : r.value)} />
                                    </Tooltip>
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
