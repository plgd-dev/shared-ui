import React from 'react'
import Notification from '../components/new/Notification'
import App from '../components/new/App'

export default {
    title: 'Example/Notification',
    component: Notification,
    argTypes: {},
}

const Template = (args) => (
    <App>
        <button onClick={() => Notification.info('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at orci porttitor.')}>info</button>
        <br />
        <button onClick={() => Notification.success('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at orci porttitor.')}>success</button>
        <br />
        <button onClick={() => Notification.warning('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at orci porttitor.')}>warning</button>
        <br />
        <button onClick={() => Notification.error('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at orci porttitor.')}>error</button>
    </App>
)

export const Default = Template.bind({})
Default.args = {}
