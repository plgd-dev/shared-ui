import { RemoteClientType } from '../../../../RemoteClients/RemoteClients.types'

export type Props = {
    clientData?: RemoteClientType
    initializedByAnother?: boolean
    setLoading?: (loading: boolean) => void
}

export type Inputs = {
    audience?: { value: string; label: string }
    authenticationMode: { value: string; label: string }
    authority?: string
    certificateAuthority?: string
    clientId?: string
    preSharedKey?: string
    preSharedSubjectId?: string
    scopes?: string
}
