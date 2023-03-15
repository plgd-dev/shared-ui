import React, { FC, useEffect, useRef, useState } from 'react'
import { defaultProps, Props } from './ActionButton.types'
import { Icon } from '../Icon'
import * as styles from './ActionButton.styles'
import isFunction from 'lodash/isFunction'
import { offset, shift, useFloating } from '@floating-ui/react'

const ActionButton: FC<Props> = (props) => {
    const { menuProps, items, onToggle, className, id, defaultOpen, loading, dataTestIdDropdown } = props
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
            if (ref?.current && !ref?.current?.contains(event.target)) {
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

    return (
        <div className={className} css={styles.actionButton} id={id} ref={ref}>
            <div css={[styles.icon, open && styles.iconActive]} data-test-id={dataTestIdDropdown} onClick={handleOpen} ref={reference}>
                <Icon icon='actions' size={20} />
            </div>

            {open && (
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
                                        key={item.id || item.label}
                                        onClick={(e) => {
                                            open && setOpen(false)
                                            isFunction(onToggle) && onToggle(false)
                                            isFunction(item.onClick) && item.onClick(e)
                                        }}
                                    >
                                        {item.icon && <Icon css={styles.itemIcon} icon={item.icon} size={20} />}
                                        <span css={styles.itemLabel}>{item.label}</span>
                                    </div>
                                )
                            )
                        })}
                </div>
            )}
        </div>
    )
}

ActionButton.displayName = 'ActionButton'
ActionButton.defaultProps = defaultProps

export default ActionButton
