import { FC, SyntheticEvent, useState } from 'react'
import { Props, MenuItem, LeftPanelSubItemsType, LeftPanelItemType } from './LeftPanel.types'
import * as styles from './LeftPanel.styles'
import { CSSTransition } from 'react-transition-group'
import { useFloating, shift, offset } from '@floating-ui/react-dom'

import { Logo, LogoSmall, Close, Arrow, Feature } from './components'

import img from './assets/line.png'
import { Icon } from '../../Icon'

const LeftPanelItem = (props: LeftPanelItemType) => {
    const { active, item, collapsed, handleItemClick } = props
    const { x, y, reference, floating, strategy } = useFloating({
        placement: 'bottom-start',
        strategy: 'fixed',
        middleware: [shift(), offset(4)],
    })

    const isItemActive = (item: MenuItem) => item.id === active || item?.children?.some((subItem) => subItem.id === active)
    const isActive = isItemActive(item)

    return (
        <li className='menu-list-item' css={[collapsed && styles.menuListItem]}>
            <a
                css={[styles.item, isActive && styles.activeItem, collapsed && styles.itemCollapsed]}
                href='#'
                onClick={(e) => handleItemClick(item, e)}
                ref={reference}
            >
                <div css={[styles.itemTitle, isActive && styles.itemTitleActive]} data-icon={item.icon}>
                    <Icon css={[!collapsed && styles.itemTitleIcon]} icon={item.icon} />
                    <span css={[collapsed && styles.titleHidden]}>{item.title}</span>
                    {item.children && (
                        <span css={[styles.arrow, isActive && styles.activeArrow, collapsed && styles.arrowCollapsed]}>
                            <Arrow height={6} width={10} />
                        </span>
                    )}
                </div>
            </a>
            {item.children && (
                <LeftPanelSubItems active={active} collapsed={collapsed} floating={floating} isActive={isActive} item={item} strategy={strategy} x={x} y={y} />
            )}
        </li>
    )
}

const LeftPanelSubItems = (props: LeftPanelSubItemsType) => {
    const { active, item, isActive, collapsed, floating, strategy, x, y } = props

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
    const { collapsed, menu, newFeature } = props
    const [active, setActive] = useState<string | null>(props.activeId || null)

    const handleItemClick = (item: MenuItem, e: SyntheticEvent) => {
        if (item.children) {
            e.preventDefault()
            e.stopPropagation()

            setActive(active === item.id ? null : item.id)
        }
    }

    return (
        <div css={[styles.leftPanel, collapsed && styles.collapsedPanel]}>
            <div css={[styles.logo, collapsed && styles.logoCollapsed]}>
                {collapsed ? <LogoSmall height={32} width={50} /> : <Logo height={32} width={147} />}
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
                        <li css={styles.newFeature} onClick={newFeature.onClick}>
                            <div css={styles.header}>
                                <div css={styles.headerLeft}>
                                    <div css={styles.headline}>New feature release!</div>
                                    <div css={styles.description}>Check out the new features.</div>
                                </div>
                                <div css={styles.headerRight}>
                                    <Close
                                        css={styles.iconClose}
                                        height={20}
                                        onClick={(e: SyntheticEvent) => {
                                            e.preventDefault()
                                            e.stopPropagation()
                                            newFeature.onClose()
                                        }}
                                        width={20}
                                    />
                                </div>
                            </div>
                            <Feature height={120} width={200} />
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

LeftPanel.displayName = 'LeftPanel'

export default LeftPanel
