export type Props = {
    dataTestId?: string
    handleClose: () => void
    handleSubmit: (name: string) => void
    i18n: {
        close: string
        edit: string
        name: string
        namePlaceholder: string
        reset: string
        saveChange: string
        savingChanges: string
    }
    loading: boolean
    name: string
    show: boolean
}
