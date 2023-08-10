import { defineMessages } from '@formatjs/intl'

export const messages = defineMessages({
    headline: {
        id: 'initializedByAnother.headline',
        defaultMessage: 'Application is initialized by a different user.',
    },
    description: {
        id: 'initializedByAnother.description',
        defaultMessage:
            'Application Initialization Restricted. Please ensure the current user logs out before proceeding. Only after the different user has logged out, will you be able to utilize the application.',
    },
    logout: {
        id: 'initializedByAnother.logout',
        defaultMessage: 'Log Out',
    },
})
