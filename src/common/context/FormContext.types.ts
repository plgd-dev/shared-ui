export type FormContextType = {
    onSubmit: (data: any) => void
    updateData: (field: string, value: any) => void
    toggleDirty?: (tab: string, dirty: boolean) => void
    toggleError?: (tab: string, error: boolean) => void
}
