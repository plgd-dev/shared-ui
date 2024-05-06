import { FC, memo } from 'react'
import { Props } from './ModalStrippedLine.types'
import * as styles from './ModalStrippedLine.styles'
import Row from '../../Grid/Row'
import Column from '../../Grid/Column'

const ModalStrippedLine: FC<Props> = memo((props) => {
    const { label, component, smallPadding } = props
    return (
        <Row css={[styles.strippedLine, smallPadding && styles.smallPadding]}>
            <Column css={styles.label} size={4}>
                {label}
            </Column>
            <Column css={styles.component} size={8}>
                <div>{component}</div>
            </Column>
        </Row>
    )
})

ModalStrippedLine.displayName = 'ModalStrippedLine'

export default ModalStrippedLine
