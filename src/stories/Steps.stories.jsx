import React from 'react'
import Steps from '../components/Templates/Steps'

export default {
    title: 'Templates/Steps',
    component: Steps,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <Steps {...args} active={0} steps={['Email', 'Basic info', 'Password']} />
        <br />
        <Steps {...args} active={1} steps={['Email', 'Basic info', 'Password']} />
        <br />
        <Steps {...args} active={2} steps={['Email', 'Basic info', 'Password']} />
    </div>
)

export const Default = Template.bind({})
Default.args = {}
