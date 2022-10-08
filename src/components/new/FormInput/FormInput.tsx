import { FC, useRef, useState } from 'react'
import { Props, defaultProps } from './FormInput.types'
import * as styles from './FormInput.style'
import { mergeRefs } from 'react-merge-refs'
import { ReactComponent as IconShowPassword } from './assets/icon-show-password.svg'
import { ReactComponent as IconHidePassword } from './assets/icon-hide-password.svg'

const FormInput: FC<Props> = (props) => {
    const { autoComplete, value, inputRef, type: defaultType, icon, disabled, error, telPattern, telPrefix, ...rest } = { ...defaultProps, ...props }
    const [type, setType] = useState(defaultType)
    const localInputRef = useRef<HTMLInputElement>(null)
    const inputBase = (
        <input
            {...rest}
            aria-invalid={error ? true : undefined}
            autoComplete={autoComplete}
            css={[
                styles.input,
                defaultType === 'password' && styles.inputWithIcon,
                defaultType === 'tel' && styles.inputTel,
                disabled && styles.disabled,
                error && styles.error,
            ]}
            disabled={disabled || false}
            pattern={telPattern}
            ref={inputRef ? (mergeRefs([localInputRef, inputRef]) as any) : localInputRef}
            type={type}
            value={value}
        />
    )

    if (defaultType === 'password' || defaultType === 'tel' || icon) {
        return (
            <div css={styles.inputWithIconWrapper}>
                {defaultType === 'tel' && (
                    <div css={styles.inputTelData} onClick={() => localInputRef?.current?.focus()}>
                        {icon}
                        <span css={styles.telPrefix}>{telPrefix}</span>
                    </div>
                )}
                {inputBase}
                {defaultType === 'password' && (
                    <span css={styles.inputIcon} onClick={() => setType(type === defaultType ? 'text' : defaultType)}>
                        {type === 'text' ? <IconHidePassword /> : <IconShowPassword />}
                    </span>
                )}
                {defaultType !== 'password' && defaultType !== 'tel' && <span css={styles.inputIcon}>{icon}</span>}
            </div>
        )
    }

    return inputBase
}

FormInput.displayName = 'FormInput'
FormInput.defaultProps = defaultProps

export default FormInput
