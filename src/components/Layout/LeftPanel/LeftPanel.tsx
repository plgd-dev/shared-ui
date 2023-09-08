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
                href={item.link}
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
                {/*<Logo css={[styles.logoSvg, collapsed && styles.logoSvgCollapsed]} height={32} width={147} />*/}
                <svg
                    css={[styles.logoSvg, collapsed && styles.logoSvgCollapsed]}
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    viewBox='0 0 130 22'
                    version='1.1'
                    width={180}
                >
                    <defs>
                        <path
                            d='M7.97057188,1.42108547e-14 C9.27087664,1.42108547e-14 11.1527228,0.250443857 13.614223,0.751924104 L13.614223,4.67231852 C11.7827733,3.90676616 10.0826941,3.52478002 8.51190938,3.52478002 C6.30012665,3.52478002 5.19423528,4.16037019 5.19423528,5.43411817 C5.19423528,5.91031702 5.41715006,6.2986235 5.86316838,6.59963016 C6.23406384,6.84335864 7.25633857,7.35787461 8.9275388,8.14515317 C11.3337349,9.26346004 12.9356636,10.2356088 13.733891,11.0623896 C14.6810429,12.0432288 15.1553739,13.3122366 15.1553739,14.8676351 C15.1553739,17.1036563 14.2261533,18.8091632 12.368656,19.9843532 C10.863934,20.9371459 8.91262748,21.4117647 6.5158689,21.4117647 C4.49208203,21.4117647 2.4528176,21.1625059 0.399585599,20.6610257 L0.399585599,16.5855852 C2.61627585,17.3155856 4.57777493,17.6807833 6.28408282,17.6807833 C8.64007122,17.6807833 9.81806542,17.0291947 9.81806542,15.7268077 C9.81806542,15.2413258 9.64667963,14.8334657 9.30296429,14.5030299 C8.95151016,14.1524481 8.051546,13.6667687 6.60495931,13.0444117 C4.00982355,11.9278825 2.31748322,10.9754848 1.53039208,10.1880087 C0.51000486,9.14811366 6.39488462e-14,7.83703612 6.39488462e-14,6.25260345 C6.39488462e-14,4.21231557 0.743300939,2.65711452 2.22877031,1.5885804 C3.69781836,0.529131777 5.61080846,1.42108547e-14 7.97057188,1.42108547e-14 Z M122.307282,1.42108547e-14 C123.633823,1.42108547e-14 125.353343,0.220422196 127.462068,0.663439208 L127.949234,0.751924104 L127.949234,4.67231852 C126.117407,3.90676616 124.412231,3.52478002 122.83333,3.52478002 C120.629664,3.52478002 119.530756,4.16037019 119.530756,5.43411817 C119.530756,5.91031702 119.752539,6.2986235 120.197236,6.59963016 C120.550955,6.83407563 121.577193,7.34878911 123.276329,8.14515317 C125.664593,9.26346004 127.263125,10.2356088 128.068147,11.0623896 C129.016809,12.0432288 129.490196,13.3122366 129.490196,14.8676351 C129.490196,17.1036563 128.566072,18.8091632 126.718012,19.9843532 C125.204419,20.9371459 123.248205,21.4117647 120.852012,21.4117647 C118.82596,21.4117647 116.785941,21.1625059 114.734408,20.6610257 L114.734408,16.5855852 C116.932412,17.3155856 118.893533,17.6807833 120.620038,17.6807833 C122.975837,17.6807833 124.152699,17.0291947 124.152699,15.7268077 C124.152699,15.2413258 123.985843,14.8334657 123.653453,14.5030299 C123.3003,14.1524481 122.396561,13.6667687 120.941292,13.0444117 C118.353895,11.9371655 116.659855,10.9851628 115.865214,10.1880087 C114.845582,9.15739668 114.336521,7.84138136 114.336521,6.23858018 C114.336521,4.20718028 115.077746,2.65711452 116.564914,1.5885804 C118.031886,0.529131777 119.946952,1.42108547e-14 122.307282,1.42108547e-14 Z M53.9199712,0.358660095 L58.8818542,13.5442922 L63.9681239,0.358660095 L70.7520191,0.358660095 L70.7520191,20.9947994 L65.5290937,20.9947994 L65.5290937,6.38392847 L59.7457669,21.2043585 L56.3310749,21.2043585 L50.6589224,6.38392847 L50.6589224,20.9947994 L46.7778269,20.9947994 L46.7778269,0.358660095 L53.9199712,0.358660095 Z M23.7747202,0.35858109 L23.7747202,20.9947204 L18.2662148,20.9947204 L18.2662148,0.35858109 L23.7747202,0.35858109 Z M42.9545836,0.358660095 L42.9545836,4.09122162 L34.1355766,4.09122162 L34.1355766,8.75089943 L41.8120746,8.75089943 L41.8120746,12.1553953 L34.1355766,12.1553953 L34.1355766,17.0526788 L43.1818397,17.0526788 L43.1818397,20.9947994 L28.8265807,20.9947994 L28.8265807,0.358660095 L42.9545836,0.358660095 Z M89.9327318,0.358660095 L89.9327318,4.09122162 L81.1144798,4.09122162 L81.1144798,8.75089943 L88.790789,8.75089943 L88.790789,12.1553953 L81.1144798,12.1553953 L81.1144798,17.0526788 L90.1614979,17.0526788 L90.1614979,20.9947994 L75.8049177,20.9947994 L75.8049177,0.358660095 L89.9327318,0.358660095 Z M100.170315,0.358660095 L106.94364,14.1729694 L106.94364,0.358660095 L110.823792,0.358660095 L110.823792,20.9947994 L104.620683,20.9947994 L97.6674784,6.99463226 L97.6674784,20.9947994 L93.7860054,20.9947994 L93.7860054,0.358660095 L100.170315,0.358660095 Z'
                            id='path-1'
                        />
                    </defs>
                    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                        <mask id='mask-2' fill='white'>
                            <use xlinkHref='#path-1' />
                        </mask>
                        <use id='Siemens' fill='#171717' xlinkHref='#path-1' />
                        <g id='c/white' mask='url(#mask-2)' fill='#FFFFFF'>
                            <rect id='Rectangle' x='0' y='0' width='130' height='22' />
                        </g>
                    </g>
                </svg>
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
