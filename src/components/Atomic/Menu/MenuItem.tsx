import classNames from 'classnames'
import { FC } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { NavLink } from 'react-router-dom'
import { Props } from './MenuItem.types'

const MenuItem: FC<Props> = (props) => {
    const { children, tooltip, onClick, className, icon, to, ...rest } = props
    const menuItemClassName = classNames('menu-item', className)

    const renderMenuItemContent = () => (
        <>
            <span className='icon'>
                <i className={`fas ${icon}`} />
            </span>
            <span className='title'>{children}</span>
        </>
    )

    const renderMenuItem = () => {
        if (to) {
            return (
                <NavLink exact to={to} className={menuItemClassName} {...rest}>
                    {renderMenuItemContent()}
                </NavLink>
            )
        }

        return (
            <div className={menuItemClassName} onClick={onClick} {...rest}>
                {renderMenuItemContent()}
            </div>
        )
    }

    if (tooltip) {
        return (
            <OverlayTrigger
                placement='right'
                overlay={
                    <Tooltip id={`menu-item-tooltip-${tooltip.replace(/\s/g, '-')}`} className='plgd-tooltip'>
                        {tooltip}
                    </Tooltip>
                }
            >
                {renderMenuItem()}
            </OverlayTrigger>
        )
    }

    return renderMenuItem()
}

MenuItem.displayName = 'MenuItem'

export default MenuItem
