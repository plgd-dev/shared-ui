import { FC } from 'react'
import { convertSize, IconLoader as IconLoaderC } from '../../Icon'
import { Props, defaultProps } from './IconLoader.types'
import * as styles from './IconLoader.styles'

const defaultSize = 20

const IconLoader: FC<Props> = (props) => {
    const { type, className, ...rest } = { ...defaultProps, ...props }
    return (
        <span className={className} css={styles.loadingIcon(props.size || defaultSize, type)}>
            <IconLoaderC {...rest} {...convertSize(props.size || defaultSize)} ref={undefined} />
        </span>
    )
}

IconLoader.displayName = 'IconLoader'
IconLoader.defaultProps = defaultProps

export default IconLoader
