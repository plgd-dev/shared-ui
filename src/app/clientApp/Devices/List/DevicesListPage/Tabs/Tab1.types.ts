export type Props = {
    data: any
    detailLinkPrefix?: string
    loading: boolean
    refresh: () => void
    setDeleting: (ownValue: boolean) => void
    setDpsData: any
    setOwning: (ownValue: boolean) => void
    setShowDpsModal: (modal: boolean) => void
}
