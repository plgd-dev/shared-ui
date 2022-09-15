import { ReactNode } from 'react'

export type Props = {
    body: ReactNode
    cancelButtonText: string
    children: ReactNode
    closeOnConfirm?: boolean
    confirmButtonText: string
    loading?: boolean
    modalProps?: object
    onConfirm: (onClose: () => void) => void
    title: string
}

export const defaultProps = {
    confirmButtonText: '',
    cancelButtonText: '',
    closeOnConfirm: true,
    modalProps: {},
}
