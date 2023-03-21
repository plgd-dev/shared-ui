import { ToastTypesType } from '../Notification/Toast.types'
import { toastTypes } from '../Notification/constants'
import { ReactNode } from 'react'

export type Props = {
    className?: string
    collapsed?: boolean
    id?: string
    message?: ReactNode
    onExit: () => void
    show: boolean
    timeout?: number
    type?: ToastTypesType
}

export const defaultProps = {
    timeout: 4000,
    type: toastTypes.info,
}
