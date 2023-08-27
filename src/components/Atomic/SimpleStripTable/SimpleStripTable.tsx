import { FC } from 'react'
import { Props } from './SimpleStripTable.types'
import * as styles from './SimpleStripTable.styles'

const SimpleStripTable: FC<Props> = (props) => {
    const { className, id, rows } = props
    return (
        <div className={className} id={id}>
            {rows.map((r, key) => (
                <div css={styles.row} data-test-id={r.dataTestId} key={key}>
                    <div css={[styles.attribute, styles.border, styles.borderLeft]} data-test-id={r.dataTestId?.concat('-attribute')}>
                        {r.attribute}
                    </div>
                    <div css={[styles.value, styles.border, styles.borderRight]} data-test-id={r.dataTestId?.concat('-value')}>
                        {r.value}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SimpleStripTable
