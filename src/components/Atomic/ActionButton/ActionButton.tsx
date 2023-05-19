import React, { cloneElement, FC, ReactElement, useEffect, useRef, useState } from 'react'
import { ActionButtonItemType, defaultProps, Props } from './ActionButton.types'
import { convertSize, Icon, IconActions } from '../Icon'
import * as styles from './ActionButton.styles'
import isFunction from 'lodash/isFunction'
import { offset, shift, useFloating } from '@floating-ui/react'
import { createPortal } from 'react-dom'

const ActionButton: FC<Props> = (props) => {
    const { menuProps, items, onToggle, className, id, defaultOpen, loading, dataTestIdDropdown, portalTarget } = props
    const [open, setOpen] = useState(defaultOpen)
    const ref = useRef(null)
    const { x, y, reference, floating, strategy } = useFloating({
        placement: menuProps?.placement || 'bottom-end',
        strategy: 'fixed',
        middleware: [shift(), offset(4)],
    })

    useEffect(() => {
        function handleClickOutside(event: any) {
            // @ts-ignore
            if (ref?.current && !ref?.current?.contains(event.target) && event.target.getAttribute('data-close-dropdown') === false) {
                setOpen(false)
                isFunction(onToggle) && onToggle(false)
            }
        }
        if (open) {
            document.addEventListener('mousedown', handleClickOutside)
            return () => {
                document.removeEventListener('mousedown', handleClickOutside)
            }
        }
    }, [ref, open, onToggle])

    const handleOpen = () => {
        if (!loading) {
            const newState = !open
            setOpen(newState)
            isFunction(onToggle) && onToggle(newState)
        }
    }

    const getIcon = (item: ActionButtonItemType) => {
        if (item.icon) {
            return typeof item.icon === 'string' ? (
                <Icon css={styles.itemIcon} data-close-dropdown={false} icon={item.icon} size={20} />
            ) : (
                cloneElement(item.icon as ReactElement, { ...convertSize(20), 'css': styles.itemIcon, 'data-close-dropdown': false })
            )
        }

        return null
    }

    const floatingPanel = (
        <div
            css={styles.floatingMenu}
            ref={floating}
            style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                width: 'max-content',
            }}
        >
            {items
                .filter((item) => !item.hidden)
                .map((item) => {
                    return (
                        item.component || (
                            <div
                                css={styles.item}
                                data-close-dropdown={false}
                                key={item.id || item.label}
                                onClick={(e) => {
                                    open && setOpen(false)
                                    isFunction(onToggle) && onToggle(false)
                                    isFunction(item.onClick) && item.onClick(e)
                                }}
                            >
                                {getIcon(item)}
                                <span css={styles.itemLabel} data-close-dropdown={false}>
                                    {item.label}
                                </span>
                            </div>
                        )
                    )
                })}
        </div>
    )

    return (
        <div className={className} css={styles.actionButton} id={id} ref={ref}>
            <div css={[styles.icon, open && styles.iconActive]} data-test-id={dataTestIdDropdown} onClick={handleOpen} ref={reference}>
                <IconActions {...convertSize(20)} />
            </div>

            {open && portalTarget && createPortal(floatingPanel, portalTarget as Element)}
            {open && !portalTarget && floatingPanel}
        </div>
    )
}

ActionButton.displayName = 'ActionButton'
ActionButton.defaultProps = defaultProps

export default ActionButton
