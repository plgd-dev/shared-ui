import { ReactNode, Ref, SyntheticEvent } from 'react'

export type Props = {
    checked?: boolean
    className?: string
    defaultChecked?: boolean
    disabled?: boolean
    error?: boolean
    id?: string
    inputRef?: Ref<any>
    label?: ReactNode
    name: string
    onChange: (e: SyntheticEvent) => void
    type?: 'checkbox' | 'radio'
}

export const defaultProps: Partial<Props> = {
    type: 'checkbox',
}
