import { selectSizes, selectAligns } from './constants'

export type FormSelectSizeType = (typeof selectSizes)[keyof typeof selectSizes]
export type FormSelectAlignType = (typeof selectAligns)[keyof typeof selectAligns]

export type ValueType = string | number | boolean

export interface OptionType {
    readonly value: ValueType
    readonly label: string
}

export interface GroupedOption {
    readonly label: string
    readonly options: OptionType[]
}

export type Props = {
    align?: FormSelectAlignType
    autoWidth?: boolean
    checkboxOptions?: boolean
    className?: string
    creatable?: boolean
    dataTestId?: string
    defaultValue?: any
    disabled?: boolean
    error?: boolean
    footerLinksLeft?: { onClick: (values: any) => void; title: string; variant?: string }[]
    footerLinksRight?: { onClick: (values: any) => void; title: string; variant?: string }[]
    i18n?: {
        itemSelected: string
        itemsSelected: string
    }
    inlineStyle?: boolean
    isClearable?: boolean
    isMulti?: boolean
    isSearchable?: boolean
    menuIsOpen?: boolean
    menuPortalTarget?: HTMLElement | null
    menuZIndex?: number
    name?: string
    onBlur?: (v: any) => void
    onChange?: (v: any) => void
    onCreateOption?: (v: string | number) => void
    options: OptionType[]
    placeholder?: string
    size?: FormSelectSizeType
    value?: OptionType | OptionType[]
}

export const defaultProps: Partial<Props> = {
    align: selectAligns.LEFT,
    isMulti: false,
    size: selectSizes.NORMAL,
    placeholder: 'Select...',
}
