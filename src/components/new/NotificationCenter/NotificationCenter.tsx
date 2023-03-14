import { FC, useState } from 'react'
import { NotificationCenterItemType, Props } from "./NotificationCenter.types";
import Bell from './components/Bell'
import { offset, shift, useFloating } from '@floating-ui/react'
import * as styles from './NotificationCenter.styles'
import { FloatingPortal } from '@floating-ui/react-dom-interactions'
import { motion, AnimatePresence } from 'framer-motion'
import { NotificationCenterItem, useNotificationCenter } from 'react-toastify/addons/use-notification-center'

const NotificationCenter: FC<Props> = () => {
    const [open, setOpen] = useState(false)
    const { x, y, reference, floating, strategy, context } = useFloating({
        placement: 'bottom-end',
        strategy: 'fixed',
        middleware: [shift(), offset(4)],
    })
    const { notifications, clear, markAllAsRead, markAsRead, remove, unreadCount } = useNotificationCenter()
    console.log(notifications)
    return (
        <div>
            <Bell onClick={() => setOpen(!open)} hasUnRead={true} innerRef={reference} />
            <FloatingPortal>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            className='tooltip-bubble'
                            exit={{ opacity: 0, y: 0 }}
                            initial={{ opacity: 0, scale: 0.85, y: -100 }}
                            css={styles.floatingPanel}
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
                            <div css={styles.header}>
                                <div css={styles.headline}>Notifications</div>
                                <a href='#' css={styles.clearAll}>
                                    mark all as read
                                </a>
                            </div>
                            <AnimatePresence>
                                <motion.section
                                    css={styles.content}
                                    variants={{
                                        open: {
                                            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                                        },
                                        closed: {
                                            transition: { staggerChildren: 0.05, staggerDirection: -1 },
                                        },
                                    }}
                                    animate={open ? 'open' : 'closed'}
                                >
                                    <AnimatePresence>
                                        {notifications.map((notification: any) => (
                                            <motion.div
                                                key={notification.id}
                                                layout
                                                initial={{ scale: 0.4, opacity: 0, y: 50 }}
                                                exit={{
                                                    scale: 0,
                                                    opacity: 0,
                                                    transition: { duration: 0.2 },
                                                }}
                                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                            >
                                                <motion.article
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
                                                    css={styles.item}
                                                >
                                                    {notification.data?.text}
                                                </motion.article>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </motion.section>
                            </AnimatePresence>
                        </motion.div>
                    )}
                </AnimatePresence>
            </FloatingPortal>
        </div>
    )
}

NotificationCenter.displayName = 'NotificationCenter'

export default NotificationCenter
