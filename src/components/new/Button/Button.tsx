import React, { FC, MouseEvent } from 'react'
import { Props, defaultProps, ButtonIconPositionType } from './Button.types'
import { buttonSizes, iconPositions } from './constants'
import * as styles from './Button.styles'
import { ClipLoader } from 'react-spinners'
import { colorsVariants } from '../_utils/colors'
import { useTheme } from '@emotion/react'

const { ICON_LEFT, ICON_RIGHT } = iconPositions
const Button: FC<Props> = (props) => {
    const { onClick, variant, icon, iconPosition, loading, className, children, disabled, htmlType, size, fullWidth, dataTestId, ...rest } = {
        ...defaultProps,
        ...props,
    }
    const theme = useTheme()

    const renderIcon = (position: ButtonIconPositionType) => {
        if (loading) {
            if (position === ICON_LEFT) {
                return (
                    <span css={[styles.icon(position), styles.loadingIcon]}>
                        <ClipLoader color={colorsVariants[variant!].text} size={16} />
                    </span>
                )
            }
            return null
        }
        return icon && position === iconPosition && <span css={styles.icon(position)}>{icon}</span>
    }

    const handleOnClick = (e: MouseEvent<HTMLElement>) => {
        if (!loading && !disabled && onClick) {
            onClick(e)
        }
    }

    return (
        <button
            {...rest}
            className={className}
            css={(theme) => [
                styles.button(variant, disabled),
                styles.variant(variant, theme),
                disabled && styles.variantDisabled(variant, theme),
                size === buttonSizes.BIG && styles.big,
                size === buttonSizes.NORMAL && styles.normal,
                size === buttonSizes.SMALL && styles.small,
                fullWidth && styles.fullWidth,
            ]}
            onClick={handleOnClick}
            type={htmlType}
            data-test-id={dataTestId}
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
