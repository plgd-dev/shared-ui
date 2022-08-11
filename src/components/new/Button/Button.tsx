import React, { FC, MouseEvent } from 'react'
import RB_Button from 'react-bootstrap/Button'
import classNames from 'classnames'
import { Props, defaultProps, ButtonIconPositionType } from './Button.types'
import { iconPositions } from './constants'

const { ICON_LEFT, ICON_RIGHT } = iconPositions

const Button: FC<Props> = (props) => {
    const { onClick, variant, icon, iconPosition, loading, className, children, ...rest } = props
    const renderIcon = (position: ButtonIconPositionType) => {
        if (loading) {
            if (position === ICON_LEFT) {
                return <i className='m-r-5 fas left fa-spinner' />
            }
            return null
        }
        return (
            icon &&
            position === iconPosition && (
                <i
                    className={classNames(
                        'fas',
                        {
                            [position]: true,
                            'm-r-5': position === ICON_LEFT,
                            'm-l-5': position === ICON_RIGHT,
                        },
                        icon
                    )}
                />
            )
        )
    }

    const handleOnClick = (e: MouseEvent<HTMLElement>) => {
        if (!loading && onClick) {
            onClick(e)
        }
    }

    return (
        <RB_Button {...rest} className={classNames({ loading }, className)} variant={variant} onClick={handleOnClick}>
            {renderIcon(ICON_LEFT)}
            {children}
            {renderIcon(ICON_RIGHT)}
        </RB_Button>
    )
}

Button.defaultProps = defaultProps
Button.displayName = 'Button'

export default Button
