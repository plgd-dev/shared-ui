import { FC } from 'react'
import { Props } from './Tag.types'
import * as styles from './Tag.styles'
import { Icon } from '../Icon'
import isFunction from 'lodash/isFunction'

const Tag: FC<Props> = (props) => {
    const { children, className, icon, id, onClick } = props
    return (
        <div className={className} css={[styles.tag, isFunction(onClick) && styles.clickable]} id={id} onClick={onClick}>
            {icon && <Icon css={styles.icon} icon={icon} />}
            {children}
        </div>
    )
}

Tag.displayName = 'Tag'

export default Tag
