import React, { FC } from 'react'
import { Props } from './FormLabel.types'
import * as styles from './FormLabel.styles'

const FormLabel: FC<Props> = (props) => {
    const { className, id, inline, required, text } = props
    return (
        <label className={className} css={[styles.label, inline && styles.inline]} htmlFor={id}>
            {text}
            {required && <span css={styles.required}>*</span>}
        </label>
    )
}

FormLabel.displayName = 'FormLabel'

export default FormLabel
