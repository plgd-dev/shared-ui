import { ReactNode, Ref } from 'react'

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
}
