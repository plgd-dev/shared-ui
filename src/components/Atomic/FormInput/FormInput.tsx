import { forwardRef, useContext, useRef, useState } from 'react'
import { detect } from 'detect-browser'
import { mergeRefs } from 'react-merge-refs'

import { Props, defaultProps } from './FormInput.types'
import * as styles from './FormInput.styles'
import { convertSize, IconCopy, IconHidePassword, IconShowPassword } from '../Icon'
import { copyToClipboard } from '../../../common/utils'
import { inputAligns, inputSizes } from './constants'
import { isEdge } from '../_utils/browser'
import { FormContext } from '../../../common/context/FormContext'

export const FormInputCore = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const {
        align,
        ariaInvalid,
        autoComplete,
        copy,
        dataTestId,
        disabled,
        error,
        icon,
        inline,
        inlineStyle,
        inputWrapperStyle,
        inputRef,
        rightContent,
        size,
        readOnly,
        telPattern,
        telPrefix,
        type: defaultType,
        value,
        ...rest
    } = { ...defaultProps, ...props }
    const [type, setType] = useState(defaultType)
    const isEdgeBrowser = isEdge(detect())
    const localInputRef = useRef<HTMLInputElement>(null)
    const inputBase = (
        <input
            {...rest}
            aria-invalid={error || ariaInvalid ? true : undefined}
            autoComplete={autoComplete}
            css={(theme) => [
                styles.input(theme, error),
                (defaultType === 'password' || copy) && !isEdgeBrowser && styles.inputWithIcon,
                defaultType === 'tel' && styles.inputTel,
                disabled && styles.disabled(theme),
                error && styles.error,
                readOnly && styles.readOnly(theme),
                inlineStyle && styles.inlineStyle(theme),
                size === inputSizes.BIG && styles.big,
                size === inputSizes.NORMAL && styles.normal,
                size === inputSizes.SMALL && styles.small,
                align === inputAligns.RIGHT && styles.right,
            ]}
            data-endge-pass={isEdgeBrowser ? 'true' : undefined}
            data-inline={inline?.toString()}
            data-test-id={dataTestId}
            disabled={disabled || false}
            onFocus={
                align === inputAligns.RIGHT
                    ? () => {
                          setTimeout(() => {
                              localInputRef.current?.select()
                          }, 100)
                      }
                    : undefined
            }
            pattern={telPattern}
            readOnly={readOnly}
            ref={mergeRefs([ref, localInputRef, inputRef]) as any}
            type={type}
            value={value}
        />
    )

    if (defaultType === 'password' || defaultType === 'tel' || copy || icon || rightContent) {
        return (
            <div css={[styles.inputWithIconWrapper, inputWrapperStyle]}>
                {defaultType === 'tel' && (
                    <div css={styles.inputTelData} onClick={() => localInputRef?.current?.focus()}>
                        {icon}
                        <span css={styles.telPrefix}>{telPrefix}</span>
                    </div>
                )}
                {inputBase}
                {copy && (
                    <span css={[styles.inputIcon, styles.rightContent]} onClick={() => copyToClipboard(localInputRef.current?.value || '')}>
                        <IconCopy {...convertSize(24)} />
                    </span>
                )}
                {defaultType === 'password' && !copy && (
                    <span
                        css={[styles.inputIcon, isEdgeBrowser && defaultType === 'password' && styles.passwordIcon, styles.rightContent]}
                        onClick={() => setType(type === defaultType ? 'text' : defaultType)}
                    >
                        {type === 'text' ? <IconHidePassword {...convertSize(24)} /> : <IconShowPassword {...convertSize(24)} />}
                    </span>
                )}
                {defaultType !== 'password' && defaultType !== 'tel' && !copy && icon && <span css={[styles.inputIcon, styles.rightContent]}>{icon}</span>}
                {defaultType !== 'password' && defaultType !== 'tel' && !copy && !icon && <span css={styles.rightContent}>{rightContent}</span>}
            </div>
        )
    }

    return inputBase
})

const FormInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const { commonInputProps, compactFormComponentsView } = useContext(FormContext)
    return <FormInputCore {...props} ref={ref} {...(compactFormComponentsView ? commonInputProps : {})} />
})

FormInput.displayName = 'FormInput'
FormInput.defaultProps = defaultProps

export default FormInput
