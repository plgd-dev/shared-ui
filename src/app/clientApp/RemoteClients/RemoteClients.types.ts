import { remoteClientStatuses } from './constants'

export type RemoteClientStatusType = (typeof remoteClientStatuses)[keyof typeof remoteClientStatuses]

export type RemoteClientType = {
    id: string
    clientName: string
    clientUrl: string
    created: string
    status: RemoteClientStatusType
    version: string
    authenticationMode: string
    preSharedSubjectId?: string
    preSharedKey?: string
}
