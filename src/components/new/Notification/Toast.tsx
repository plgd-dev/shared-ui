import { toast as toastify, ToastOptions } from 'react-toastify'
import Icon from '../Icon'
import { toastTypes } from './constants'
import * as styles from './Toast.styles'
import { TypeOptions } from 'react-toastify/dist/types'

const commonSettings: ToastOptions = {
    autoClose: false,
    closeOnClick: false,
    closeButton: false,
    icon: false,
    hideProgressBar: true,
    position: 'top-right',
}

const ToastComponent = ({ closeToast, toastProps }: any) => {
    const { text, type } = toastProps

    const handleClose = (e: any) => {
        e.preventDefault()
        closeToast()
    }

    return (
        <div css={styles.toastInner}>
            <Icon css={styles.icon(type)} icon={type} size={24} />
            <div css={styles.content}>
                <div css={styles.headline(type)}>{type}</div>
                <div css={styles.text}>{text}</div>
            </div>
            <a className='close-button' css={styles.closeButton} href='#' onClick={handleClose}>
                <Icon icon='toast-close' size={20} />
            </a>
        </div>
    )
}

const toast = {
    toast: (text: string, type: TypeOptions, settings: ToastOptions) =>
        toastify(ToastComponent, {
            className: styles.toast(type),
            text,
            css: styles.toast,
            type,
            data: {
                text,
            },
            ...commonSettings,
            ...settings,
        } as ToastOptions),
    info: (text: string, settings: ToastOptions) =>
        toastify(ToastComponent, {
            className: styles.toast(toastTypes.info),
            text,
            css: styles.toast,
            type: toastTypes.info,
            data: {
                text,
            },
            ...commonSettings,
            ...settings,
        } as ToastOptions),
    success: (text: string, settings: ToastOptions) =>
        toastify(ToastComponent, {
            className: styles.toast(toastTypes.success),
            text,
            css: styles.toast,
            type: toastTypes.success,
            data: {
                text,
            },
            ...commonSettings,
            ...settings,
        } as ToastOptions),
    warning: (text: string, settings: ToastOptions) =>
        toastify(ToastComponent, {
            className: styles.toast(toastTypes.warning),
            text,
            css: styles.toast,
            type: toastTypes.warning,
            data: {
                text,
            },
            ...commonSettings,
            ...settings,
        } as ToastOptions),
    error: (text: string, settings: ToastOptions) =>
        toastify(ToastComponent, {
            className: styles.toast(toastTypes.error),
            text,
            css: styles.toast,
            type: toastTypes.error,
            data: {
                text,
            },
            ...commonSettings,
            ...settings,
        } as ToastOptions),
}

export default toast
