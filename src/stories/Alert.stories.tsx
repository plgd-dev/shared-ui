import React from 'react'
import Alert, { severities } from '../components/Atomic/Alert'
import { StoryFn } from '@storybook/react'

export default {
    title: 'Example/Alert',
    component: Alert,
    argTypes: {},
}

const Template = (args: any) => (
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
        <br />
        <br />
        <div style={{ width: 550 }}>
            <Alert {...args}>
                Before adding a remote client, verify their TLS certificate for security. To proceed, open the URL in your browser, verify and accept the
                certificate. Adding a client involves sharing credentials, so ensure you trust them.
            </Alert>
        </div>
    </div>
)

export const Default: StoryFn = Template.bind({})
Default.args = {}
