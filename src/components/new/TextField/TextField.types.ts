import { Ref, ChangeEventHandler } from 'react'
declare type FormControlElement = HTMLInputElement | HTMLTextAreaElement

export type Props = {
    autoComplete?: string
    className?: string
    disabled?: boolean
    inputRef?: Ref<any>
    name?: string
    onBlur?: (e: any) => void
    onChange?: ChangeEventHandler<FormControlElement>
    onKeyPress?: (e: any) => void
    placeholder?: string
    value: string | number
}
