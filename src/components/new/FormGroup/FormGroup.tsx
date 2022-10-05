import React, { Children, cloneElement, FC, isValidElement, ReactElement } from 'react'
import { defaultProps, Props } from './FormGroup.types'
import * as styles from './FormGroup.styles'

const FormGroup: FC<Props> = (props) => {
    const { children, className, error, id, marginBottom } = { ...defaultProps, ...props }

    const childrenWithProps = Children.map(children as ReactElement[], (child, key) => {
        if (isValidElement(child)) {
            return cloneElement(child as ReactElement, { id, error: !!error, key })
        }
        return child
    })

    return (
        <div className={className} css={[marginBottom && styles.formGroupMargin]}>
            {childrenWithProps}
            {error && <div css={styles.errorMessage}>{error}</div>}
        </div>
    )
}

FormGroup.displayName = 'FormGroup'
FormGroup.defaultProps = defaultProps

export default FormGroup
