import React, { cloneElement, FC, ReactElement, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import isFunction from 'lodash/isFunction'

import * as styles from './ContentMenu.styles'
import { ItemType, Props } from './ContentMenu.types'
import { Icon } from '../Icon'
import { Arrow } from '../../Layout/LeftPanel/components'
import img from '../../Layout/LeftPanel/assets/line.png'
import IconSearch from '../Icon/components/IconSearch'
import { statuses } from '../Tabs/constants'
import IconCheck from '../Icon/components/IconCheck'
import IconWarningCircle from '../Icon/components/IconWarningCircle'

const ContentMenu: FC<Props> = (props) => {
    const { activeItem, className, handleItemClick, handleSubItemClick, id, menu: menuProp, menuSearch, title } = props

    const [search, setSearch] = useState('')
    const [menu, setMenu] = useState(menuProp)

    const getIcon = (item: ItemType) => {
        if (!item.icon) {
            return null
        }

        if (typeof item.icon === 'string') {
            return <Icon icon={item.icon} />
        } else {
            return cloneElement(item.icon as ReactElement, {
                css: [styles.itemTitleIcon],
                className: 'icon',
            })
        }
    }

    useEffect(() => {
        setMenu(menuProp.filter((item) => item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())))
    }, [search, menuProp])

    return (
        <div className={className} css={styles.contentMenu} id={id}>
            {title && <div css={styles.title}>{title}</div>}
            {menuSearch && (
                <div css={styles.searchWrapper}>
                    <span css={styles.searchIcon}>
                        <IconSearch />
                    </span>
                    <input css={styles.search} onChange={(e) => setSearch(e.target.value)} role='search' type='search' value={search} />
                </div>
            )}
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
                                    handleItemClick(item, e)
                                }}
                            >
                                {getIcon(item)}
                                <span aria-label={item.title} css={[styles.itemTitleText, !item.icon && styles.titleNoMargin]}>
                                    {item.title}
                                    {item.status === statuses.SUCCESS && <IconCheck css={[styles.icon, styles.iconSuccess]} />}
                                    {item.status === statuses.ERROR && <IconWarningCircle css={[styles.icon, styles.iconError]} />}
                                </span>
                                {item.children && (
                                    <span css={[styles.arrow, isItemActive && styles.activeArrow]}>
                                        <Arrow height={6} width={10} />
                                    </span>
                                )}
                            </a>
                            <AnimatePresence initial={false}>
                                {item.children && isItemActive && (
                                    <motion.section
                                        animate='open'
                                        css={styles.subItems}
                                        exit='collapsed'
                                        initial='collapsed'
                                        key='content'
                                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        variants={{
                                            open: { opacity: 1, height: 'auto' },
                                            collapsed: { opacity: 0, height: 0 },
                                        }}
                                    >
                                        <ul css={styles.subItemsList}>
                                            {item.children?.map((subItem, key) => (
                                                <li key={key}>
                                                    <a
                                                        css={[styles.subItemLink, subItem.id === activeItem && styles.subItemLinkActive]}
                                                        href='#'
                                                        onClick={(e) => {
                                                            e.preventDefault()
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
                                    </motion.section>
                                )}
                            </AnimatePresence>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

ContentMenu.displayName = 'ContentMenu'

export default ContentMenu
