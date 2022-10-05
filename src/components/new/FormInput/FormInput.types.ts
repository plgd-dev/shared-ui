import { Ref, ChangeEventHandler } from 'react'
declare type FormControlElement = HTMLInputElement | HTMLTextAreaElement

export type Props = {
    className?: string
    defaultValue?: string | number
    disabled?: boolean
    error?: boolean
    icon?: any
    id?: string
    inputRef?: Ref<any>
    onBlur?: (e: any) => void
    onChange?: ChangeEventHandler<FormControlElement>
    onKeyPress?: (e: any) => void
    placeholder?: string
    type?: string
    value?: string | number
}
