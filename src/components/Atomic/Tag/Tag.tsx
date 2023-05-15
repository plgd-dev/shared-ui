import { FC } from 'react'
import { defaultProps, Props } from './Tag.types'
import * as styles from './Tag.styles'
import { Icon } from '../Icon'
import isFunction from 'lodash/isFunction'
import { tagVariants } from './constants'

const Tag: FC<Props> = (props) => {
    const { children, className, icon, id, onClick, variant } = { ...defaultProps, ...props }
    return (
        <div
            className={className}
            css={[styles.tag, isFunction(onClick) && styles.clickable, variant === tagVariants.BLUE && styles.blue]}
            id={id}
            onClick={onClick}
        >
            {icon && <Icon css={styles.icon} icon={icon} />}
            {children}
        </div>
    )
}

Tag.displayName = 'Tag'
Tag.defaultProps = defaultProps

export default Tag
