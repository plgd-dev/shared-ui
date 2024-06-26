import { toast as toastify } from 'react-toastify'
import { TypeOptions } from 'react-toastify/dist/types'
import classNames from 'classnames'
import pick from 'lodash/pick'

import * as styles from './Toast.styles'
import { toastTypes, DEFAULT_CONTAINER_ID, TOAST_HIDE_TIME, toastVariants } from './constants'
import { convertSize, IconError, IconInfo, IconSuccess, IconToastClose, IconWarning } from '../Icon'
import { MessageType, ToastSettings, ToastTypesType } from './Toast.types'

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

    const { message, type } = toastProps

    const handleClose = (e: any) => {
        e.preventDefault()
        e.stopPropagation()
        closeToast()
    }

    const getIcon = (type: ToastTypesType) => {
        switch (type) {
            case toastTypes.success:
                return <IconSuccess {...convertSize(24)} css={styles.icon(type)} />
            case toastTypes.warning:
                return <IconWarning {...convertSize(24)} css={styles.icon(type)} />
            case toastTypes.info:
                return <IconInfo {...convertSize(24)} css={styles.icon(type)} />
            case toastTypes.error:
                return <IconError {...convertSize(24)} css={styles.icon(type)} />
        }
    }

    return (
        <div css={styles.toastInner}>
            {getIcon(type)}
            <div css={styles.content}>
                <div css={(theme) => styles.headline(type, theme)}>{message.title}</div>
                {message.message && <div css={styles.text}>{message.message}</div>}
            </div>
            <a className='close-button' css={styles.closeButton} href='#' onClick={handleClose}>
                <IconToastClose {...convertSize(20)} />
            </a>
        </div>
    )
}

const toast = {
    toast: (message: MessageType, type: TypeOptions, settings?: ToastSettings) =>
        toastify(<ToastComponent />, {
            className: classNames(
                styles.toast(type, settings?.hasOwnProperty('onClick')),
                settings?.variant === toastVariants.notification && 'notification-toast',
                'plgd-toast'
            ),
            message,
            type,
            data: { message, ...pick(settings, ['onClick', 'variant']) },
            ...commonSettings,
            ...settings,
        } as ToastSettings),
    info: (message: MessageType, settings?: ToastSettings) =>
        toastify(<ToastComponent />, {
            className: classNames(
                styles.toast(toastTypes.info, settings?.hasOwnProperty('onClick')),
                settings?.variant === toastVariants.notification && 'notification-toast',
                'plgd-toast'
            ),
            message,
            type: toastTypes.info,
            data: { message, ...pick(settings, ['onClick', 'variant']) },
            ...commonSettings,
            ...settings,
        } as ToastSettings),
    success: (message: MessageType, settings?: ToastSettings) =>
        toastify(<ToastComponent />, {
            className: classNames(
                styles.toast(toastTypes.success, settings?.hasOwnProperty('onClick')),
                settings?.variant === toastVariants.notification && 'notification-toast',
                'plgd-toast'
            ),
            message,
            type: toastTypes.success,
            data: { message, ...pick(settings, ['onClick', 'variant']) },
            ...commonSettings,
            ...settings,
        } as ToastSettings),
    warning: (message: MessageType, settings?: ToastSettings) =>
        toastify(<ToastComponent />, {
            className: classNames(
                styles.toast(toastTypes.warning, settings?.hasOwnProperty('onClick')),
                settings?.variant === toastVariants.notification && 'notification-toast',
                'plgd-toast'
            ),
            message,
            type: toastTypes.warning,
            data: { message, ...pick(settings, ['onClick', 'variant']) },
            ...commonSettings,
            ...settings,
        } as ToastSettings),
    error: (message: MessageType, settings?: ToastSettings) =>
        toastify(<ToastComponent />, {
            className: classNames(
                styles.toast(toastTypes.error, settings?.hasOwnProperty('onClick')),
                settings?.variant === toastVariants.notification && 'notification-toast',
                'plgd-toast'
            ),
            message,
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
