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

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const Template = (args) => (
    <>
        <table>
            {data.map((icon) => {
                const { name, ...rest } = icon
                console.log(icon.name)
                const c = capitalizeFirstLetter(icon.name)
                console.log(c)
                return (
                    <tr>
                        <td>
                            {icon.name}
                            {icon.size ? ` (size: ${icon.size}px)` : ''}
                        </td>
                        <td>
                            <Icon {...args} icon={icon.name} {...rest} />
                        </td>
                    </tr>
                )
            })}
        </table>
    </>
)

export const Default = Template.bind({})
Default.args = {}
