import { FC } from 'react'
import { Props } from './StatusPill.types'
import * as styles from './StatusPill.styles'
import Tooltip from '../Tooltip'
import ConditionalWrapper from '../ConditionalWrapper'

const StatusPill: FC<Props> = (props) => {
    const { label, pending, status, tooltipText } = props
    return (
        <div css={styles.statusPill}>
            <div css={styles.statusLine(status)}></div>
            <div css={styles.content}>
                <ConditionalWrapper
                    condition={!!tooltipText}
                    wrapper={(child) => (
                        <Tooltip content={tooltipText} delay={200}>
                            {child}
                        </Tooltip>
                    )}
                >
                    <div css={styles.label}>{label}</div>
                </ConditionalWrapper>
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
