import { ReactNode, Ref } from 'react'

export type Props = {
    checked: boolean
    containerClassName?: string
    disabled?: boolean
    id?: string
    inputRef?: Ref<any>
    label?: ReactNode
}
