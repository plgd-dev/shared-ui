import { ReactNode, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ToastContainer as Toastr, toast } from 'react-toastify'
import classNames from 'classnames'
import { useIntl } from 'react-intl'

import { Emitter } from '../../../common/services/emitter'
import { isBrowserTabActive } from '../../../common/utils'
import {
    toastTypes,
    browserNotificationPermissions,
    TOAST_HIDE_TIME,
    MAX_NUMBER_OF_VISIBLE_TOASTS,
    MAX_NUMBER_OF_ALL_TOASTS,
    MAX_NUMBER_OF_BROWSER_NOTIFICATIONS,
    BROWSER_NOTIFICATIONS_EVENT_KEY,
    BROWSER_NOTIFICATION_HIDE_TIME,
} from './constants'
import { translateToastString } from './utils'
import { defaultProps, Props, ToastMessageType, ToastOptionType } from './Toast.types'
import { createPortal } from 'react-dom'

const { ERROR, SUCCESS, WARNING, INFO } = toastTypes

// Globals
let dispatchedToasts = 0
let dispatchedBrowserNotifications = 0
let notification: any = null
let decrementTimer: any = null

type ToastContainerProps = {
    containerId?: string
    portalTarget?: ReactNode | Element | null
    showNotifications?: boolean
}

// Container responsible for processing and dispatching the toast notifications
export const ToastContainer = (props: ToastContainerProps) => {
    const { containerId, portalTarget, showNotifications } = props

    const container = (
        <Toastr
            hideProgressBar
            newestOnTop
            autoClose={TOAST_HIDE_TIME}
            containerId={containerId}
            icon={false}
            limit={MAX_NUMBER_OF_VISIBLE_TOASTS}
            pauseOnFocusLoss={false}
            style={{ display: showNotifications ? 'block' : 'none' }}
        />
    )

    if (portalTarget) {
        return createPortal(container, portalTarget as Element)
    }

    return container
}

// Single toast component
const ToastComponent = (props: Props) => {
    const { formatMessage: _ } = useIntl()
    const { message, title, type } = props

    const toastMessage = translateToastString(message, _)
    const toastTitle = translateToastString(title, _)

    return (
        <div className='toast-component'>
            <div className='toast-icon'>
                <i
                    className={classNames('fas', {
                        'fa-info-circle': type === INFO,
                        'fa-check-circle': type === SUCCESS,
                        'fa-exclamation-circle': type === WARNING,
                        'fa-times-circle': type === ERROR,
                    })}
                />
            </div>
            <div className='toast-content'>
                {toastTitle && <div className='title'>{toastTitle}</div>}
                <div className='message'>{toastMessage}</div>
            </div>
        </div>
    )
}

ToastComponent.propTypes = {
    message: PropTypes.oneOfType([PropTypes.node, PropTypes.object]).isRequired,
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
    type: PropTypes.oneOf([ERROR, SUCCESS, WARNING, INFO]),
}

ToastComponent.displayName = 'ToastComponent'
ToastComponent.defaultProps = defaultProps

export default ToastComponent

// Container responsible for processing and dispatching the browser notifications
export const BrowserNotificationsContainer = () => {
    const { formatMessage: _, locale } = useIntl()

    const decrementCounter = () => {
        if (dispatchedBrowserNotifications > 0) {
            dispatchedBrowserNotifications--
        }
    }

    const showBrowserNotification = (params: ToastMessageType, options: ToastOptionType) => {
        const { message, title } = params

        const toastMessage = translateToastString(message, _)
        const toastTitle = translateToastString(title, _)

        if (dispatchedBrowserNotifications < MAX_NUMBER_OF_BROWSER_NOTIFICATIONS && Notification?.permission === browserNotificationPermissions.GRANTED) {
            dispatchedBrowserNotifications++

            // Close the previous notification when showing a new one
            if (notification?.close) {
                decrementCounter()
                clearTimeout(decrementTimer)
                notification.close()
            }

            notification = new Notification(toastTitle, {
                body: toastMessage,
                icon: '/favicon.png',
                badge: '/favicon.png',
                lang: locale,
                silent: true,
            })

            // After approximately 5 seconds the notification disappears, so lets decrement the counter.
            decrementTimer = setTimeout(() => {
                decrementCounter()
            }, BROWSER_NOTIFICATION_HIDE_TIME)

            notification.onclick = () => {
                window.focus()
                decrementCounter()
                clearTimeout(decrementTimer)

                if (options?.onClick) {
                    options.onClick()
                }
            }

            // Play fart sound :)
            // playFartSound()
        }
    }

    const loadSounds = () => {
        // loadFartSound()
        document.removeEventListener('click', loadSounds)
    }

    useEffect(() => {
        Emitter.on(BROWSER_NOTIFICATIONS_EVENT_KEY, showBrowserNotification)
        document.addEventListener('click', loadSounds)

        return () => {
            Emitter.off(BROWSER_NOTIFICATIONS_EVENT_KEY, showBrowserNotification)
            document.removeEventListener('click', loadSounds)
        }
    }, []) // eslint-disable-line

    return null
}

/**
 *
 * @param {*} message Can be a simple string/component, or an object of { message, title }
 * @param {*} options All available props from https://fkhadra.github.io/react-toastify/api/toast
 * @param {*} type [success, error, warning, info]
 */
export const showToast = (message: ToastMessageType, options: ToastOptionType = {}, type = ERROR) => {
    const toastMessage = message?.message || message
    const toastTitle = message?.title || null

    if (isBrowserTabActive() && dispatchedToasts < MAX_NUMBER_OF_ALL_TOASTS) {
        dispatchedToasts++

        const renderToast = <ToastComponent message={toastMessage as string} title={toastTitle as string} type={type} />

        const onToastClose = (props: any) => {
            if (dispatchedToasts > 0) {
                dispatchedToasts--
            }

            if (options?.onClose) {
                options.onClose(props)
            }
        }

        const toastOptions = { ...options, onClose: onToastClose }

        switch (type) {
            case SUCCESS:
                toast.success(renderToast, toastOptions)
                break
            case WARNING:
                toast.warning(renderToast, toastOptions)
                break
            case INFO:
                toast.info(renderToast, toastOptions)
                break
            default:
                toast.error(renderToast, toastOptions)
        }
    } else if (options?.isNotification) {
        // If it is a notification, try to push it to the browser if borwser notifications are enabled
        // - Emit a an event to be processed in the BrowserNotificationsContainer
        Emitter.emit(
            BROWSER_NOTIFICATIONS_EVENT_KEY,
            {
                message: toastMessage,
                title: toastTitle,
            },
            options
        )
    }
}

export const showErrorToast = (message: ToastMessageType, options = {}) => showToast(message, options, ERROR)
export const showSuccessToast = (message: ToastMessageType, options = {}) => showToast(message, options, SUCCESS)
export const showInfoToast = (message: ToastMessageType, options = {}) => showToast(message, options, INFO)
export const showWarningToast = (message: ToastMessageType, options = {}) => showToast(message, options, WARNING)
