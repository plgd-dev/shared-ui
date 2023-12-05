import { FC } from 'react'

import { Props } from './ModalFooter.types'
import * as styles from './ModalFooter.styles'

const ModalFooter: FC<Props> = (props) => (
    <div css={styles.footer}>
        {props.left || <div />}
        {props.right || <div />}
    </div>
)

ModalFooter.displayName = 'ModalFooter'

export default ModalFooter
