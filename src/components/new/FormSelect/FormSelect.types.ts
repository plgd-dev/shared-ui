export type Option = { value: string; label: string }

export type Props = {
    className?: string
    defaultValue?: any
    disabled?: boolean
    isSearchable?: boolean
    name?: string
    options: Option[]
    onChange?: (v: Option) => void
    value?: Option
}
