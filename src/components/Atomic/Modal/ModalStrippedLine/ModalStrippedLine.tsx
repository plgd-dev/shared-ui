import { FC, memo } from 'react'
import { Props } from './ModalStrippedLine.types'
import * as styles from './ModalStrippedLine.styles'

const ModalStrippedLine: FC<Props> = memo((props) => {
    const { label, component, componentSize, smallPadding } = props
    return (
        <div css={[styles.strippedLine, smallPadding && styles.smallPadding]}>
            <div css={styles.label}>{label}</div>
            <div
                css={styles.component}
                style={{
                    width: componentSize ? `${componentSize}px` : undefined,
                }}
            >
                {component}
            </div>
        </div>
    )
})

ModalStrippedLine.displayName = 'ModalStrippedLine'

export default ModalStrippedLine
