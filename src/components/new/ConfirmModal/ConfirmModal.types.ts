import { ReactNode } from 'react'

export type Props = {
    body: ReactNode
    cancelButtonText?: string
    children: ReactNode
    confirmButtonText?: string
    confirmDisabled?: boolean
    data?: {}
    loading?: boolean
    onClose: () => void
    onConfirm: (onClose: () => void, data?: {}) => void
    show: boolean
    title: ReactNode
}

export const defaultProps = {
    show: false,
    loading: false,
    confirmDisabled: false,
    data: {},
}
