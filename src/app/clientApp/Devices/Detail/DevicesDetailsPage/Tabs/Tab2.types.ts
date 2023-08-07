export type Props = {
    closeDpsModal: () => void
    detailLinkPrefix?: string
    deviceName: string
    deviceStatus: string
    isActiveTab: boolean
    isOnline: boolean
    isOwned: boolean
    isUnregistered: boolean
    loadingResources: boolean
    refreshResources: () => void
    resourcesData?: any
    showDpsModal: boolean
}
