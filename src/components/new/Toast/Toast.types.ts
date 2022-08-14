import { toastTypes } from './constants'

export type ToastMessageType = {
    message: string
    title: string
}

export type ToastOptionType = {
    onClose?: (props: any) => {}
    onClick?: (props?: any) => {}
    isNotification?: boolean
}

export type ToastTypesType = typeof toastTypes[keyof typeof toastTypes]

export type Props = {
    message: string
    title: string
    type?: ToastTypesType
}

export const defaultProps = {
    type: toastTypes.ERROR,
}
