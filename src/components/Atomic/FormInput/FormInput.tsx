import { forwardRef, useRef, useState } from 'react'
import { Props, defaultProps } from './FormInput.types'
import * as styles from './FormInput.styles'
import { mergeRefs } from 'react-merge-refs'
import { convertSize, IconCopy, IconHidePassword, IconShowPassword } from '../Icon'
import { copyToClipboard } from '../../../common/utils/copy-to-clipboard'
import { inputSizes } from './constants'
import { detect } from 'detect-browser'

const FormInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const {
        ariaInvalid,
        autoComplete,
        copy,
        disabled,
        error,
        icon,
        inline,
        inputRef,
        size,
        telPattern,
        telPrefix,
        type: defaultType,
        value,
        inputWrapperStyle,
        ...rest
    } = { ...defaultProps, ...props }
    const [type, setType] = useState(defaultType)
    const browser = detect()
    const isEdge = browser && browser.name === 'edge'
    const localInputRef = useRef<HTMLInputElement>(null)
    const inputBase = (
        <input
            {...rest}
            aria-invalid={error || ariaInvalid ? true : undefined}
            autoComplete={autoComplete}
            css={[
                styles.input,
                (defaultType === 'password' || copy) && !isEdge && styles.inputWithIcon,
                defaultType === 'tel' && styles.inputTel,
                disabled && styles.disabled,
                error && styles.error,
                size === inputSizes.BIG && styles.big,
                size === inputSizes.NORMAL && styles.normal,
            ]}
            data-endge-pass={isEdge ? 'true' : undefined}
            data-inline={inline?.toString()}
            disabled={disabled || false}
            pattern={telPattern}
            ref={mergeRefs([ref, localInputRef, inputRef]) as any}
            type={type}
            value={value}
        />
    )

    if (defaultType === 'password' || defaultType === 'tel' || copy || icon) {
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
                    <span css={styles.inputIcon} onClick={() => copyToClipboard(localInputRef.current?.value || '')}>
                        <IconCopy {...convertSize(24)} />
                    </span>
                )}
                {defaultType === 'password' && !copy && (
                    <span
                        css={[styles.inputIcon, isEdge && defaultType === 'password' && styles.passwordIcon]}
                        onClick={() => setType(type === defaultType ? 'text' : defaultType)}
                    >
                        {type === 'text' ? <IconHidePassword {...convertSize(24)} /> : <IconShowPassword {...convertSize(24)} />}
                    </span>
                )}
                {defaultType !== 'password' && defaultType !== 'tel' && !copy && <span css={styles.inputIcon}>{icon}</span>}
            </div>
        )
    }

    return inputBase
})

FormInput.displayName = 'FormInput'
FormInput.defaultProps = defaultProps

export default FormInput
