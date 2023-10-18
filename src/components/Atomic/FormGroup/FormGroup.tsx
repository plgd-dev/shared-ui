import React, { Children, cloneElement, FC, isValidElement, ReactElement } from 'react'
import { defaultProps, Props } from './FormGroup.types'
import * as styles from './FormGroup.styles'
import Button from '../Button'

const FormGroup: FC<Props> = (props) => {
    const { children, className, error, id, inline, fullSize, marginBottom, inlineJustifyContent } = { ...defaultProps, ...props }
    const childrenWithProps = Children.map(children as ReactElement[], (child, key) => {
        if (isValidElement(child)) {
            if (child.type === Button) {
                return child
            }

            return cloneElement(child as ReactElement, { id, error: !!error, key, inline })
        }
        return child
    })

    const Error = error && typeof error === 'string' && (
        <div aria-live='polite' css={styles.errorMessage}>
            {error}
        </div>
    )

    const getInputs = () => {
        if (inline) {
            return (
                <>
                    <div css={styles.inline(inlineJustifyContent)}>{childrenWithProps}</div>
                    {Error}
                </>
            )
        } else if ((children as ReactElement[])?.length === 3) {
            return (
                <>
                    {childrenWithProps[0]}
                    <div css={[styles.inline(inlineJustifyContent), styles.inlineItems]}>
                        <div css={[styles.inlineItem, styles.inlineItemFullSize]}>
                            {childrenWithProps[1]}
                            {Error}
                        </div>
                        <div css={styles.inlineItem}>{childrenWithProps[2]}</div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    {childrenWithProps}
                    {Error}
                </>
            )
        }
    }

    return (
        <div className={className} css={[marginBottom && !inline && styles.formGroupMargin, fullSize && styles.inlineItemFullSize]}>
            {getInputs()}
        </div>
    )
}

FormGroup.displayName = 'FormGroup'
FormGroup.defaultProps = defaultProps

export default FormGroup
