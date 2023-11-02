import { RemoteClientType } from '../../../../RemoteClients/RemoteClients.types'

export type Props = {
    clientData?: RemoteClientType
    initializedByAnother?: boolean
}

export type Inputs = {
    authenticationMode: { value: string; label: string }
    preSharedSubjectId?: string
    preSharedKey?: string
}
