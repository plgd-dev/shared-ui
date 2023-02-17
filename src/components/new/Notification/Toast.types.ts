import { toastTypes } from './constants'

export type ToastTypesType = typeof toastTypes[keyof typeof toastTypes]
