import React, { FC } from 'react'
import { Props } from './FormLabel.types'
import * as styles from './FormLabel.styles'

const FormLabel: FC<Props> = (props) => {
    const { className, id, text } = props
    return (
        <label className={className} css={styles.label} htmlFor={id}>
            {text}
        </label>
    )
}

FormLabel.displayName = 'FormLabel'

export default FormLabel
