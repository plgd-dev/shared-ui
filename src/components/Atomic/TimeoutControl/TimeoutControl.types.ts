import { Props as InputProps } from '../FormInput/FormInput.types'
import { CSSProperties } from 'react'

export type Props = {
    defaultTtlValue: number
    defaultValue: number
    disabled?: boolean
    i18n: {
        default: string
        duration?: string
        placeholder: string
        unit?: string
    }
    inlineStyle?: boolean
    isDelete?: boolean
    onChange: (v: any) => void
    onTtlHasError?: (v: boolean) => void
    rightStyle?: CSSProperties
    smallMode?: boolean
    ttlHasError?: boolean
    unitClassName?: string
    watchUnitChange?: boolean
} & Pick<InputProps, 'inlineStyle' | 'align' | 'size'>
