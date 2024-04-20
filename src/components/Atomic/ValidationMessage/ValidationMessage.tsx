import { FC } from 'react'
import { Props } from './ValidationMessage.types'
import * as styles from './ValidationMessage.styles'

const ValidationMessage: FC<Props> = (props) => {
    if (props.children === undefined) {
        return null
    }

    return <div css={styles.validationMessage}>{props.children}</div>
}

ValidationMessage.displayName = 'ValidationMessage'

export default ValidationMessage
