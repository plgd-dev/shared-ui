import { Props as InputProps } from '../FormInput/FormInput.types'
import { CSSProperties } from 'react'

export type Props = {
    defaultTtlValue: number
    defaultValue: number
    disabled?: boolean
    error?: string
    i18n: {
        default: string
        duration?: string
        placeholder: string
        unit?: string
    }
    inlineStyle?: boolean
    isDelete?: boolean
    onBlur?: (v: any) => void
    onChange: (v: any) => void
    onTtlHasError?: (v: boolean) => void
    required?: boolean
    rightStyle?: CSSProperties
    smallMode?: boolean
    ttlHasError?: boolean
    unitClassName?: string
    watchUnitChange?: boolean
} & Pick<InputProps, 'inlineStyle' | 'align' | 'size'>
