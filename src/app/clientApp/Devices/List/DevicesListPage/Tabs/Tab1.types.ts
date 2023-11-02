import { RemoteClientType } from '../../../../RemoteClients/RemoteClients.types'

export type Tab1RefType = {
    refresh: () => void
}

export type Props = {
    clientData?: RemoteClientType
    detailLinkPrefix?: string
    isActiveTab?: boolean
    loading: boolean
    setDeleting: (ownValue: boolean) => void
    setDpsData: any
    setLoading: (newValue: boolean) => void
    setOwning: (ownValue: boolean) => void
    setShowDpsModal: (modal: boolean) => void
    unselectRowsToken?: number
}
