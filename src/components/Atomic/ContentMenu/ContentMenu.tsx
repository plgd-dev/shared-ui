import React, { cloneElement, FC, ReactElement } from 'react'
import { CSSTransition } from 'react-transition-group'
import isFunction from 'lodash/isFunction'

import * as styles from './ContentMenu.styles'
import { Props } from './ContentMenu.types'
import { Icon } from '../Icon'
import { Arrow } from '../../Layout/LeftPanel/components'
import img from '../../Layout/LeftPanel/assets/line.png'

const ContentMenu: FC<Props> = (props) => {
    const { activeItem, className, handleItemClick, handleSubItemClick, id, menu, title } = props
    return (
        <div className={className} css={styles.contentMenu} id={id}>
            <div css={styles.title}>{title}</div>
            <ul css={styles.menuList}>
                {menu.map((item, key) => {
                    const isItemActive = item.id === activeItem || item?.children?.some((subItem) => subItem.id === activeItem)
                    return (
                        <li key={key}>
                            <a
                                css={[styles.item, isItemActive && styles.activeItem]}
                                href='#'
                                onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    handleItemClick(item, e)
                                }}
                            >
                                {typeof item.icon === 'string' ? (
                                    <Icon icon={item.icon} />
                                ) : (
                                    cloneElement(item.icon as ReactElement, {
                                        css: [styles.itemTitleIcon],
                                        className: 'icon',
                                    })
                                )}
                                <span aria-label={item.title} css={styles.itemTitleText}>
                                    {item.title}
                                </span>
                                {item.children && (
                                    <span css={[styles.arrow, isItemActive && styles.activeArrow]}>
                                        <Arrow height={6} width={10} />
                                    </span>
                                )}
                            </a>
                            {item.children && isItemActive && (
                                <CSSTransition appear={true} classNames='item' in={isItemActive} key={item.id} timeout={0}>
                                    <div css={styles.subItems}>
                                        <ul css={styles.subItemsList}>
                                            {item.children?.map((subItem, key) => (
                                                <li key={key}>
                                                    <a
                                                        css={[styles.subItemLink, subItem.id === activeItem && styles.subItemLinkActive]}
                                                        href='#'
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            e.stopPropagation()
                                                            handleSubItemClick &&
                                                                isFunction(handleSubItemClick(subItem, item, e)) &&
                                                                handleSubItemClick(subItem, item, e)
                                                        }}
                                                    >
                                                        <img alt='line' css={styles.line} src={img} />
                                                        {subItem.title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CSSTransition>
                            )}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

ContentMenu.displayName = 'ContentMenu'

export default ContentMenu
