import React from 'react'
import Tag from '../components/new/Tag'

export default {
    title: 'Example/Tag',
    component: Tag,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <Tag {...args}>status</Tag>
        <br />
        <br />
        <Tag {...args} icon='link'>
            status
        </Tag>
    </div>
)

export const Default = Template.bind({})
Default.args = {}
