import { SerializedStyles } from '@emotion/react'
import { ChangeEvent } from 'react'
import { inputSizes, inputAligns } from './constants'

export type FormInputSizeType = (typeof inputSizes)[keyof typeof inputSizes]
export type FormInputAlignType = (typeof inputAligns)[keyof typeof inputAligns]

export type Props = {
    align?: FormInputAlignType
    ariaInvalid?: boolean
    autoComplete?: string
    autoFocus?: boolean
    className?: string
    copy?: boolean
    dataTestId?: string
    defaultValue?: string | number
    disabled?: boolean
    error?: boolean
    icon?: any
    id?: string
    inline?: boolean
    inlineStyle?: boolean
    inputRef?: any
    inputWrapperStyle?: SerializedStyles
    name?: string
    onBlur?: (e: any) => void
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onKeyPress?: (e: any) => void
    placeholder?: string
    readOnly?: boolean
    size?: FormInputSizeType
    tabIndex?: number
    telPattern?: string
    telPrefix?: string
    type?: string
    value?: string | number
}

export const defaultProps: Partial<Props> = {
    align: inputAligns.LEFT,
    name: '',
    size: inputSizes.BIG,
    tabIndex: 1,
    type: 'text',
}
