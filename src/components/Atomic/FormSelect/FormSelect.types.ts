import { selectSizes, selectAligns } from './constants'

export type FormSelectSizeType = (typeof selectSizes)[keyof typeof selectSizes]
export type FormSelectAlignType = (typeof selectAligns)[keyof typeof selectAligns]

export interface Option {
    readonly value: string
    readonly label: string
}

export interface GroupedOption {
    readonly label: string
    readonly options: Option[]
}

export type Props = {
    align?: FormSelectAlignType
    className?: string
    defaultValue?: any
    disabled?: boolean
    error?: boolean
    inlineStyle?: boolean
    isSearchable?: boolean
    menuIsOpen?: boolean
    name?: string
    onChange?: (v: any) => void
    options: Option[]
    size?: FormSelectSizeType
    value?: Option
}

export const defaultProps: Partial<Props> = {
    align: selectAligns.LEFT,
    size: selectSizes.NORMAL,
}
