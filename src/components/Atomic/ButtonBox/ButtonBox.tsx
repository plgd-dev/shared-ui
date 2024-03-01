import React, { FC } from 'react'
import * as styles from './ButtonBox.styles'
import Button from '../Button'
import { Props } from '../Button/Button.types'

const ButtonBox: FC<Props> = (props) => (
    <div css={styles.buttonBox}>
        <Button {...props} css={styles.btn} size='big' variant='primary' />
    </div>
)

ButtonBox.displayName = 'ButtonBox'

export default ButtonBox
