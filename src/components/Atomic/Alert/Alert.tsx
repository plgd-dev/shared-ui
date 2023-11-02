import { FC, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { Props, AlertSeverityType } from './Alert.types'
import { severities } from '../VersionMark/constants'
import { convertSize, IconSuccess, IconWarning, IconError } from '../Icon'
import IconInfo from '../Icon/components/IconInfo'
import * as styles from './Alert.styles'
import IconClose from '../Icon/components/IconClose'

const Alert: FC<Props> = (props) => {
    const { children, className, dataTestId, severity } = props
    const [visible, setVisible] = useState(true)

    const getIcon = (severity?: AlertSeverityType) => {
        switch (severity) {
            case severities.SUCCESS:
                return <IconSuccess {...convertSize(24)} />
            case severities.WARNING:
                return <IconWarning {...convertSize(24)} />
            case severities.ERROR:
                return <IconError {...convertSize(24)} />
            default:
                return <IconInfo {...convertSize(24)} />
        }
    }

    return (
        <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
            {visible && (
                <motion.div
                    animate={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            ease: 'easeOut',
                            duration: 0.15,
                        },
                    }}
                    className={className}
                    css={[
                        styles.alert,
                        severity === severities.SUCCESS && styles.success,
                        severity === severities.WARNING && styles.warning,
                        severity === severities.ERROR && styles.error,
                    ]}
                    data-test-id={dataTestId}
                    exit={{
                        opacity: 0,
                        scale: 0.75,
                        transition: {
                            ease: 'easeIn',
                            duration: 0.15,
                        },
                    }}
                    initial={{
                        opacity: 0,
                        scale: 0.75,
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <span
                        css={[
                            styles.icon,
                            severity === severities.SUCCESS && styles.iconSuccess,
                            severity === severities.WARNING && styles.iconWarning,
                            severity === severities.ERROR && styles.iconError,
                        ]}
                    >
                        {getIcon(severity)}
                    </span>
                    <span css={styles.label}>{children}</span>
                    <IconClose {...convertSize(20)} css={styles.iconClose} onClick={() => setVisible(false)} />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

Alert.displayName = 'Alert'

export default Alert
