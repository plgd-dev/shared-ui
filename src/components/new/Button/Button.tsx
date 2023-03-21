import React, { FC, MouseEvent } from 'react'
import { Props, defaultProps, ButtonIconPositionType } from './Button.types'
import { buttonSizes, iconPositions } from './constants'
import * as styles from './Button.styles'
import { colorsVariants } from '../_utils/colors'
import Icon from '../Icon'

const { ICON_LEFT, ICON_RIGHT } = iconPositions
const Button: FC<Props> = (props) => {
    const { onClick, variant, icon, iconPosition, loading, loadingText, className, children, disabled, htmlType, size, fullWidth, dataTestId, ...rest } = {
        ...defaultProps,
        ...props,
    }

    const renderIcon = (position: ButtonIconPositionType) => {
        if (loading) {
            if (position === ICON_LEFT) {
                return (
                    <span css={[styles.icon(position), styles.loadingIcon]}>
                        <Icon color={colorsVariants[variant!].text} icon='loader' size={20} />
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

    const ButtonContent = () => {
        if (typeof loading === 'boolean' && loadingText) {
            return (
                <span css={styles.loadingWrapper}>
                    <span css={styles.sizeMeasure}>
                        <span css={[styles.icon(iconPositions.ICON_LEFT), styles.loadingIcon]}>
                            <Icon color={colorsVariants[variant!].text} icon='loader' size={20} />
                        </span>
                        {loadingText}
                    </span>
                    <span css={styles.loadingText}>
                        {renderIcon(ICON_LEFT)}
                        {loading ? loadingText : children}
                    </span>
                </span>
            )
        } else {
            return (
                <>
                    {renderIcon(ICON_LEFT)}
                    {children}
                    {renderIcon(ICON_RIGHT)}
                </>
            )
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
            data-test-id={dataTestId}
            onClick={handleOnClick}
            type={htmlType}
        >
            <ButtonContent />
        </button>
    )
}

Button.defaultProps = defaultProps
Button.displayName = 'Button'

export default Button
