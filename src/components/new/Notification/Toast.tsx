import { toast as toastify, ToastContainer, ToastOptions } from 'react-toastify'
import Icon from '../Icon'
import { toastTypes } from './constants'
import * as styles from './Toast.styles'

const commonSettings: ToastOptions = {
    autoClose: false,
    closeOnClick: false,
    closeButton: false,
    icon: undefined,
    position: 'top-right',
}

const ToastComponent = ({ closeToast, toastProps }: any) => {
    console.log(toastProps)
    const { text, toastType } = toastProps

    const handleClose = (e: any) => {
        e.preventDefault()
        closeToast()
    }

    return (
        <div css={styles.toastInner}>
            <Icon icon={toastType} size={24} css={styles.icon(toastType)} />
            <div css={styles.content}>
                <div css={styles.headline(toastType)}>{toastType}</div>
                <div css={styles.text}>{text}</div>
            </div>
            <a href='#' onClick={handleClose} css={styles.closeButton} className='close-button'>
                <Icon icon='toast-close' size={20} />
            </a>
        </div>
    )
}

const toast = {
    info: (text: string, settings: ToastOptions) =>
        toastify(ToastComponent, {
            className: styles.toast(toastTypes.info),
            text,
            css: styles.toast,
            toastType: toastTypes.info,
            ...commonSettings,
            ...settings,
        } as ToastOptions),
    success: (text: string, settings: ToastOptions) =>
        toastify(ToastComponent, {
            className: styles.toast(toastTypes.success),
            text,
            css: styles.toast,
            toastType: toastTypes.success,
            ...commonSettings,
            ...settings,
        } as ToastOptions),
    warning: (text: string, settings: ToastOptions) =>
        toastify(ToastComponent, {
            className: styles.toast(toastTypes.warning),
            text,
            css: styles.toast,
            toastType: toastTypes.warning,
            ...commonSettings,
            ...settings,
        } as ToastOptions),
    error: (text: string, settings: ToastOptions) =>
        toastify(ToastComponent, {
            className: styles.toast(toastTypes.error),
            text,
            css: styles.toast,
            toastType: toastTypes.error,
            ...commonSettings,
            ...settings,
        } as ToastOptions),
}

export default toast
