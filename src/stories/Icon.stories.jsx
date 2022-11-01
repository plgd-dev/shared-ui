import React from 'react'
import { Icon } from '../components/new/Icon'
import './global.css'

export default {
    title: 'Assets/Icon',
    component: Icon,
    argTypes: {},
}

const data = [
    { name: 'chat' },
    { name: 'close' },
    { name: 'cloud-error' },
    { name: 'cloud-success' },
    { name: 'cloud-warning' },
    { name: 'collapse' },
    { name: 'copy' },
    { name: 'dashboard' },
    { name: 'device-update' },
    { name: 'devices' },
    { name: 'docs' },
    { name: 'icon-hide-password' },
    { name: 'icon-show-password' },
    { name: 'integrations' },
    { name: 'link' },
    { name: 'lock' },
    { name: 'log' },
    { name: 'net' },
    { name: 'network' },
    { name: 'notification' },
    { name: 'pending-commands' },
    { name: 'plus' },
    { name: 'refresh' },
    { name: 'remote-clients' },
    { name: 'settings' },
]

const Template = (args) => (
    <>
        <table>
            {data.map((icon, key) => {
                const { name, ...rest } = icon
                return (
                    <tr key={key}>
                        <td>
                            {icon.name}
                            {icon.size ? ` (size: ${icon.size}px)` : ''}
                        </td>
                        <td>
                            <Icon {...args} {...rest} icon={icon.name} size={icon?.size || 32} />
                        </td>
                    </tr>
                )
            })}
        </table>
    </>
)

export const Default = Template.bind({})
Default.args = {}
