import { FC } from 'react'
import classNames from 'classnames'
import { useIntl } from 'react-intl'
import MenuItem from './MenuItem'
import { messages as t } from './Menu.i18n'
import './Menu.scss'
import { useLocation } from 'react-router-dom'
import { Props } from './Menu.types'

const Menu: FC<Props> = (props) => {
    const { collapsed, toggleCollapsed, menuItems } = props
    const { formatMessage: _ } = useIntl()
    const location = useLocation()

    return (
        <nav id='menu'>
            <div className='items'>
                {menuItems.map((item, index) => {
                    // @ts-ignore
                    const trans = _(t[item.nameKey])
                    return (
                        <MenuItem
                            key={index}
                            to={item.to}
                            icon={item.icon}
                            tooltip={collapsed ? trans : undefined}
                            className={classNames({
                                active: item.className && location.pathname.includes(item.className),
                            })}
                        >
                            {trans}
                        </MenuItem>
                    )
                })}
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
}

Menu.displayName = 'Menu'

export default Menu
