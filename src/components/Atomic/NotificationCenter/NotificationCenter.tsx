import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNotificationCenter } from 'react-toastify/addons/use-notification-center'
import isFunction from 'lodash/isFunction'

import { Props, defaultProps } from './NotificationCenter.types'
import Bell from './components/Bell'
import * as styles from './NotificationCenter.styles'
import { hasEventBlocker } from '../_utils/envets'
import InnerToast from './components/InnerToast/InnerToast'
import Scrollbars from '../Scrollbars'
import FloatingPanel from '../FloatingPanel'

const NotificationCenter: FC<Props> = (props) => {
    const { defaultNotification, i18n, onNotification, readAllNotifications } = { ...defaultProps, ...props }
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    const notificationsCount = useRef<number>(defaultNotification?.length ?? 0)
    const { notifications, markAllAsRead, unreadCount } = useNotificationCenter({
        data: defaultNotification ?? [],
        sort: (l, r) => r.createdAt - l.createdAt,
    })

    const readAll = useCallback(() => {
        isFunction(readAllNotifications) && readAllNotifications()
        markAllAsRead()
    }, [markAllAsRead, readAllNotifications])

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

    useEffect(() => {
        if (notifications && notifications.length !== notificationsCount.current) {
            notificationsCount.current = notifications.length
            isFunction(onNotification) && notifications && onNotification(notifications)
        }
    }, [notifications, onNotification])

    return (
        <FloatingPanel reference={<Bell hasUnRead={unreadCount > 0} notificationsCount={notifications.length} onClick={() => setOpen(!open)} />}>
            <div css={styles.header}>
                <div css={styles.headline}>{i18n.notifications}</div>
                {notifications.length > 0 && (
                    <a
                        css={styles.clearAll}
                        href='#'
                        onClick={(e) => {
                            e.preventDefault()
                            readAll()
                        }}
                    >
                        {i18n.markAllAsRead}
                    </a>
                )}
            </div>
            <AnimatePresence>
                <Scrollbars autoHeight autoHeightMax={400} autoHeightMin={50}>
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
                            {notifications.length === 0 && <div css={styles.noNotifications}>{i18n.noNotifications}</div>}
                            {notifications.length > 0 &&
                                notifications.map((notification: any, i) => <InnerToast borderTop={i !== 0} key={i} notification={notification} />)}
                        </AnimatePresence>
                    </motion.section>
                </Scrollbars>
            </AnimatePresence>
        </FloatingPanel>
    )
}

NotificationCenter.displayName = 'NotificationCenter'
NotificationCenter.defaultProps = defaultProps

export default NotificationCenter
