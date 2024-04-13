import React from 'react'
import Steps from '../components/Templates/Steps'
import { StoryFn } from '@storybook/react'

export default {
    title: 'Templates/Steps',
    component: Steps,
    argTypes: {},
}

const Template = (args: any) => (
    <div>
        <Steps {...args} active={0} steps={['Email', 'Basic info', 'Password']} />
        <br />
        <Steps {...args} active={1} steps={['Email', 'Basic info', 'Password']} />
        <br />
        <Steps {...args} active={2} steps={['Email', 'Basic info', 'Password']} />
    </div>
)

export const Default: StoryFn = Template.bind({})
Default.args = {}
