import React, { FC, MouseEvent } from 'react'
import { Props, defaultProps, ButtonIconPositionType } from './Button.types'
import { iconPositions } from './constants'
import * as styles from './Button.styles'

const { ICON_LEFT, ICON_RIGHT } = iconPositions

const Button: FC<Props> = (props) => {
    const { onClick, variant, icon, iconPosition, loading, className, children, disabled, htmlType, size, fullWidth, ...rest } = { ...defaultProps, ...props }
    const renderIcon = (position: ButtonIconPositionType) => {
        if (loading) {
            if (position === ICON_LEFT) {
                return <i className='m-r-15 fas left fa-spinner' />
            }
            return null
        }
        return icon && position === iconPosition && <span css={styles.icon(position)}>{icon}</span>
    }

    const handleOnClick = (e: MouseEvent<HTMLElement>) => {
        if (!loading && onClick) {
            onClick(e)
        }
    }

    return (
        <button
            {...rest}
            css={[styles.button(variant, size, disabled), fullWidth && styles.fullWidth]}
            className={className}
            onClick={handleOnClick}
            type={htmlType}
        >
            {renderIcon(ICON_LEFT)}
            {children}
            {renderIcon(ICON_RIGHT)}
        </button>
    )
}

Button.defaultProps = defaultProps
Button.displayName = 'Button'

export default Button
