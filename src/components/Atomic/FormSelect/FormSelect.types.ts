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
    className?: string
    creatable?: boolean
    defaultValue?: any
    disabled?: boolean
    error?: boolean
    footerLinks?: [{ onClick: () => void; title: string }]
    inlineStyle?: boolean
    isMulti?: boolean
    isSearchable?: boolean
    menuIsOpen?: boolean
    menuPortalTarget?: HTMLElement | null
    menuZIndex?: number
    name?: string
    placeholder?: string
    onChange?: (v: any) => void
    onBlur?: (v: any) => void
    options: OptionType[]
    size?: FormSelectSizeType
    value?: OptionType | OptionType[]
}

export const defaultProps: Partial<Props> = {
    align: selectAligns.LEFT,
    isMulti: false,
    size: selectSizes.NORMAL,
    placeholder: 'Select...',
}
