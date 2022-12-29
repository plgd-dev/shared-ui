import { FC, memo } from 'react'
import { Props } from './ModalStrippedLine.types'
import * as styles from './ModalStrippedLine.styles'

const ModalStrippedLine: FC<Props> = memo((props) => {
    const { label, component } = props
    return (
        <div css={styles.strippedLine}>
            <div css={styles.label}>{label}</div>
            <div css={styles.component}>{component}</div>
        </div>
    )
})

ModalStrippedLine.displayName = 'ModalStrippedLine'

export default ModalStrippedLine
