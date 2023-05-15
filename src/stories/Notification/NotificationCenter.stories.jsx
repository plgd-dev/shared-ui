import React from 'react'
import NotificationCenter from '../../components/Atomic/NotificationCenter'
import App from '../../components/Atomic/App'
import Notification from '../../components/Atomic/Notification'

export default {
    title: 'Notification/NotificationCenter',
    component: NotificationCenter,
    argTypes: {},
}

const types = ['success', 'info', 'warning', 'error']

const addNotification = () => {
    Notification.toast(
        {
            title: 'Title',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        types[Math.floor(Math.random() * types.length)]
    )
}

const Template = (args) => (
    <App>
        <button onClick={addNotification}>Add toast</button>
        <div
            style={{
                padding: '20px 20px 20px 450px',
            }}
        >
            <NotificationCenter {...args} />
        </div>
    </App>
)

export const Default = Template.bind({})
Default.args = {}
