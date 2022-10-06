import { Ref, ChangeEventHandler } from 'react'
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
    inputRef?: Ref<any>
    name: string
    onBlur?: (e: any) => void
    onChange?: ChangeEventHandler<FormControlElement>
    onKeyPress?: (e: any) => void
    placeholder?: string
    type?: string
    value?: string | number
    tabIndex?: number
}

export const defaultProps = {
    tabIndex: 1,
}
