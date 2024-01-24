import { Props as InputProps } from '../FormInput/FormInput.types'

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
    smallMode?: boolean
    ttlHasError?: boolean
    watchUnitChange?: boolean
} & Pick<InputProps, 'inlineStyle' | 'align'>
