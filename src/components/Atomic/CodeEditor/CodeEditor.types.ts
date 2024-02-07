export type Props = {
    disabled?: boolean
    height?: string | number
    onChange?: (value: string) => void
    value: string
}

export const defaultProps: Partial<Props> = {
    height: '500px',
}
