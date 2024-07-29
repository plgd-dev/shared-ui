import React from 'react'
import { StoryFn } from '@storybook/react'
import Steps from '../../components/Templates/Steps'

export default {
    title: 'Keycloak/Steps',
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
