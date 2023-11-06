export const remoteClientStatuses = {
    REACHABLE: 'REACHABLE',
    UNREACHABLE: 'UNREACHABLE',
    DIFFERENT_OWNER: 'DIFFERENT_OWNER',
} as const

export type RemoteClientStatusesType = (typeof remoteClientStatuses)[keyof typeof remoteClientStatuses]
