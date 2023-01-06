import { FC, useRef, useState } from 'react'
import { Props, defaultProps } from './FormInput.types'
import * as styles from './FormInput.styles'
import { mergeRefs } from 'react-merge-refs'
import Icon from '../Icon'
import { copyToClipboard } from '../../../common/utils'
import { inputSizes } from './constants'
import { detect } from 'detect-browser'

const FormInput: FC<Props> = (props) => {
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
            data-inline={inline?.toString()}
            disabled={disabled || false}
            pattern={telPattern}
            ref={inputRef ? (mergeRefs([localInputRef, inputRef]) as any) : localInputRef}
            type={type}
            value={value}
            data-endge-pass={isEdge ? 'true' : undefined}
        />
    )

    if (defaultType === 'password' || defaultType === 'tel' || copy || icon) {
        return (
            <div css={styles.inputWithIconWrapper}>
                {defaultType === 'tel' && (
                    <div css={styles.inputTelData} onClick={() => localInputRef?.current?.focus()}>
                        {icon}
                        <span css={styles.telPrefix}>{telPrefix}</span>
                    </div>
                )}
                {inputBase}
                {copy && (
                    <span css={styles.inputIcon} onClick={() => copyToClipboard(localInputRef.current?.value || '')}>
                        <Icon icon='copy' size={24} />
                    </span>
                )}
                {defaultType === 'password' && !copy && (
                    <span
                        css={[styles.inputIcon, isEdge && defaultType === 'password' && styles.passwordIcon]}
                        onClick={() => setType(type === defaultType ? 'text' : defaultType)}
                    >
                        {<Icon icon={`icon-${type === 'text' ? 'hide' : 'show'}-password`} size={24} />}
                    </span>
                )}
                {defaultType !== 'password' && defaultType !== 'tel' && !copy && <span css={styles.inputIcon}>{icon}</span>}
            </div>
        )
    }

    return inputBase
}

FormInput.displayName = 'FormInput'
FormInput.defaultProps = defaultProps

export default FormInput
