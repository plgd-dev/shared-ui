import { FC } from 'react'
import { Props } from './VersionMark.types'
import * as styles from './VersionMark.styles'
import { severities } from './constants'
import Icon from '../Icon'

const VersionMark: FC<Props> = (props) => {
    const { severity, update, versionText } = props

    const icon = {
        [severities.SUCCESS]: 'cloud-success',
        [severities.WARNING]: 'cloud-warning',
        [severities.ERROR]: 'cloud-error',
    }[severity]

    return (
        <div css={styles.versionMark}>
            <Icon icon={icon} size={24} />
            <span css={styles.versionText}>{versionText}</span>
            {update && (
                <span css={styles.updateText} onClick={update.onClick}>
                    {update.text}
                </span>
            )}
        </div>
    )
}

VersionMark.displayName = 'VersionMark'

export default VersionMark
