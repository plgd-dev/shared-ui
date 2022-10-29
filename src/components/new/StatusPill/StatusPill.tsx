import { FC } from 'react'
import { Props } from './StatusPill.types'
import * as styles from './StatusPill.styles'

const StatusPill: FC<Props> = (props) => {
    const { label, pending, status } = props
    return (
        <div css={styles.statusPill}>
            <div css={styles.statusLine(status)}></div>
            <div css={styles.content}>
                <div css={styles.label}>{label}</div>
                {pending && (
                    <div css={styles.pending} onClick={pending.onClick}>
                        {pending.text}
                    </div>
                )}
            </div>
        </div>
    )
}

StatusPill.displayName = 'StatusPill'

export default StatusPill
