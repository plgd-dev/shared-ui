import { FC } from 'react'
import { convertSize, IconLoader as IconLoaderC } from '../../Icon'
import { Props, defaultProps } from './IconLoader.types'
import * as styles from './IconLoader.styles'
import ConditionalWrapper from '../../ConditionalWrapper'

const defaultSize = 20

const IconLoader: FC<Props> = (props) => {
    const { type, center, className, ...rest } = { ...defaultProps, ...props }
    return (
        <ConditionalWrapper condition={center} wrapper={(c) => <div css={styles.center}>{c}</div>}>
            <span className={className} css={styles.loadingIcon(props.size || defaultSize, type)}>
                <IconLoaderC {...rest} {...convertSize(props.size || defaultSize)} ref={undefined} />
            </span>
        </ConditionalWrapper>
    )
}

IconLoader.displayName = 'IconLoader'

export default IconLoader
