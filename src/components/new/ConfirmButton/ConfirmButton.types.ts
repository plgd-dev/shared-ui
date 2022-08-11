import { ReactNode } from 'react'

export type Props = {
    onConfirm: (onClose: () => void) => void
    title: string
    body: ReactNode
    confirmButtonText: string
    cancelButtonText: string
    closeOnConfirm?: boolean
    loading?: boolean
    modalProps?: {}
}

export const defaultProps = {
    confirmButtonText: '',
    cancelButtonText: '',
    closeOnConfirm: true,
    modalProps: {},
}
