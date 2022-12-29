export type Props = {
    defaultValue: number
    defaultTtlValue: number
    onChange: (v: any) => void
    disabled?: boolean
    ttlHasError?: boolean
    onTtlHasError?: (v: boolean) => void
    isDelete?: boolean
}
