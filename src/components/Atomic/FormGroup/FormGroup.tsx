import React, { Children, cloneElement, FC, isValidElement, ReactElement, useContext } from 'react'

import { defaultProps, Props } from './FormGroup.types'
import * as styles from './FormGroup.styles'
import Button from '../Button/Button'
import Tooltip from '../Tooltip/Tooltip'
import { tooltipVariants } from '../Tooltip'
import { FormContext } from '../../../common/context/FormContext'
import Switch from '../Switch'

export const FormGroupCore: FC<Props> = (props) => {
    const { children, className, error, errorTooltip, id, inline, fullSize, marginBottom, inlineJustifyContent, renderProps } = { ...defaultProps, ...props }
    const childrenWithProps = Children.map(children as ReactElement[], (child, key) => {
        if (isValidElement(child)) {
            if (child.type === Button || child.type === 'ul' || child.type === 'div') {
                return child
            }

            return cloneElement(child as ReactElement, { id, error: child.type === Switch ? undefined : !!error, key, inline })
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
        } else if (errorTooltip) {
            return (
                <>
                    <Tooltip content={error} id={`tooltip-group-${id}`} placement='left' variant={tooltipVariants.ERROR}>
                        {childrenWithProps[0]}
                    </Tooltip>
                    {childrenWithProps[1]}
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
        } else if (renderProps) {
            return
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

const FormGroup: FC<Props> = (props) => {
    const { commonFormGroupProps, compactFormComponentsView } = useContext(FormContext)
    return <FormGroupCore {...props} {...(compactFormComponentsView ? commonFormGroupProps : {})} />
}

FormGroup.displayName = 'FormGroup'

export default FormGroup
