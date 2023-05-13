export const toastTypes = {
    info: 'info',
    success: 'success',
    warning: 'warning',
    error: 'error',
} as const

export const toastVariants = {
    toast: 'toast',
    notification: 'notification',
} as const

export const DEFAULT_CONTAINER_ID = 'default-container'
export const ERROR_CONTAINER_ID = 'error-container'

export const TOAST_HIDE_TIME = 5000

export const MAX_NUMBER_OF_VISIBLE_TOASTS = 20
