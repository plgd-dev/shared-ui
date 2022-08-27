import { Ref, ChangeEventHandler } from 'react'
declare type FormControlElement = HTMLInputElement | HTMLTextAreaElement

export type Props = {
    className?: string
    disabled?: boolean
    inputRef?: Ref<any>
    onChange?: ChangeEventHandler<FormControlElement>
    onKeyPress?: (e: any) => void
    onBlur?: (e: any) => void
    placeholder?: string
    value: string | number
}
