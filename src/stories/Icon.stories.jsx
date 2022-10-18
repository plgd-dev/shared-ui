import React from 'react'
import { Icon } from '../components/new/Icon'

export default {
    title: 'Assets/Icon',
    component: Icon,
    argTypes: {},
}

const Template = (args) => (
    <div style={{ display: 'flex' }}>
        <Icon {...args} icon='dashboard' />
        <Icon {...args} icon='dashboard' size={24} />
        <Icon {...args} icon='devices' size={24} />
        <Icon {...args} icon='integrations' size={24} />
        <Icon {...args} icon='remote-clients' size={24} />
        <Icon {...args} icon='pending-commands' size={24} />
        <Icon {...args} icon='pending-commands' size={48} />
        <Icon {...args} icon='search' size={48} />
    </div>
)

export const Default = Template.bind({})
Default.args = {}
