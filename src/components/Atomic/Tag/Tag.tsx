import { cloneElement, FC, ReactElement, ReactNode } from 'react'
import { defaultProps, Props } from './Tag.types'
import * as styles from './Tag.styles'
import { Icon } from '../Icon'
import isFunction from 'lodash/isFunction'
import { tagVariants } from './constants'

const Tag: FC<Props> = (props) => {
    const { children, className, icon, id, onClick, variant } = { ...defaultProps, ...props }
    const getIcon = (icon?: ReactNode) => {
        if (icon) {
            return typeof icon === 'string' ? <Icon css={styles.icon} icon={icon} /> : cloneElement(icon as ReactElement, { css: styles.icon })
        }

        return null
    }
    return (
        <div
            className={className}
            css={[
                styles.tag,
                isFunction(onClick) && styles.clickable,
                variant === tagVariants.BLUE && styles.blue,
                variant === tagVariants.WHITE && styles.white,
            ]}
            id={id}
            onClick={onClick}
        >
            {getIcon(icon)}
            {children}
        </div>
    )
}

Tag.displayName = 'Tag'
Tag.defaultProps = defaultProps

export default Tag