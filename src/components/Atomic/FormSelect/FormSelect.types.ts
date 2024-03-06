import { selectSizes, selectAligns } from './constants'
import { ReactNode } from 'react'

export type FormSelectSizeType = (typeof selectSizes)[keyof typeof selectSizes]
export type FormSelectAlignType = (typeof selectAligns)[keyof typeof selectAligns]

export type ValueType = string | number | boolean

export interface Option {
    readonly value: ValueType
    readonly label: string
}

export interface GroupedOption {
    readonly label: string
    readonly options: Option[]
}

export type Props = {
    align?: FormSelectAlignType
    autoWidth?: boolean
    className?: string
    defaultValue?: any
    disabled?: boolean
    error?: boolean
    footerLinks?: [{ onClick: () => void; title: string }]
    inlineStyle?: boolean
    isSearchable?: boolean
    menuIsOpen?: boolean
    menuPortalTarget?: HTMLElement | null
    menuZIndex?: number
    name?: string
    onChange?: (v: any) => void
    onBlur?: (v: any) => void
    options: Option[]
    size?: FormSelectSizeType
    value?: Option
}

export const defaultProps: Partial<Props> = {
    align: selectAligns.LEFT,
    size: selectSizes.NORMAL,
}
