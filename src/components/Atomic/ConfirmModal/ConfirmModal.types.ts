import { ReactNode } from 'react'
import { Props as ModalProps } from '../Modal/Modal.types'

export type Props = {
    body: ReactNode
    cancelButtonText?: string
    children?: ReactNode
    confirmButtonText?: string
    confirmDisabled?: boolean
    data?: {}
    loading?: boolean
    onClose: () => void
    onConfirm: (onClose: () => void, data?: {}) => void
    show: boolean
    title: ReactNode
} & Pick<ModalProps, 'zIndex'>

export const defaultProps = {
    show: false,
    loading: false,
    confirmDisabled: false,
    data: {},
}
