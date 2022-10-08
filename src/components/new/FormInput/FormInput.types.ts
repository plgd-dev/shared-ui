import { ChangeEventHandler, MutableRefObject } from 'react'
declare type FormControlElement = HTMLInputElement | HTMLTextAreaElement

export type Props = {
    autoComplete?: string
    autoFocus?: boolean
    className?: string
    defaultValue?: string | number
    disabled?: boolean
    error?: boolean
    icon?: any
    id?: string
    inputRef?: any
    name: string
    onBlur?: (e: any) => void
    onChange?: ChangeEventHandler<FormControlElement>
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
}
