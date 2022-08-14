import { FC, memo } from 'react'
import classNames from 'classnames'
import { useIntl } from 'react-intl'
import MenuItem from './MenuItem'
import { messages as t } from './Menu.i18n'
import './Menu.scss'
import { useLocation } from 'react-router-dom'
import { Props } from './Menu.types'

const Menu: FC<Props> = memo(({ collapsed, toggleCollapsed, menuItems }) => {
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

Menu.displayName = 'Menu'

export default Menu
