import { ToastOptions } from 'react-toastify/dist/types'
import { toastTypes, toastVariants } from './constants'

export type ToastTypesType = (typeof toastTypes)[keyof typeof toastTypes]
export type ToastVariantsType = (typeof toastVariants)[keyof typeof toastVariants]

export type MessageAsObject = { defaultMessage: string; id: string }

export type MessageType = {
    title: string | MessageAsObject
    message: string | MessageAsObject | { message: MessageAsObject; params: any }
}

export type ToastSettings = {
    variant?: ToastVariantsType
    notificationId?: string
} & ToastOptions
