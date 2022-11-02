import { ReactNode, SyntheticEvent } from 'react'

export type Props = {
    checked?: boolean
    className?: string
    defaultChecked?: boolean
    disabled?: boolean
    error?: boolean
    id?: string
    indeterminate?: boolean
    inputRef?: any
    label?: ReactNode
    name: string
    onChange?: (e: SyntheticEvent) => void
    type?: 'checkbox' | 'radio'
    value?: string
}

export const defaultProps: Partial<Props> = {
    type: 'checkbox',
}
