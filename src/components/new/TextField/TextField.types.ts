import { Ref, ChangeEventHandler, KeyboardEventHandler } from 'react'
declare type FormControlElement = HTMLInputElement | HTMLTextAreaElement

export type Props = {
    disabled?: boolean
    inputRef: Ref<any>
    onChange?: ChangeEventHandler<FormControlElement>
    onKeyPress?: (e: any) => void
    placeholder?: string
    value: string | number
}
