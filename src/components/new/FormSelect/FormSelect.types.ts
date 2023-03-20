export interface Option {
    readonly value: string
    readonly label: string
}

export interface GroupedOption {
    readonly label: string
    readonly options: Option[]
}

export type Props = {
    className?: string
    defaultValue?: any
    disabled?: boolean
    isSearchable?: boolean
    menuIsOpen?: boolean
    name?: string
    onChange?: (v: any) => void
    options: Option[]
    value?: Option
}
