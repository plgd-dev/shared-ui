import { memo } from 'react'
import classNames from 'classnames'
import { useIntl } from 'react-intl'
import PropTypes from 'prop-types'

import { MenuItem } from './menu-item'
import { messages as t } from './menu-i18n'
import './menu.scss'
import { useLocation } from 'react-router-dom'

export const Menu = memo(({ collapsed, toggleCollapsed, menuItems }) => {
    const { formatMessage: _ } = useIntl()
    const location = useLocation()

    return (
        <nav id='menu'>
            <div className='items'>
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        to={item.to}
                        icon={item.icon}
                        tooltip={collapsed && _(t[item.nameKey])}
                        className={classNames({
                            active: item.className && location.pathname.includes(item.className),
                        })}
                    >
                        {_(t[item.nameKey])}
                    </MenuItem>
                ))}
            </div>
            <MenuItem
                className='collapse-menu-item'
                icon={classNames({
                    'fa-arrow-left': !collapsed,
                    'fa-arrow-right': collapsed,
                })}
                onClick={toggleCollapsed}
            >
                {_(t.collapse)}
            </MenuItem>
        </nav>
    )
})

Menu.propTypes = {
    collapsed: PropTypes.bool.isRequired,
    toggleCollapsed: PropTypes.func.isRequired,
}
