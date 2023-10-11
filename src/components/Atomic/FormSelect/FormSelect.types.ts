import { selectSizes } from './constants'

export type FormSelectSizeType = (typeof selectSizes)[keyof typeof selectSizes]

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

export const defaultProps = {
    size: selectSizes.NORMAL,
}
