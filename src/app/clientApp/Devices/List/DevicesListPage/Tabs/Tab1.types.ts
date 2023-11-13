export type Tab1RefType = {
    refresh: () => void
    flush: () => void
}

export type Props = {
    detailLinkPrefix?: string
    isActiveTab?: boolean
    loading: boolean
    setDeleting: (ownValue: boolean) => void
    setDpsData: any
    setLoading: (newValue: boolean) => void
    setOwning: (ownValue: boolean) => void
    setShowDpsModal: (modal: boolean) => void
    unselectRowsToken?: number
    useDevicesList: boolean
}

export const defaultProps: Partial<Props> = {
    useDevicesList: true,
}
