import { FC } from 'react'

import { Props, AlertSeverityType } from './Alert.types'
import { severities } from '../VersionMark/constants'
import { convertSize, IconSuccess, IconWarning, IconError } from '../Icon'
import IconInfo from '../Icon/components/IconInfo'
import * as styles from './Alert.styles'

const Alert: FC<Props> = (props) => {
    const { severity, children } = props

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
        <div
            css={[
                styles.alert,
                severity === severities.SUCCESS && styles.success,
                severity === severities.WARNING && styles.warning,
                severity === severities.ERROR && styles.error,
            ]}
        >
            <span css={styles.icon}>{getIcon(severity)}</span>
            <span css={styles.label}>{children}</span>
        </div>
    )
}

Alert.displayName = 'Alert'

export default Alert
