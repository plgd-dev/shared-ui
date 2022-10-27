import React from 'react'
import { Icon } from '../components/new/Icon'
import './global.css'

export default {
    title: 'Assets/Icon',
    component: Icon,
    argTypes: {},
}

const data = [
    { name: 'dashboard' },
    { name: 'devices' },
    { name: 'integrations' },
    { name: 'remote-clients' },
    { name: 'pending-commands' },
    { name: 'network' },
    { name: 'device-update' },
    { name: 'log' },
    { name: 'lock' },
    { name: 'net' },
    { name: 'docs' },
    { name: 'chat' },
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
