import React, { forwardRef } from 'react'
import { Props, defaultProps } from './Switch.types'
import * as styles from './Switch.styles'

const Switch = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const { id, label, labelBefore, size, defaultChecked, className, disabled, loading, ...rest } = { ...defaultProps, ...props }
    const Slider = styles.slider as any

    return (
        <label className={className} css={[styles.switchC, labelBefore && styles.labelBefore]}>
            <div css={styles.switcher(size || 'big')}>
                <input
                    {...rest}
                    css={(theme) => [styles.input(theme, size || 'big', disabled || false), loading && styles.loading]}
                    defaultChecked={defaultChecked}
                    disabled={disabled || loading}
                    ref={ref}
                    type='checkbox'
                />
                <Slider css={[styles.sliderStyle(size || 'big'), disabled && styles.disabled]} size={size} />
            </div>
            {label && <div css={[styles.label, labelBefore && styles.labelBeforeSwitch]}>{label}</div>}
        </label>
    )
})

Switch.displayName = 'Switch'

export default Switch
