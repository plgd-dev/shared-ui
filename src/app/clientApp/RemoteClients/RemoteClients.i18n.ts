import { defineMessages } from '@formatjs/intl'

export const messages = defineMessages({
    devices: {
        id: 'devices.devices',
        defaultMessage: 'Devices',
    },
    configuration: {
        id: 'devices.configuration',
        defaultMessage: 'Configuration',
    },
    deviceAuthenticationMode: {
        id: 'devices.deviceAuthenticationMode',
        defaultMessage: 'Device Authentication Mode',
    },
    version: {
        id: 'devices.version',
        defaultMessage: 'Version',
    },
    subjectId: {
        id: 'remoteClients.subjectId',
        defaultMessage: 'Subject ID',
    },
    key: {
        id: 'remoteClients.key',
        defaultMessage: 'Key',
    },
    preSharedSubjectIdError: {
        id: 'remoteClients.preSharedSubjectIdError',
        defaultMessage: 'SharedSubjectIdError error message',
    },
    changesMade: {
        id: 'remoteClients.changesMade',
        defaultMessage: 'Changes made',
    },
    reset: {
        id: 'remoteClients.reset',
        defaultMessage: 'Reset',
    },
    saveChanges: {
        id: 'remoteClients.saveChanges',
        defaultMessage: 'Save changes',
    },
    setting: {
        id: 'remoteClients.setting',
        defaultMessage: 'setting',
    },
    settings: {
        id: 'remoteClients.settings',
        defaultMessage: 'settings',
    },
    clientsUpdated: {
        id: 'remoteClients.clientsDeleted',
        defaultMessage: 'remote client updated',
    },
    clientsUpdatedMessage: {
        id: 'remoteClients.clientsDeletedMessage',
        defaultMessage: 'The remote client was successfully updated.',
    },
    clientInformations: {
        id: 'remoteClients.clientInformations',
        defaultMessage: 'Client Information',
    },
    certificateAcceptDescription: {
        id: 'remoteClients.certificateAcceptDescription',
        defaultMessage:
            'Before adding a remote client, verify their TLS certificate for security. To proceed, open the URL in your browser, verify and accept the certificate. Adding a client involves sharing credentials, so ensure you trust them.',
    },
})
