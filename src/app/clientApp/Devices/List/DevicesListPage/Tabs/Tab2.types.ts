import { RemoteClientType } from '../../../../RemoteClients/RemoteClients.types'

export type Props = {
    clientData?: RemoteClientType
}

export type Inputs = {
    authenticationMode: { value: string; label: string }
    preSharedSubjectId?: string
    preSharedKey?: string
}
