import { remoteClientStatuses } from './constants'

export type RemoteClientStatusType = (typeof remoteClientStatuses)[keyof typeof remoteClientStatuses]

export type RemoteClientType = {
    deviceAuthenticationMode: string
    clientName: string
    clientUrl: string
    created: string
    id: string
    preSharedKey?: string
    preSharedSubjectId?: string
    status: RemoteClientStatusType
    version: string
}
