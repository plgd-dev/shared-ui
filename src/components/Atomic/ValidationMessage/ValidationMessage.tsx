import { FC } from 'react'
import { Props } from './ValidationMessage.types'
import * as styles from './ValidationMessage.styles'

const ValidationMessage: FC<Props> = (props) => <div css={styles.validationMessage}>{props.children}</div>

ValidationMessage.displayName = 'ValidationMessage'

export default ValidationMessage
