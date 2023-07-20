import { ChangeEvent, ClipboardEvent } from 'react'

export type Props = {
    autoComplete?: string
    autoFocus?: boolean
    ariaInvalid?: boolean
    className?: string
    defaultValue?: string | number
    disabled?: boolean
    error?: boolean
    id?: string
    inline?: boolean
    inputRef?: any
    name?: string
    onBlur?: (e: any) => void
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onPaste?: (e: ClipboardEvent<HTMLTextAreaElement>) => void
    onKeyPress?: (e: any) => void
    placeholder?: string
    readOnly?: boolean
    tabIndex?: number
    value?: string | number
}

export const defaultProps = {
    name: '',
    tabIndex: 1,
}
