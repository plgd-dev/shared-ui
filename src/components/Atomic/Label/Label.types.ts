import { CSSProperties, ReactNode, Ref } from 'react'

export type Props = {
    children: ReactNode
    className?: string
    dataClassName?: string
    errorMessage?: string
    htmlFor?: string
    id?: string
    inline?: boolean
    labelRef?: Ref<any>
    onClick?: (e: any) => void
    required?: boolean
    style?: CSSProperties
    title?: ReactNode
}
