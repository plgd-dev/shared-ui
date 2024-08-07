import { forwardRef } from 'react'
import omit from 'lodash/omit'

import { Props, defaultProps } from './FormTextarea.types'
import * as styles from './FormTextarea.styles'

const FormTextarea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
    const { ariaInvalid, autoComplete, dataTestId, disabled, error, inline, inputRef, readOnly, value, ...rest } = { ...defaultProps, ...props }

    return (
        <textarea
            {...omit(rest, 'compactFormComponentsView')}
            aria-invalid={error || ariaInvalid ? true : undefined}
            autoComplete={autoComplete}
            css={[styles.textarea, disabled && styles.disabled, readOnly && styles.readOnly, error && styles.error]}
            data-inline={inline?.toString()}
            data-test-id={dataTestId}
            disabled={disabled || false}
            readOnly={readOnly}
            ref={ref}
            value={value}
        />
    )
})

FormTextarea.displayName = 'FormTextarea'

export default FormTextarea
