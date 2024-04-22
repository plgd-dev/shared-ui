import { ToastOptions } from 'react-toastify/dist/types'
import { toastTypes, toastVariants } from './constants'

export type ToastTypesType = (typeof toastTypes)[keyof typeof toastTypes]
export type ToastVariantsType = (typeof toastVariants)[keyof typeof toastVariants]

export type MessageType = {
    title: string
    message?: string
}

export type ToastSettings = {
    variant?: ToastVariantsType
    notificationId?: string
} & ToastOptions
