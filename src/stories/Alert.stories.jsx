import React from 'react'
import Alert, { severities } from '../components/Atomic/Alert'

export default {
    title: 'Example/Alert',
    component: Alert,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <Alert {...args}>Alert text</Alert>
        <br />
        <br />
        <Alert {...args} severity={severities.SUCCESS}>
            Alert text
        </Alert>
        <br />
        <br />
        <Alert {...args} severity={severities.WARNING}>
            Alert text
        </Alert>
        <br />
        <br />
        <Alert {...args} severity={severities.ERROR}>
            Alert text
        </Alert>
    </div>
)

export const Default = Template.bind({})
Default.args = {}
