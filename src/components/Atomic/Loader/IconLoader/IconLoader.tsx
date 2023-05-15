import { FC } from 'react'
import Icon from '../../Icon'
import { Props, defaultProps } from './IconLoader.types'
import * as styles from './IconLoader.styles'

const defaultSize = 20

const IconLoader: FC<Props> = (props) => {
    const { type, className, ...rest } = { ...defaultProps, ...props }
    return (
        <span className={className} css={styles.loadingIcon(props.size || defaultSize, type)}>
            <Icon {...rest} icon='loader' ref={undefined} size={props.size || defaultSize} />
        </span>
    )
}

IconLoader.displayName = 'IconLoader'
IconLoader.defaultProps = defaultProps

export default IconLoader
