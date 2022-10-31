import { FC, MouseEvent } from 'react'
import { Props } from './Pagination.types'
import * as styles from './Pagination.styles'
import Icon from '../../../Icon'
import isFunction from 'lodash/isFunction'

const Pagination: FC<Props> = (props) => {
    const { active, onItemClick, pages } = props

    const handleClick = (item: number, e: MouseEvent<HTMLAnchorElement>, disabled = false) => {
        e.preventDefault()
        e.stopPropagation()

        if (!disabled) {
            isFunction(onItemClick) && onItemClick(item)
        }
    }

    return (
        <ul css={styles.pagination}>
            <li>
                <a css={[styles.item, active === 1 && styles.disabled]} href='#' onClick={(e) => handleClick(active - 1, e, active === 1)}>
                    <Icon icon='arrow-left' size={12} />
                </a>
            </li>
            {Array.from(Array(pages + 1).keys()).map((item, key) => {
                if (key === 0) {
                    // skip 0 index
                    return null
                }
                return (
                    <li key={key}>
                        <a css={[styles.item, active === key && styles.active]} href='#' onClick={(e) => handleClick(key, e, active === key)}>
                            {item}
                        </a>
                    </li>
                )
            })}
            <li>
                <a css={[styles.item, active === pages && styles.disabled]} href='#' onClick={(e) => handleClick(active + 1, e, active === pages)}>
                    <Icon icon='arrow-right' size={12} />
                </a>
            </li>
        </ul>
    )
}

Pagination.displayName = 'Pagination'

export default Pagination
