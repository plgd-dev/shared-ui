import { FC, useEffect, useRef, useState } from 'react'
import { useIntl } from 'react-intl'
import { offset, shift, useFloating } from '@floating-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FloatingPortal } from '@floating-ui/react-dom-interactions'
import { NotificationCenterItem, useNotificationCenter } from 'react-toastify/addons/use-notification-center'

import { NotificationCenterItemType, Props } from './NotificationCenter.types'
import Bell from './components/Bell'
import * as styles from './NotificationCenter.styles'
import { translateToastString } from '../Notification'
import { hasEventBlocker } from '../_utils/envets'

const InnerToast = (props: any) => {
    const { notification } = props
    const { formatMessage: _ } = useIntl()

    const toastTitle = translateToastString(notification.data.message.title, _)
    const toastMessage = translateToastString(notification.data.message.message, _)

    return (
        <motion.div
            layout
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{
                scale: 0,
                opacity: 0,
                transition: { duration: 0.2 },
            }}
            initial={{ scale: 0.4, opacity: 0, y: 50 }}
            key={notification.id}
        >
            <motion.article
                css={styles.item}
                variants={{
                    open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            y: { stiffness: 1000, velocity: -100 },
                        },
                    },
                    closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                            y: { stiffness: 1000 },
                        },
                    },
                }}
            >
                <div>
                    <h5>{toastTitle}</h5>
                    <br />
                    {toastMessage}
                </div>
            </motion.article>
        </motion.div>
    )
}

const NotificationCenter: FC<Props> = () => {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)
    const { x, y, reference, floating, strategy, context } = useFloating({
        placement: 'bottom-end',
        strategy: 'fixed',
        middleware: [shift(), offset(4)],
    })
    const { notifications, clear, markAllAsRead, markAsRead, remove, unreadCount } = useNotificationCenter()

    // console.log({ notifications })

    useEffect(() => {
        function handleClickOutside(event: any) {
            // @ts-ignore
            if (ref?.current && !ref?.current?.contains(event.target) && !hasEventBlocker(event, 'data-block-outside-click')) {
                setOpen(false)
            }
        }
        if (open) {
            document.addEventListener('mousedown', handleClickOutside)
            return () => {
                document.removeEventListener('mousedown', handleClickOutside)
            }
        }
    }, [ref, open])

    return (
        <div>
            <Bell hasUnRead={notifications.length > 0} innerRef={reference} notificationsCount={notifications.length} onClick={() => setOpen(!open)} />
            <FloatingPortal>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            css={styles.floatingPanel}
                            exit={{ opacity: 0, y: 0 }}
                            initial={{ opacity: 0, scale: 0.85, y: -100 }}
                            ref={floating}
                            style={{
                                position: strategy,
                                top: y ?? 0,
                                left: x ?? 0,
                                width: 'max-content',
                            }}
                            transition={
                                // When in "grouped phase", make the transition faster
                                // The open delay becomes 1ms during this phase.
                                { type: 'spring', damping: 20, stiffness: 300 }
                            }
                        >
                            <div ref={ref}>
                                <div css={styles.header}>
                                    <div css={styles.headline}>Notifications</div>
                                    <a css={styles.clearAll} href='src/components/atomic/NotificationCenter/index#'>
                                        mark all as read
                                    </a>
                                </div>
                                <AnimatePresence>
                                    <motion.section
                                        animate={open ? 'open' : 'closed'}
                                        css={styles.content}
                                        variants={{
                                            open: {
                                                transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                                            },
                                            closed: {
                                                transition: { staggerChildren: 0.05, staggerDirection: -1 },
                                            },
                                        }}
                                    >
                                        <AnimatePresence>
                                            {notifications.length === 0 && <div>No notifications</div>}
                                            {notifications.length > 0 &&
                                                notifications.map((notification: any, i) => <InnerToast key={i} notification={notification} />)}
                                        </AnimatePresence>
                                    </motion.section>
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </FloatingPortal>
        </div>
    )
}

NotificationCenter.displayName = 'NotificationCenter'

export default NotificationCenter
