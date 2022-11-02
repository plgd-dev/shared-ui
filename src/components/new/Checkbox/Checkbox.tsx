import React, { FC, useEffect, useImperativeHandle, useRef } from 'react'
import { defaultProps, Props } from './Checkbox.types'
import * as styles from './Chceckbox.styles'

const Checkbox: FC<Props> = (props) => {
    const { id, className, inputRef, label, checked, disabled, error, indeterminate, ...rest } = { ...defaultProps, ...props }
    const Check = styles.check
    const ref = useRef<HTMLInputElement>(null)
    useImperativeHandle(inputRef, () => ref.current!, [ref])

    useEffect(() => {
        if (ref.current) {
            ref.current.indeterminate = indeterminate || false
        }
    }, [indeterminate, ref])

    return (
        <label className={className} css={styles.checkbox} id={id}>
            <input {...rest} checked={checked} css={styles.input} ref={ref} />
            <Check css={[error && styles.error]} />
            {label && <div css={styles.label}>{label}</div>}
        </label>
    )
}

Checkbox.displayName = 'Checkbox'
Checkbox.defaultProps = defaultProps

export default Checkbox
