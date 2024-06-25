import { CSSProperties } from 'react'

import { Props as InputProps } from '../FormInput/FormInput.types'

export type i18nType = {
    default: string
    duration?: string
    placeholder: string
    unit?: string
}

export type Props = {
    compactFormComponentsView?: boolean
    defaultTtlValue: number
    defaultValue: number
    disableDefaultValue?: boolean
    disabled?: boolean
    error?: string
    errorTooltip?: boolean
    i18n: i18nType
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
    unitMenuPortalTarget?: HTMLElement
    unitMenuZIndex?: number
    watchUnitChange?: boolean
} & Pick<InputProps, 'inlineStyle' | 'align' | 'size'>

export const defaultProps: Partial<Props> = {
    disableDefaultValue: true,
}
