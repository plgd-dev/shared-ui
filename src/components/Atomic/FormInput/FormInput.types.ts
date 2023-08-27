import { SerializedStyles } from '@emotion/react'
import { ChangeEvent } from 'react'
import { inputSizes } from './constants'

export type FormInputSizeType = (typeof inputSizes)[keyof typeof inputSizes]

export type Props = {
    autoComplete?: string
    autoFocus?: boolean
    ariaInvalid?: boolean
    className?: string
    copy?: boolean
    dataTestId?: string
    defaultValue?: string | number
    disabled?: boolean
    error?: boolean
    icon?: any
    id?: string
    inline?: boolean
    inputWrapperStyle?: SerializedStyles
    inputRef?: any
    name?: string
    onBlur?: (e: any) => void
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onKeyPress?: (e: any) => void
    telPattern?: string
    telPrefix?: string
    placeholder?: string
    readOnly?: boolean
    size?: FormInputSizeType
    tabIndex?: number
    type?: string
    value?: string | number
}

export const defaultProps = {
    name: '',
    size: inputSizes.BIG,
    tabIndex: 1,
    type: 'text',
}
