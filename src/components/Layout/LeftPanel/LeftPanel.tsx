import React, { cloneElement, FC, ReactElement, SyntheticEvent, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useFloating, shift, offset } from '@floating-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import isFunction from 'lodash/isFunction'

import { Props, MenuItem, LeftPanelSubItemsType, LeftPanelItemType, SubMenuItem, defaultProps, MenuGroup } from './LeftPanel.types'
import * as styles from './LeftPanel.styles'
import { Close, Arrow, Feature } from './components'
import img from './assets/line.png'
import { convertSize, Icon, IconCollapse } from '../../Atomic/Icon'
import { COLLAPSE_ANIMATION_TIME } from '../constants'
import { tagVariants } from './constants'
import { useClickOutside } from '../../../common/hooks'

const isGroupVisible = (group: any) => !group.items.every((i: any) => i.visibility === false)

function findActiveItem(menu: MenuGroup[], activeId: string): MenuItem | null {
    for (const group of menu) {
        for (const item of group.items || []) {
            if (item.children) {
                for (const subitem of item.children) {
                    if (subitem.id === activeId) {
                        return item
                    }
                }
            }
        }
    }
    return null
}

const LeftPanelItem = (props: LeftPanelItemType) => {
    const { active, animationDone, item, collapsed, handleItemClick, toggleActive, setToggleActive } = props
    const { x, y, refs, strategy } = useFloating({
        placement: 'bottom-start',
        strategy: 'fixed',
        middleware: [shift(), offset(4)],
    })

    const isItemActive = (item: MenuItem) => item.id === active || item?.children?.some((subItem) => subItem.id === active)
    const isActive = isItemActive(item) || item.id === toggleActive
    const isDisabled = item?.visibility === 'disabled'
    const isExternal = item.link?.startsWith('//') || item.link?.startsWith('http')

    return (
        <li className='menu-list-item' css={[collapsed && styles.menuListItem]}>
            <a
                css={[styles.item, isActive && styles.activeItem, isDisabled && styles.disabled]}
                data-test-id={item.dataTestId}
                href={isDisabled ? undefined : item.link}
                id={item.id}
                onClick={isExternal || isDisabled ? undefined : (e) => handleItemClick(item, e)}
                ref={refs.setReference}
                rel={isExternal ? 'noreferrer' : undefined}
                target={isExternal ? '_blank' : undefined}
            >
                <span css={[styles.itemTitle, isActive && styles.itemTitleActive]} data-icon={item.icon}>
                    {typeof item.icon === 'string' ? <Icon icon={item.icon} /> : cloneElement(item.icon as ReactElement, { css: styles.itemTitleIcon })}
                    <span aria-label={item.title} css={styles.itemTitleText}>
                        {item.title}
                    </span>
                    {item.children && !isDisabled && (
                        <span css={[styles.arrow, item.id === toggleActive && styles.activeArrow, collapsed && styles.arrowCollapsed]}>
                            <Arrow height={6} width={10} />
                        </span>
                    )}
                </span>
            </a>

            {item.children && (
                <LeftPanelSubItems
                    active={active}
                    animationDone={animationDone}
                    collapsed={collapsed}
                    floating={refs.setFloating}
                    handleItemClick={handleItemClick}
                    isActive={isActive}
                    item={item}
                    setToggleActive={setToggleActive}
                    strategy={strategy}
                    toggleActive={toggleActive}
                    x={x}
                    y={y}
                />
            )}
        </li>
    )
}

const LeftPanelSubItems = (props: LeftPanelSubItemsType) => {
    const { active, animationDone, item, isActive, collapsed, floating, strategy, x, y, handleItemClick, setToggleActive, toggleActive } = props
    const innerFloatingRef = useRef(null)

    useClickOutside(innerFloatingRef, () => {
        if (collapsed && isActive && animationDone) {
            setToggleActive(null)
        }
    })

    if (collapsed) {
        if (toggleActive === item.id && animationDone) {
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
                    <div css={styles.subItemsFloatingPadding} ref={innerFloatingRef}>
                        <ul css={[styles.subItemsCollapsedList]}>
                            {item.children?.map((subItem, key) => (
                                <li key={key}>
                                    <a
                                        css={[
                                            styles.subItemLink,
                                            subItem.id === active && styles.subItemLinkActive,
                                            (item.children?.length || 0) - 1 === key && styles.subItemLinkLast,
                                        ]}
                                        data-test-id={subItem.dataTestId}
                                        href={`${item.link}${subItem.link}`}
                                        onClick={
                                            subItem.disabled
                                                ? undefined
                                                : (e) =>
                                                      handleItemClick(
                                                          {
                                                              ...subItem,
                                                              link: `${item.link}${subItem.link}`,
                                                          },
                                                          e
                                                      )
                                        }
                                    >
                                        <img alt='line' css={styles.line} src={img} />
                                        {subItem.title}
                                        {subItem.tag && (
                                            <span css={(theme) => styles.tag(subItem?.tag?.variant || tagVariants.INFO, theme)}>{subItem.tag.text}</span>
                                        )}
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
            <AnimatePresence initial={false}>
                {toggleActive === item.id ? (
                    <motion.div
                        animate='open'
                        css={styles.subItems}
                        exit='collapsed'
                        initial='collapsed'
                        key='content'
                        transition={{ duration: 0.3 }}
                        variants={{
                            open: { opacity: 1, height: 'auto' },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                    >
                        <ul css={[styles.subItemsList]}>
                            {item.children?.map((subItem, key) => (
                                <li key={key}>
                                    <a
                                        css={[styles.subItemLink, subItem.id === active && styles.subItemLinkActive, subItem.disabled && styles.disabled]}
                                        data-test-id={subItem.dataTestId}
                                        href={`${item.link}${subItem.link}`}
                                        onClick={
                                            subItem.disabled
                                                ? undefined
                                                : (e) =>
                                                      handleItemClick(
                                                          {
                                                              ...subItem,
                                                              link: `${item.link}${subItem.link}`,
                                                          },
                                                          e
                                                      )
                                        }
                                    >
                                        <img alt='line' css={styles.line} src={img} />
                                        {subItem.title}
                                        {subItem.tag && (
                                            <span css={(theme) => styles.tag(subItem?.tag?.variant || tagVariants.INFO, theme)}>{subItem.tag.text}</span>
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        )
    }
}

const LeftPanel: FC<Props> = (props) => {
    const { className, collapsed, id, logo, menu, newFeature, versionMark, onItemClick, setCollapsed, headerIconCollapsePortalTargetId } = {
        ...defaultProps,
        ...props,
    }
    const [active, setActive] = useState<string | null>(props.activeId ?? null)
    const [showFeature, setShowFeature] = useState(!!newFeature)
    const [domReady, setDomReady] = useState(false)
    const [animationDone, setAnimationDone] = useState(true)
    const [toggleActive, setToggleActive] = useState<string | null>(null)

    useEffect(() => {
        setDomReady(true)
    }, [])

    useEffect(() => {
        setAnimationDone(false)
        setTimeout(() => {
            setAnimationDone(true)
        }, COLLAPSE_ANIMATION_TIME)
    }, [collapsed])

    const handleItemClick = (item: MenuItem | SubMenuItem, e: SyntheticEvent) => {
        if (item.disabled) {
            e.preventDefault()
            e.stopPropagation()
        } else {
            if (item.children) {
                e.preventDefault()
                e.stopPropagation()

                setToggleActive(toggleActive === item.id ? '-1' : item.id)
            } else {
                collapsed && setToggleActive(null)
                isFunction(onItemClick) && onItemClick(item, e)
            }
        }
    }

    useEffect(() => {
        props.activeId && setActive(props.activeId)
        const activeItem = findActiveItem(menu!, props.activeId!)

        if (activeItem && !collapsed) {
            if (activeItem.children) {
                setToggleActive(activeItem.id)
            }
        }
    }, [collapsed, menu, props.activeId])

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
                    document.getElementById(headerIconCollapsePortalTargetId!) as Element
                )}
            {logo && <div css={[styles.logo, collapsed && styles.logoCollapsed]}>{logo}</div>}
            <div css={[styles.menu, collapsed && styles.menuCollapsed]}>
                <ul css={styles.menuList}>
                    {menu?.map(
                        (group, key) =>
                            isGroupVisible(group) && (
                                <li className='menu-list-group' css={styles.group} key={key}>
                                    <div css={[styles.groupTitle, collapsed && styles.groupTitleCollapsed]}>{group.title}</div>
                                    <ul css={styles.menuList}>
                                        {group.items
                                            ?.filter((i) => i.visibility !== false)
                                            .map((item, key) => (
                                                <LeftPanelItem
                                                    active={active}
                                                    animationDone={animationDone}
                                                    collapsed={collapsed}
                                                    handleItemClick={handleItemClick}
                                                    item={item}
                                                    key={key}
                                                    setToggleActive={setToggleActive}
                                                    toggleActive={toggleActive}
                                                />
                                            ))}
                                    </ul>
                                </li>
                            )
                    )}
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
