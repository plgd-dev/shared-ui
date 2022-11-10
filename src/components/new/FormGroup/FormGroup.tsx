import React, { Children, cloneElement, FC, isValidElement, ReactElement } from 'react'
import { defaultProps, Props } from './FormGroup.types'
import * as styles from './FormGroup.styles'

const FormGroup: FC<Props> = (props) => {
    const { children, className, error, id, inline, marginBottom } = { ...defaultProps, ...props }

    const childrenWithProps = Children.map(children as ReactElement[], (child, key) => {
        if (isValidElement(child)) {
            return cloneElement(child as ReactElement, { id, error: !!error, key, inline })
        }
        return child
    })

    return (
        <div className={className} css={[marginBottom && !inline && styles.formGroupMargin]}>
            <div css={[inline && styles.inline]}>{childrenWithProps}</div>
            {error && (
                <div aria-live='polite' css={styles.errorMessage}>
                    {error}
                </div>
            )}
        </div>
    )
}

FormGroup.displayName = 'FormGroup'
FormGroup.defaultProps = defaultProps

export default FormGroup
