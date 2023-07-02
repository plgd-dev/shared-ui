import { FC } from 'react'
import { defaultProps, Props, VersionMarkSeverityType } from './VersionMark.types'
import * as styles from './VersionMark.styles'
import { severities } from './constants'
import { convertSize, IconCloudError, IconCloudSuccess, IconCloudWarning } from '../Icon'

const VersionMark: FC<Props> = (props) => {
    const { collapsed, severity, update, versionText, className, id } = { ...defaultProps, ...props }

    const getIcon = (severity: VersionMarkSeverityType) => {
        switch (severity) {
            case severities.SUCCESS:
                return <IconCloudSuccess {...convertSize(24)} />
            case severities.WARNING:
                return <IconCloudWarning {...convertSize(24)} />
            case severities.ERROR:
                return <IconCloudError {...convertSize(24)} />
        }
    }

    return (
        <div className={className} css={styles.versionMark} id={id}>
            <div css={styles.left}>{getIcon(severity)}</div>
            {!collapsed && (
                <div css={styles.right}>
                    <span css={styles.versionText}>{versionText}</span>
                    {update && (
                        <span css={styles.updateText} onClick={update.onClick}>
                            {update.text}
                        </span>
                    )}
                </div>
            )}
        </div>
    )
}

VersionMark.displayName = 'VersionMark'
VersionMark.defaultProps = defaultProps

export default VersionMark
