export type Props = {
    defaultTtlValue: number
    defaultValue: number
    disabled?: boolean
    i18n: {
        default: string
        duration: string
        placeholder: string
        unit: string
    }
    isDelete?: boolean
    onChange: (v: any) => void
    onTtlHasError?: (v: boolean) => void
    ttlHasError?: boolean
    watchUnitChange?: boolean
}
