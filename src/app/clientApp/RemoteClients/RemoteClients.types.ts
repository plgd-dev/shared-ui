import { remoteClientStatuses } from './constants'

export type RemoteClientStatusType = (typeof remoteClientStatuses)[keyof typeof remoteClientStatuses]

export type RemoteClientType = {
    authenticationMode: string
    clientName: string
    clientUrl: string
    created: string
    id: string
    preSharedKey?: string
    preSharedSubjectId?: string
    reInitialization?: boolean
    status: RemoteClientStatusType
    version: string
}
