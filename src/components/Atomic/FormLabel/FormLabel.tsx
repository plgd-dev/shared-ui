import React, { forwardRef } from 'react'
import { Props } from './FormLabel.types'
import * as styles from './FormLabel.styles'
import ConditionalWrapper from '../ConditionalWrapper'
import { convertSize } from '../Icon'
import Tooltip from '../Tooltip'
import IconQuestion from '../Icon/components/IconQuestion'

const FormLabel = forwardRef<HTMLLabelElement, Props>((props, ref) => {
    const { className, id, inline, marginBottom, required, text, tooltipText, tooltipMaxWidth } = props
    return (
        <label
            className={className}
            css={[styles.label, inline && styles.inline, tooltipText && styles.w100, marginBottom === false && styles.noMargin]}
            htmlFor={id}
            ref={ref}
        >
            <ConditionalWrapper
                condition={!!tooltipText}
                wrapper={(c) => (
                    <span css={styles.flex}>
                        <span>{c}</span>
                        <Tooltip content={tooltipText} delay={200} maxWidth={tooltipMaxWidth} portalTarget={document.getElementById('modal-root')!}>
                            <IconQuestion {...convertSize(16)} />
                        </Tooltip>
                    </span>
                )}
            >
                <>
                    {text}
                    {required && <span css={styles.required}>*</span>}
                </>
            </ConditionalWrapper>
        </label>
    )
})

FormLabel.displayName = 'FormLabel'

export default FormLabel
