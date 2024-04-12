import React from 'react'
import NotificationCenter from '../../components/Atomic/NotificationCenter'
import App from '../../components/Atomic/App'
import Notification from '../../components/Atomic/Notification'
import IntlProvider from '../../components/Atomic/IntlProvider'

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
    <IntlProvider defaultLanguage='en' languages={{ en: {} }}>
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
    </IntlProvider>
)

export const Default = Template.bind({})
Default.args = {}
