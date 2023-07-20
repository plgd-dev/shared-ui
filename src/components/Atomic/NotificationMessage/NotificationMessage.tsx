import { AnimatePresence, motion } from 'framer-motion'
import { FC, useEffect } from 'react'
import { Props, defaultProps } from './NotificationMessage.types'
import * as styles from './NotificationMessage.styles'
import { convertSize, IconInfo } from '../Icon'
import isFunction from 'lodash/isFunction'

const NotificationMessage: FC<Props> = (props) => {
    const { className, collapsed, id, message, onExit, show, timeout, type } = { ...defaultProps, ...props }

    useEffect(() => {
        if (show) {
            setTimeout(() => {
                isFunction(onExit) && onExit()
            }, timeout)
        }
    }, [show, onExit, timeout])

    return (
        <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
            {show && (
                <motion.div
                    animate={{ y: '0', opacity: 1 }}
                    className={className}
                    css={[styles.message, collapsed && styles.collapsed]}
                    exit={{
                        y: '150px',
                        opacity: 0,
                    }}
                    id={id}
                    initial={{
                        y: '150px',
                        opacity: 0,
                    }}
                    onClick={(e: any) => e.stopPropagation()}
                    transition={{
                        duration: 0.3,
                        damping: 25,
                        stiffness: 500,
                    }}
                >
                    <div css={styles.messageInner}>
                        <IconInfo {...convertSize(24)} css={styles.icon(type)} />
                        <span css={styles.type(type)}>{type}</span>
                        <span css={styles.messageText}>{message}</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

NotificationMessage.displayName = 'NotificationMessage'
NotificationMessage.defaultProps = defaultProps

export default NotificationMessage
