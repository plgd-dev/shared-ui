export type Props = {
    className?: string
    compactFormComponentsView?: boolean
    dataTestId?: string
    defaultValue?: Date | null
    id?: string
    locale?: string
    onChange?: (date: Date | null) => void
    value?: Date | null
}

export const defaultProps: Partial<Props> = {
    locale: 'en-GB',
}
