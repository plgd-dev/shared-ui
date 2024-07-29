import { ChangeEvent, ClipboardEvent, CSSProperties } from 'react'

export type Props = {
    ariaInvalid?: boolean
    autoComplete?: string
    autoFocus?: boolean
    className?: string
    dataTestId?: string
    defaultValue?: string | number
    disabled?: boolean
    error?: boolean
    id?: string
    inline?: boolean
    inputRef?: any
    name?: string
    onBlur?: (e: any) => void
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onKeyPress?: (e: any) => void
    onPaste?: (e: ClipboardEvent<HTMLTextAreaElement>) => void
    placeholder?: string
    readOnly?: boolean
    style?: CSSProperties
    tabIndex?: number
    value?: string | number
}

export const defaultProps = {
    name: '',
    tabIndex: 1,
}
