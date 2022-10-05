import { FC, useState } from 'react'
import { Props } from './FormInput.types'
import * as styles from './FormInput.style'
import { ReactComponent as IconShowPassword } from './assets/icon-show-password.svg'
import { ReactComponent as IconHidePassword } from './assets/icon-hide-password.svg'

const FormInput: FC<Props> = (props) => {
    const { value, inputRef, type: defaultType, icon, disabled, error, ...rest } = props
    const [type, setType] = useState(defaultType)
    const inputBase = (
        <input
            {...rest}
            css={[styles.input, defaultType === 'password' && styles.inputWithIcon, disabled && styles.disabled, error && styles.error]}
            disabled={disabled || false}
            ref={inputRef}
            type={type}
            value={value}
        />
    )

    console.log(error)

    if (defaultType === 'password' || icon) {
        return (
            <div css={styles.inputWithIconWrapper}>
                {inputBase}
                {defaultType === 'password' && (
                    <span
                        css={[styles.inputIcon, type === 'text' && defaultType === 'password' && styles.inputIconActive]}
                        onClick={() => setType(type === defaultType ? 'text' : defaultType)}
                    >
                        {type === 'text' ? <IconHidePassword /> : <IconShowPassword />}
                    </span>
                )}
                {defaultType !== 'password' && <span css={styles.inputIcon}>{icon}</span>}
            </div>
        )
    }

    return inputBase
}

FormInput.displayName = 'FormInput'

export default FormInput
