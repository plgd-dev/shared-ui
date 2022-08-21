import { Ref, ChangeEventHandler } from 'react'
declare type FormControlElement = HTMLInputElement | HTMLTextAreaElement

export type Props = {
    disabled?: boolean
    inputRef: Ref<any>
    onChange?: ChangeEventHandler<FormControlElement>
    onKeyPress?: (e: KeyboardEvent) => void
    placeholder?: string
    value: string | number
}
