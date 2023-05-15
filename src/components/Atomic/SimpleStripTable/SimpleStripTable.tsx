import { FC } from 'react'
import { Props } from './SimpleStripTable.types'
import * as styles from './SimpleStripTable.styles'

const SimpleStripTable: FC<Props> = (props) => {
    const { className, id, rows } = props
    return (
        <div className={className} id={id}>
            {rows.map((r, key) => (
                <div css={styles.row} key={key}>
                    <div css={[styles.attribute, styles.border, styles.borderLeft]}>{r.attribute}</div>
                    <div css={[styles.value, styles.border, styles.borderRight]}>{r.value}</div>
                </div>
            ))}
        </div>
    )
}

export default SimpleStripTable
