export type Props = {
    dataTestId?: string
    deviceName: string
    deviceNameLoading: boolean
    handleClose: () => void
    handleSubmit: (name: string) => void
    i18n: {
        close: string
        deviceName: string
        edit: string
        name: string
        reset: string
        saveChange: string
        savingChanges: string
    }
    show: boolean
}
