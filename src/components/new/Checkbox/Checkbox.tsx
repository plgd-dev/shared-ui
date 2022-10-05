import React, { FC } from 'react'
import { Props } from './Checkbox.types'
import * as styles from './Chceckbox.styles'

const Checkbox: FC<Props> = (props) => {
    const { id, className, inputRef, label, checked, disabled, ...rest } = props
    const Check = styles.check
    return (
        <label className={className} css={styles.checkbox} id={id}>
            <input {...rest} checked={checked} css={styles.input} ref={inputRef} type='checkbox' />
            <Check />
            {label && <div css={styles.label}>{label}</div>}
        </label>
    )
}

Checkbox.displayName = 'Checkbox'

export default Checkbox
