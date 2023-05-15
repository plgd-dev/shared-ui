import { FC } from 'react'
import { defaultProps, Props } from './VersionMark.types'
import * as styles from './VersionMark.styles'
import { severities } from './constants'
import Icon from '../Icon'

const VersionMark: FC<Props> = (props) => {
    const { collapsed, severity, update, versionText, className, id } = { ...defaultProps, ...props }

    const icon = {
        [severities.SUCCESS]: 'cloud-success',
        [severities.WARNING]: 'cloud-warning',
        [severities.ERROR]: 'cloud-error',
    }[severity]

    return (
        <div className={className} css={styles.versionMark} id={id}>
            <div css={styles.left}>
                <Icon icon={icon} size={24} />
            </div>
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
