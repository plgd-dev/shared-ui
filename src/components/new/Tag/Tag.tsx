import { FC } from 'react'
import { Props, defaultProps } from './Tag.types'
import * as styles from './Tag.styles'

const Tag: FC<Props> = (props) => {
    const { children, variant } = { ...defaultProps, ...props }
    return <div css={styles.tag(variant)}>{children}</div>
}

Tag.displayName = 'Tag'
Tag.defaultProps = defaultProps

export default Tag
