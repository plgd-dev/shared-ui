import { createRef, FC, SyntheticEvent, useEffect, useState } from 'react'
import { Props, MenuItem } from './LeftPanel.types'
import * as styles from './LeftPanel.styles'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { ReactComponent as Logo } from './assets/logo.svg'
import { ReactComponent as Arrow } from './assets/arrow.svg'

import img from './assets/line.png'

const LeftPanel: FC<Props> = (props) => {
    const { menu } = props

    const [active, setActive] = useState<string | null>(props.activeId || null)
    const [nodeRefPool, setNodeRefPool] = useState<[{ id: string; nodeRef: any }] | null>(null)

    const handleItemClick = (item: MenuItem, e: SyntheticEvent) => {
        if (item.children) {
            e.preventDefault()
            e.stopPropagation()

            setActive(active === item.id ? null : item.id)
        }
    }

    useEffect(() => {
        let newNodeRefPool: any = []

        menu?.forEach((group) => {
            group.items?.forEach((item) => {
                if (item.children) {
                    newNodeRefPool.push({ id: item.id, nodeRef: createRef() })
                }
            })
        })

        setNodeRefPool(newNodeRefPool)
    }, [menu])

    const isItemActive = (item: MenuItem) => item.id === active || item?.children?.some((subItem) => subItem.id === active)

    return (
        <div css={styles.leftPanel}>
            <div css={styles.logo}>
                <Logo />
            </div>
            <div css={styles.menu}>
                <ul css={styles.menuList}>
                    <TransitionGroup component={null}>
                        {menu?.map((group, key) => (
                            <li className='menu-list-group' css={styles.group} key={key}>
                                <div css={styles.groupTitle}>{group.title}</div>
                                <ul css={styles.menuList} data-t='k'>
                                    {group.items?.map((item, key) => {
                                        const isActive = isItemActive(item)
                                        return (
                                            <li className='menu-list-item' key={key}>
                                                <a css={[styles.item, isActive && styles.activeItem]} href='#' onClick={(e) => handleItemClick(item, e)}>
                                                    <div css={styles.itemTitle}>
                                                        {item.title}
                                                        {item.children && (
                                                            <span css={[styles.arrow, isActive && styles.activeArrow]}>
                                                                <Arrow />
                                                            </span>
                                                        )}
                                                    </div>
                                                </a>
                                                {item.children && (
                                                    <CSSTransition
                                                        appear={true}
                                                        classNames='item'
                                                        in={isActive}
                                                        key={item.id}
                                                        nodeRef={nodeRefPool?.find((refItem) => item.id === refItem.id)?.nodeRef}
                                                        timeout={250}
                                                    >
                                                        <div css={styles.subItems} ref={nodeRefPool?.find((refItem) => item.id === refItem.id)?.nodeRef}>
                                                            <ul css={styles.subItemsList}>
                                                                {item.children.map((item, key) => (
                                                                    <li key={key}>
                                                                        <a css={styles.subItemLink} href='#'>
                                                                            <img alt='line' css={styles.line} src={img} />
                                                                            {item.title}
                                                                            {item.tag && <span css={styles.tag(item.tag.variant)}>{item.tag.text}</span>}
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
                            </li>
                        ))}
                    </TransitionGroup>
                </ul>
            </div>
        </div>
    )
}

LeftPanel.displayName = 'LeftPanels'

export default LeftPanel
