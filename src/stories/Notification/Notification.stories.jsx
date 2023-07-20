import React from 'react'
import Notification from '../../components/Atomic/Notification'
import App from '../../components/Atomic/App'
import { IntlProvider } from '../../components/Atomic'

export default {
    title: 'Notification/Notification',
    component: Notification,
    argTypes: {},
}

const Template = (args) => (
    <IntlProvider defaultLanguage='en' languages={{ en: {} }}>
        <App>
            <button
                {...args}
                onClick={() =>
                    Notification.info({ title: 'Info', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at orci porttitor.' })
                }
            >
                info
            </button>
            <br />
            <button
                {...args}
                onClick={() =>
                    Notification.success({
                        title: 'Success',
                        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at orci porttitor.',
                    })
                }
            >
                success
            </button>
            <br />
            <button
                {...args}
                onClick={() =>
                    Notification.warning({
                        title: 'Warning',
                        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at orci porttitor.',
                    })
                }
            >
                warning
            </button>
            <br />
            <button
                {...args}
                onClick={() =>
                    Notification.error({
                        title: 'Error',
                        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at orci porttitor.',
                    })
                }
            >
                error
            </button>
        </App>
    </IntlProvider>
)

export const Default = Template.bind({})
Default.args = {}
