import { RemoteClientType } from '../../../../RemoteClients/RemoteClients.types'

export type Props = {
    clientData?: RemoteClientType
    initializedByAnother?: boolean
}

export type Inputs = {
    audience?: { value: string; label: string }
    authenticationMode: { value: string; label: string }
    authority?: string
    clientId?: string
    preSharedSubjectId?: string
    preSharedKey?: string
    scopes?: string
}
