import { FC } from 'react'
import { Props } from './SimpleStripTable.types'
import * as styles from './SimpleStripTable.styles'
import Row from '../Grid/Row'
import Column from '../Grid/Column'

const SimpleStripTable: FC<Props> = (props) => {
    const { className, id, rows } = props

    return (
        <div className={className} id={id}>
            {rows.map((r, key) => (
                <Row css={styles.row} gutters={false} key={key}>
                    <Column size={8}>
                        <div css={[styles.attribute, styles.border, styles.borderLeft]} data-test-id={r.dataTestId?.concat('-attribute')}>
                            {r.attribute}
                        </div>
                    </Column>
                    <Column size={4}>
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
