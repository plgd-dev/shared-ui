import { toast as toastify } from 'react-toastify'
import { TypeOptions } from 'react-toastify/dist/types'
import { useIntl } from 'react-intl'
import classNames from 'classnames'
import pick from 'lodash/pick'

import * as styles from './Toast.styles'
import { toastTypes, DEFAULT_CONTAINER_ID, TOAST_HIDE_TIME, toastVariants } from './constants'
import { translateToastString } from './utils'
import Icon from '../Icon'
import { MessageType, ToastSettings } from './Toast.types'

const commonSettings: Partial<ToastSettings> = {
    autoClose: TOAST_HIDE_TIME,
    closeButton: false,
    closeOnClick: false,
    containerId: DEFAULT_CONTAINER_ID,
    delay: 0,
    hideProgressBar: true,
    icon: false,
    position: 'top-right',
}

const ToastComponent = (props: any) => {
    const { closeToast, toastProps } = props

    const { formatMessage: _ } = useIntl()
    const { message, type } = toastProps

    const handleClose = (e: any) => {
        e.preventDefault()
        e.stopPropagation()
        closeToast()
    }

    const toastTitle = translateToastString(message.title, _)
    const toastMessage = translateToastString(message.message, _)

    return (
        <div css={styles.toastInner}>
            <Icon css={styles.icon(type)} icon={type} size={24} />
            <div css={styles.content}>
                <div css={styles.headline(type)}>{toastTitle}</div>
                <div css={styles.text}>{toastMessage}</div>
            </div>
            <a className='close-button' css={styles.closeButton} href='#' onClick={handleClose}>
                <Icon icon='toast-close' size={20} />
            </a>
        </div>
    )
}

const toast = {
    toast: (message: MessageType, type: TypeOptions, settings?: ToastSettings) =>
        toastify(<ToastComponent />, {
            className: classNames(
                styles.toast(type, settings?.hasOwnProperty('onClick')),
                settings?.variant === toastVariants.notification && 'notification-toast'
            ),
            message,
            css: styles.toast,
            type,
            data: { message, ...pick(settings, ['onClick', 'variant']) },
            ...commonSettings,
            ...settings,
        } as ToastSettings),
    info: (message: MessageType, settings?: ToastSettings) =>
        toastify(<ToastComponent />, {
            className: classNames(
                styles.toast(toastTypes.info, settings?.hasOwnProperty('onClick')),
                settings?.variant === toastVariants.notification && 'notification-toast'
            ),
            message,
            css: styles.toast,
            type: toastTypes.info,
            data: { message, ...pick(settings, ['onClick', 'variant']) },
            ...commonSettings,
            ...settings,
        } as ToastSettings),
    success: (message: MessageType, settings?: ToastSettings) =>
        toastify(<ToastComponent />, {
            className: classNames(
                styles.toast(toastTypes.success, settings?.hasOwnProperty('onClick')),
                settings?.variant === toastVariants.notification && 'notification-toast'
            ),
            message,
            css: styles.toast,
            type: toastTypes.success,
            data: { message, ...pick(settings, ['onClick', 'variant']) },
            ...commonSettings,
            ...settings,
        } as ToastSettings),
    warning: (message: MessageType, settings?: ToastSettings) =>
        toastify(<ToastComponent />, {
            className: classNames(
                styles.toast(toastTypes.warning, settings?.hasOwnProperty('onClick')),
                settings?.variant === toastVariants.notification && 'notification-toast'
            ),
            message,
            css: styles.toast,
            type: toastTypes.warning,
            data: { message, ...pick(settings, ['onClick', 'variant']) },
            ...commonSettings,
            ...settings,
        } as ToastSettings),
    error: (message: MessageType, settings?: ToastSettings) =>
        toastify(<ToastComponent />, {
            className: classNames(
                styles.toast(toastTypes.error, settings?.hasOwnProperty('onClick')),
                settings?.variant === toastVariants.notification && 'notification-toast'
            ),
            message,
            css: styles.toast,
            type: toastTypes.error,
            data: { message, ...pick(settings, ['onClick', 'variant']) },
            ...commonSettings,
            ...settings,
        } as ToastSettings),
    clearWaitingQueue: toastify.clearWaitingQueue,
    dismiss: toastify.dismiss,
    done: toastify.done,
    isActive: toastify.isActive,
    update: toastify.update,
}

export default toast
