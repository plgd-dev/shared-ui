import { FC } from 'react'
import { Props, defaultProps } from './StatusTag.types'
import * as styles from './StatusTag.styles'

const StatusTag: FC<Props> = (props) => {
    const { children, onClick, variant } = { ...defaultProps, ...props }
    return (
        <div css={(theme) => styles.tag(theme, variant)} onClick={onClick}>
            {children}
        </div>
    )
}

StatusTag.displayName = 'StatusTag'
StatusTag.defaultProps = defaultProps

export default StatusTag
