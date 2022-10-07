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
            Tag text
        </Tag>
        <br />
        <br />
        <Tag {...args} variant='error'>
            Tag text
        </Tag>
    </div>
)

export const Default = Template.bind({})
Default.args = {}
