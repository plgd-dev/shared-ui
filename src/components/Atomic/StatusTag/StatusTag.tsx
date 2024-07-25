import { FC } from 'react'
import { Props, defaultProps } from './StatusTag.types'
import * as styles from './StatusTag.styles'
import { tagSizes } from './constants'

const StatusTag: FC<Props> = (props) => {
    const { children, lowercase, onClick, size, variant } = { ...defaultProps, ...props }
    return (
        <div css={(theme) => [styles.tag(theme, variant), lowercase && styles.lowercase, size === tagSizes.MEDIUM && styles.mediumSize]} onClick={onClick}>
            {children}
        </div>
    )
}

StatusTag.displayName = 'StatusTag'

export default StatusTag
