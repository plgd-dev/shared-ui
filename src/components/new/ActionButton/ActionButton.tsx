import React, { FC } from 'react'
import BDropdown from 'react-bootstrap/Dropdown'
import omit from 'lodash/omit'
import { ActionButtonItemType, defaultProps, Props } from './ActionButton.types'

const ActionButton: FC<Props> = (props) => {
    const { type, menuProps, items, onToggle, ...rest } = props
    const getIcon = (item: ActionButtonItemType) => {
        if (item.loading) {
            return <i className={`fas fa-spinner m-r-10`} />
        } else if (item.icon) {
            return <i className={`fas ${item.icon} m-r-10`} />
        }

        return null
    }
    return (
        <BDropdown className='action-button' onToggle={onToggle}>
            <BDropdown.Toggle variant={type} {...omit(rest, 'children')}>
                <span />
                <span />
                <span />
            </BDropdown.Toggle>

            <BDropdown.Menu
                renderOnMount={true}
                {...menuProps}
                popperConfig={{
                    strategy: 'fixed',
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [-9, -15],
                            },
                        },
                    ],
                }}
            >
                {items
                    .filter((item) => !item.hidden)
                    .map((item) => {
                        return (
                            item.component || (
                                <BDropdown.Item className='btn btn-secondary' key={item.id || item.label} onClick={item.onClick} disabled={item.loading}>
                                    {getIcon(item)}
                                    {!item.loading && item.label}
                                </BDropdown.Item>
                            )
                        )
                    })}
            </BDropdown.Menu>
        </BDropdown>
    )
}

ActionButton.displayName = 'ActionButton'
ActionButton.defaultProps = defaultProps

export default ActionButton
