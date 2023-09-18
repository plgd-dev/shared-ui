import { FC, Fragment, MouseEvent } from 'react'
import { BreadcrumbItem, Props } from './Breadcrumbs.types'
import * as styles from './Breadcrumbs.styles'
import isFunction from 'lodash/isFunction'

export const Breadcrumbs: FC<Props> = (props) => {
    const { className, id, items, onItemClick } = props

    const renderItem = (item: BreadcrumbItem, isLast = false) => {
        const handleClick = (item: BreadcrumbItem, e: MouseEvent<HTMLAnchorElement>) => {
            isFunction(onItemClick) && onItemClick(item, e)
        }

        if (!isLast) {
            return (
                <a css={(theme) => [styles.item, styles.link(theme)]} href={item?.link || '#'} onClick={(e) => handleClick(item, e)}>
                    {item.label}
                </a>
            )
        }

        return <span css={styles.item}>{item.label}</span>
    }

    return (
        <ul className={className} css={styles.breadcrumbs} id={id}>
            {items.map((item, key) => {
                const isLast = key === items.length - 1
                return (
                    <Fragment key={key}>
                        <li>{renderItem(item, isLast)}</li>
                        {!isLast ? <li css={styles.divider}>{'/'}</li> : null}
                    </Fragment>
                )
            })}
        </ul>
    )
}

Breadcrumbs.displayName = 'Breadcrumbs'

export default Breadcrumbs
