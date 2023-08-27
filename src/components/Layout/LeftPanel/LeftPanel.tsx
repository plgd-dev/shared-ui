import React, { cloneElement, FC, ReactElement, SyntheticEvent, useEffect, useState } from 'react'
import { Props, MenuItem, LeftPanelSubItemsType, LeftPanelItemType } from './LeftPanel.types'
import * as styles from './LeftPanel.styles'
import { CSSTransition } from 'react-transition-group'
import { useFloating, shift, offset } from '@floating-ui/react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import isFunction from 'lodash/isFunction'

import { Logo, Close, Arrow, Feature } from './components'

import img from './assets/line.png'
import { convertSize, Icon, IconCollapse } from '../../Atomic/Icon'

const LeftPanelItem = (props: LeftPanelItemType) => {
    const { active, item, collapsed, handleItemClick } = props
    const { x, y, refs, strategy } = useFloating({
        placement: 'bottom-start',
        strategy: 'fixed',
        middleware: [shift(), offset(4)],
    })

    const isItemActive = (item: MenuItem) => item.id === active || item?.children?.some((subItem) => subItem.id === active)
    const isActive = isItemActive(item)

    return (
        <li className='menu-list-item' css={[collapsed && styles.menuListItem]}>
            <a
                css={[styles.item, isActive && styles.activeItem, item.disabled && styles.disabled]}
                data-test-id={item.dataTestId}
                href={item.link}
                id={item.id}
                onClick={(e) => handleItemClick(item, e)}
                ref={refs.setReference}
            >
                <div css={[styles.itemTitle, isActive && styles.itemTitleActive]} data-icon={item.icon}>
                    {typeof item.icon === 'string' ? <Icon icon={item.icon} /> : cloneElement(item.icon as ReactElement, { css: styles.itemTitleIcon })}
                    <span aria-label={item.title} css={styles.itemTitleText}>
                        {item.title}
                    </span>
                    {item.children && (
                        <span css={[styles.arrow, isActive && styles.activeArrow, collapsed && styles.arrowCollapsed]}>
                            <Arrow height={6} width={10} />
                        </span>
                    )}
                </div>
            </a>
            {item.children && (
                <LeftPanelSubItems
                    active={active}
                    collapsed={collapsed}
                    floating={refs.setFloating}
                    handleItemClick={handleItemClick}
                    isActive={isActive}
                    item={item}
                    strategy={strategy}
                    x={x}
                    y={y}
                />
            )}
        </li>
    )
}

const LeftPanelSubItems = (props: LeftPanelSubItemsType) => {
    const { active, item, isActive, collapsed, floating, strategy, x, y, handleItemClick } = props

    if (collapsed) {
        if (isActive) {
            return (
                <div
                    css={styles.subItemsFloating}
                    ref={floating}
                    style={{
                        position: strategy,
                        top: y ?? 0,
                        left: x ?? 0,
                        width: 'max-content',
                    }}
                >
                    <div css={styles.subItemsFloatingPadding}>
                        <ul css={[styles.subItemsCollapsedList]}>
                            {item.children?.map((subItem, key) => (
                                <li key={key}>
                                    <a
                                        css={[
                                            styles.subItemLink,
                                            subItem.id === active && styles.subItemLinkActive,
                                            (item.children?.length || 0) - 1 === key && styles.subItemLinkLast,
                                        ]}
                                        href='#'
                                        onClick={(e) => handleItemClick(item, e)}
                                    >
                                        <img alt='line' css={styles.line} src={img} />
                                        {subItem.title}
                                        {subItem.tag && <span css={styles.tag(subItem.tag.variant)}>{subItem.tag.text}</span>}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )
        } else {
            return null
        }
    } else {
        return (
            <CSSTransition appear={true} classNames='item' in={isActive} key={item.id} timeout={0}>
                <div css={styles.subItems}>
                    <ul css={[styles.subItemsList]}>
                        {item.children?.map((item, key) => (
                            <li key={key}>
                                <a css={[styles.subItemLink, item.id === active && styles.subItemLinkActive]} href='#'>
                                    <img alt='line' css={styles.line} src={img} />
                                    {item.title}
                                    {item.tag && <span css={styles.tag(item.tag.variant)}>{item.tag.text}</span>}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </CSSTransition>
        )
    }
}

const LeftPanel: FC<Props> = (props) => {
    const { className, collapsed, id, menu, newFeature, versionMark, onItemClick, setCollapsed } = props
    const [active, setActive] = useState<string | null>(props.activeId || null)
    const [showFeature, setShowFeature] = useState(!!newFeature)
    const [domReady, setDomReady] = useState(false)

    useEffect(() => {
        setDomReady(true)
    }, [])

    const handleItemClick = (item: MenuItem, e: SyntheticEvent) => {
        if (item.disabled) {
            e.preventDefault()
            e.stopPropagation()
        }

        if (item.children) {
            e.preventDefault()
            e.stopPropagation()

            !item.disabled && setActive(active === item.id ? null : item.id)
        } else {
            !item.disabled && isFunction(onItemClick) && onItemClick(item, e)
        }
    }

    useEffect(() => {
        props.activeId && setActive(props.activeId)
    }, [props.activeId])

    return (
        <div className={className} css={[styles.leftPanel, collapsed && styles.collapsed]} id={id}>
            {domReady &&
                createPortal(
                    <a
                        css={styles.collapseToggle}
                        href='#'
                        onClick={(e) => {
                            e.preventDefault()
                            isFunction(setCollapsed) && setCollapsed(!collapsed)
                        }}
                    >
                        <IconCollapse {...convertSize(24)} />
                    </a>,
                    document.getElementById('header-icon-collapse-portal-target') as Element
                )}
            <div css={[styles.logo, collapsed && styles.logoCollapsed]}>
                <Logo css={[styles.logoSvg, collapsed && styles.logoSvgCollapsed]} height={32} width={147} />
            </div>
            <div css={[styles.menu, collapsed && styles.menuCollapsed]}>
                <ul css={styles.menuList}>
                    {menu?.map((group, key) => (
                        <li className='menu-list-group' css={styles.group} key={key}>
                            <div css={[styles.groupTitle, collapsed && styles.groupTitleCollapsed]}>{group.title}</div>
                            <ul css={styles.menuList}>
                                {group.items?.map((item, key) => (
                                    <LeftPanelItem active={active} collapsed={collapsed} handleItemClick={handleItemClick} item={item} key={key} />
                                ))}
                            </ul>
                        </li>
                    ))}
                    {!collapsed && newFeature && (
                        <AnimatePresence>
                            {showFeature && (
                                <motion.li
                                    layout
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    css={styles.newFeature}
                                    exit={{
                                        scale: 0,
                                        opacity: 0,
                                        transition: { duration: 0.2 },
                                    }}
                                    initial={false}
                                    onClick={newFeature.onClick}
                                >
                                    <div css={styles.header}>
                                        <div css={styles.headerLeft}>
                                            <div css={styles.headline}>{newFeature.i18n.headline}</div>
                                            <div css={styles.description}>{newFeature.i18n.description}</div>
                                        </div>
                                        <div css={styles.headerRight}>
                                            <Close
                                                css={styles.iconClose}
                                                height={20}
                                                onClick={(e: SyntheticEvent) => {
                                                    e.preventDefault()
                                                    e.stopPropagation()
                                                    setShowFeature(false)
                                                    newFeature.onClose()
                                                }}
                                                width={20}
                                            />
                                        </div>
                                    </div>
                                    <Feature height={120} width={200} />
                                </motion.li>
                            )}
                        </AnimatePresence>
                    )}
                </ul>
                {versionMark && (
                    <div css={[styles.versionItem, collapsed && styles.versionCollapsed]}>
                        <div css={styles.versionItemInner}>{versionMark}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

LeftPanel.displayName = 'LeftPanel'

export default LeftPanel
