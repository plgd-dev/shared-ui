import { FC } from 'react'
import { Props, defaultProps } from './SimpleStripTable.types'
import * as styles from './SimpleStripTable.styles'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import { ColumnSizeType } from '../Grid/Column/Column.types'

const SimpleStripTable: FC<Props> = (props) => {
    const { className, id, leftColSize, rightColSize, rows } = { ...defaultProps, ...props }

    return (
        <div className={className} id={id}>
            {rows.map((r, key) => (
                <Row css={styles.row} gutters={false} key={key}>
                    <Column size={leftColSize as ColumnSizeType}>
                        <div css={[styles.attribute, styles.border, styles.borderLeft]} data-test-id={r.dataTestId?.concat('-attribute')}>
                            {r.attribute}
                        </div>
                    </Column>
                    <Column size={rightColSize as ColumnSizeType}>
                        <div css={[styles.value, styles.border, styles.borderRight]} data-test-id={r.dataTestId?.concat('-value')}>
                            {r.value}
                        </div>
                    </Column>
                </Row>
            ))}
        </div>
    )
}

export default SimpleStripTable
