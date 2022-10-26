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
    { name: 'dashboard', size: 32 },
    { name: 'devices' },
    { name: 'devices', size: 32 },
    { name: 'integrations' },
    { name: 'remote-clients' },
    { name: 'pending-commands' },
]

const Template = (args) => (
    <>
        <table>
            {data.map((icon) => {
                const { name, ...rest } = icon
                return (
                    <tr>
                        <td>
                            {icon.name}
                            {icon.size ? ` (size: ${icon.size}px)` : ''}
                        </td>
                        <td>
                            <Icon {...args} {...rest} icon={icon.name} />
                        </td>
                    </tr>
                )
            })}
        </table>
    </>
)

export const Default = Template.bind({})
Default.args = {}
