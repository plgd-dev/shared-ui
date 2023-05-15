import React from 'react'
import Notification from '../../components/Atomic/Notification'
import App from '../../components/Atomic/App'

export default {
    title: 'Notification/Notification',
    component: Notification,
    argTypes: {},
}

const Template = (args) => (
    <App>
        <button {...args} onClick={() => Notification.info('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at orci porttitor.')}>
            info
        </button>
        <br />
        <button {...args} onClick={() => Notification.success('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at orci porttitor.')}>
            success
        </button>
        <br />
        <button {...args} onClick={() => Notification.warning('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at orci porttitor.')}>
            warning
        </button>
        <br />
        <button {...args} onClick={() => Notification.error('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at orci porttitor.')}>
            error
        </button>
    </App>
)

export const Default = Template.bind({})
Default.args = {}
