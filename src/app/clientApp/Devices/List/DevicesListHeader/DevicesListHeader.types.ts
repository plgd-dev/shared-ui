export type Props = {
    handleFlushDevices: () => void
    i18n: {
        flushCache: string
    }
    loading: boolean
    openTimeoutModal: () => void
    refresh: () => void
}
