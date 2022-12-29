import React, { FC } from 'react'
import { Props, defaultProps } from './Switch.types'
import * as styles from './Switch.styles'

const Switch: FC<Props> = (props) => {
    const { id, label, labelBefore, size, defaultChecked, ...rest } = { ...defaultProps, ...props }
    const Slider = styles.slider

    return (
        <label css={[styles.switchC, labelBefore && styles.labelBefore]}>
            <div css={styles.switcher(size || 'big')}>
                <input {...rest} css={styles.input(size || 'big')} defaultChecked={defaultChecked} type='checkbox' />
                <Slider css={styles.sliderStyle(size || 'big')} />
            </div>
            {label && <div css={[styles.label, labelBefore && styles.labelBeforeSwitch]}>{label}</div>}
        </label>
    )
}

Switch.displayName = 'Switch'

export default Switch
