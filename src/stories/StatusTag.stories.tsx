import React from 'react'
import StatusTag from '../components/Atomic/StatusTag'
import { StoryFn } from '@storybook/react'

export default {
    title: 'Example/StatusTag',
    component: StatusTag,
    argTypes: {},
}

const Template = (args: any) => (
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

export const Default: StoryFn = Template.bind({})
Default.args = {}
