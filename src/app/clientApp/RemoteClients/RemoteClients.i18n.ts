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
    yes: {
        id: 'remoteClients.yes',
        defaultMessage: 'Yes',
    },
    no: {
        id: 'remoteClients.no',
        defaultMessage: 'No',
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
    preSharedKeyError: {
        id: 'remoteClients.preSharedKeyError',
        defaultMessage: 'preSharedKeyError error message',
    },
    authority: {
        id: 'remoteClients.authority',
        defaultMessage: 'Authority',
    },
    scopes: {
        id: 'remoteClients.scopes',
        defaultMessage: 'Scopes',
    },
    audience: {
        id: 'remoteClients.audience',
        defaultMessage: 'Audience',
    },
    clientId: {
        id: 'remoteClients.clientId',
        defaultMessage: 'Client Id',
    },
    certificateAuthority: {
        id: 'remoteClients.certificateAuthority',
        defaultMessage: 'Certificate Authority',
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
    initializedByAnotherX509: {
        id: 'remoteClients.initializedByAnotherX509',
        defaultMessage:
            'Application Initialization Restricted. Please ensure the current user logs out before proceeding. Only after the different user has logged out, will you be able to utilize the application.',
    },
    initializedByAnotherPreSharedKey: {
        id: 'remoteClients.initializedByAnotherPreSharedKey',
        defaultMessage:
            'Application initialization is restricted or misconfigured. Please make sure the current user logs out before proceeding or that you properly configure the credentials. You will only be able to utilize the application after a different user has logged out or the credentials have been properly configured.',
    },
})
