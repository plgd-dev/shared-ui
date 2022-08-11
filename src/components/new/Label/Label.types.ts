import { CSSProperties, ReactNode, Ref } from 'react'

export type Props = {
    style?: CSSProperties
    onClick?: () => void
    id?: string
    className?: string
    title?: ReactNode
    errorMessage?: string
    required?: boolean
    inline?: boolean
    labelRef?: Ref<any>
    dataClassName?: string
    htmlFor?: string
}
