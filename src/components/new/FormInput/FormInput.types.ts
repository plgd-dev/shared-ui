import { ChangeEvent } from 'react'

export type Props = {
    autoComplete?: string
    autoFocus?: boolean
    ariaInvalid?: boolean
    className?: string
    copy?: boolean
    defaultValue?: string | number
    disabled?: boolean
    error?: boolean
    icon?: any
    id?: string
    inline?: boolean
    inputRef?: any
    name?: string
    onBlur?: (e: any) => void
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onKeyPress?: (e: any) => void
    telPattern?: string
    telPrefix?: string
    placeholder?: string
    tabIndex?: number
    type?: string
    value?: string | number
}

export const defaultProps = {
    tabIndex: 1,
    type: 'text',
    name: '',
}
