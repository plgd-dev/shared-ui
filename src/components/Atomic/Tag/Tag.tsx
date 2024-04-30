import { cloneElement, forwardRef, ReactElement, ReactNode } from 'react'
import isFunction from 'lodash/isFunction'

import { defaultProps, Props } from './Tag.types'
import * as styles from './Tag.styles'
import { Icon } from '../Icon'
import { tagVariants } from './constants'

const Tag = forwardRef<HTMLDivElement, Props>((props, ref) => {
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
            css={(theme) => [
                styles.tag(theme),
                isFunction(onClick) && styles.clickable,
                variant === tagVariants.BLUE && styles.blue(theme),
                variant === tagVariants.WHITE && styles.white(theme),
            ]}
            id={id}
            onClick={onClick}
            ref={ref}
        >
            {getIcon(icon)}
            {children}
        </div>
    )
})

Tag.displayName = 'Tag'

export default Tag
