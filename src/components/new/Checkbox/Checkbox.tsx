import React, { FC } from 'react'
import { defaultProps, Props } from './Checkbox.types'
import * as styles from './Chceckbox.styles'

const Checkbox: FC<Props> = (props) => {
    const { id, className, inputRef, label, checked, disabled, error, ...rest } = { ...defaultProps, ...props }
    const Check = styles.check
    return (
        <label className={className} css={styles.checkbox} id={id}>
            <input {...rest} checked={checked} css={styles.input} ref={inputRef} />
            <Check css={[error && styles.error]} />
            {label && <div css={styles.label}>{label}</div>}
        </label>
    )
}

Checkbox.displayName = 'Checkbox'
Checkbox.defaultProps = defaultProps

export default Checkbox
