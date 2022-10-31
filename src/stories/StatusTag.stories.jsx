import React from 'react'
import StatusTag from '../components/new/StatusTag'

export default {
    title: 'Example/StatusTag',
    component: StatusTag,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <StatusTag {...args} variant='success'>
            status
        </StatusTag>
        <br />
        <br />
        <StatusTag {...args} variant='warning'>
            status
        </StatusTag>
        <br />
        <br />
        <StatusTag {...args} variant='error'>
            status
        </StatusTag>
        <br />
        <br />
        <StatusTag {...args} variant='normal'>
            status
        </StatusTag>
    </div>
)

export const Default = Template.bind({})
Default.args = {}
