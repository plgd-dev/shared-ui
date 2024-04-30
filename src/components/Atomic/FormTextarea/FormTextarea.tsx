import { forwardRef } from 'react'
import { Props, defaultProps } from './FormTextarea.types'
import * as styles from './FormTextarea.styles'

const FormTextarea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
    const { ariaInvalid, autoComplete, disabled, error, inline, inputRef, readOnly, value, ...rest } = { ...defaultProps, ...props }

    return (
        <textarea
            {...rest}
            aria-invalid={error || ariaInvalid ? true : undefined}
            autoComplete={autoComplete}
            css={[styles.textarea, disabled && styles.disabled, readOnly && styles.readOnly, error && styles.error]}
            data-inline={inline?.toString()}
            disabled={disabled || false}
            readOnly={readOnly}
            ref={ref}
            value={value}
        />
    )
})

FormTextarea.displayName = 'FormTextarea'

export default FormTextarea
