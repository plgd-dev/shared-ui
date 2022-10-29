import React from 'react'
import Tag from '../components/new/Tag'

export default {
    title: 'Example/Tag',
    component: Tag,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <Tag {...args} variant='success'>
            status
        </Tag>
        <br />
        <br />
        <Tag {...args} variant='warning'>
            status
        </Tag>
        <br />
        <br />
        <Tag {...args} variant='error'>
            status
        </Tag>
        <br />
        <br />
        <Tag {...args} variant='normal'>
            status
        </Tag>
    </div>
)

export const Default = Template.bind({})
Default.args = {}
