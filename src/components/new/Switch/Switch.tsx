import React, { FC } from 'react'
import { Props, defaultProps } from './Switch.types'
import * as styles from './Switch.styles'

const Switch: FC<Props> = (props) => {
    const { id, label, labelBefore, size, defaultChecked, className, disabled, loading, ...rest } = { ...defaultProps, ...props }
    const Slider = styles.slider

    return (
        <label className={className} css={[styles.switchC, labelBefore && styles.labelBefore]}>
            <div css={styles.switcher(size || 'big')}>
                <input
                    {...rest}
                    css={[styles.input(size || 'big', disabled || false), loading && styles.loading]}
                    defaultChecked={defaultChecked}
                    disabled={disabled || loading}
                    type='checkbox'
                />
                <Slider css={[styles.sliderStyle(size || 'big'), disabled && styles.disabled]} />
            </div>
            {label && <div css={[styles.label, labelBefore && styles.labelBeforeSwitch]}>{label}</div>}
        </label>
    )
}

Switch.displayName = 'Switch'
Switch.defaultProps = defaultProps

export default Switch
