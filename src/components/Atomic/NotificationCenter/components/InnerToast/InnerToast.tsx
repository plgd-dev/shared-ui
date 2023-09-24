import { motion } from 'framer-motion'
import { useIntl } from 'react-intl'

import { Props } from './InnerToast.types'
import { toastTypes, translateToastString } from '../../../Notification'
import * as styles from './InnerToast.styles'
import { ToastTypesType } from '../../../Notification/Toast.types'
import { convertSize, IconSuccess, IconInfo, IconError } from '../../../Icon'

const getIcon = (type: ToastTypesType) => {
    switch (type) {
        case toastTypes.info:
            return (
                <div css={(theme) => [styles.iconOverlay, styles.colorInfoBg(theme)]}>
                    <IconInfo {...convertSize(24)} css={styles.colorInfo} />
                </div>
            )
        case toastTypes.success:
            return (
                <div css={(theme) => [styles.iconOverlay, styles.colorSuccessBg(theme)]}>
                    <IconSuccess {...convertSize(24)} css={styles.colorSuccess} />
                </div>
            )
        case toastTypes.warning:
            return (
                <div css={(theme) => [styles.iconOverlay, styles.colorWarningBg(theme)]}>
                    <IconError {...convertSize(24)} css={styles.colorWarning} />
                </div>
            )
        case toastTypes.error:
            return (
                <div css={(theme) => [styles.iconOverlay, styles.colorErrorBg(theme)]}>
                    <IconError {...convertSize(24)} css={styles.colorError} />
                </div>
            )
    }
}

const InnerToast = (props: Props) => {
    const { notification, borderTop } = props
    const { formatMessage: _ } = useIntl()

    if (!notification.data?.message) {
        return null
    }

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
                css={[styles.item, borderTop && styles.borderTop]}
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
                <div css={styles.iconWrapper}>
                    {!notification.read && <div css={styles.unreadMark}></div>}
                    {getIcon(notification.type)}
                </div>
                <div css={styles.contentWrapper}>
                    <h5 css={styles.headline}>{toastTitle}</h5>
                    <div css={styles.description}>{toastMessage}</div>
                </div>
            </motion.article>
        </motion.div>
    )
}

InnerToast.displayName = 'InnerToast'

export default InnerToast
