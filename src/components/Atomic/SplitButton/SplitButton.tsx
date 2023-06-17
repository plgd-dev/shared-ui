import { cloneElement, FC, ReactElement, useEffect, useRef, useState } from 'react'
import Button from '../Button'
import { Props, defaultProps, SplitButtonItemType } from './SplitButton.types'
import * as styles from './SplitButton.styles'
import Icon, { convertSize, IconArrowDown } from '../Icon'
import { offset, shift, useFloating } from '@floating-ui/react'
import isFunction from 'lodash/isFunction'
import { motion } from 'framer-motion'

const SplitButton: FC<Props> = (props) => {
    const { defaultOpen, children, variant, className, menuProps, items, disabled, loading, onClick, dataTestId, dataTestIdDropdown, ...rest } = {
        ...defaultProps,
        ...props,
    }
    const [open, setOpen] = useState(defaultOpen)
    const ref = useRef(null)
    const { x, y, refs, strategy } = useFloating({
        placement: menuProps?.placement || 'bottom-end',
        strategy: 'fixed',
        middleware: [shift(), offset(4)],
    })

    useEffect(() => {
        function handleClickOutside(event: any) {
            // @ts-ignore
            if (ref?.current && !ref?.current?.contains(event.target)) {
                setOpen(false)
            }
        }
        if (open) {
            document.addEventListener('mousedown', handleClickOutside)
            return () => {
                document.removeEventListener('mousedown', handleClickOutside)
            }
        }
    }, [ref, open])

    const getIcon = (item: SplitButtonItemType) => {
        if (item.icon) {
            return typeof item.icon === 'string' ? (
                <Icon css={styles.itemIcon} icon={item.icon} size={20} />
            ) : (
                cloneElement(item.icon as ReactElement, { ...convertSize(20), css: styles.itemIcon })
            )
        }

        return null
    }

    return (
        <div ref={ref}>
            <div css={styles.splitButton} ref={refs.setReference}>
                <Button
                    {...rest}
                    css={styles.leftButton}
                    dataTestId={dataTestId}
                    disabled={disabled}
                    loading={loading}
                    onClick={(e) => {
                        open && setOpen(false)
                        isFunction(onClick) && onClick(e)
                    }}
                    variant={variant}
                >
                    {children}
                </Button>
                <Button
                    css={styles.rightButton}
                    data-test-id={dataTestIdDropdown}
                    disabled={disabled}
                    onClick={() => !loading && setOpen(!open)}
                    variant={variant}
                >
                    <motion.div
                        animate={{
                            rotate: open ? 180 : 0,
                        }}
                        transition={{
                            duration: 0.3,
                            damping: 25,
                            stiffness: 500,
                        }}
                    >
                        <IconArrowDown />
                    </motion.div>
                </Button>

                {open && (
                    <div
                        css={styles.floatingMenu}
                        ref={refs.setFloating}
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
                                                isFunction(item.onClick) && item.onClick(e)
                                            }}
                                        >
                                            {getIcon(item)}
                                            <span css={styles.itemLabel}>{item.label}</span>
                                        </div>
                                    )
                                )
                            })}
                    </div>
                )}
            </div>
        </div>
    )
}

SplitButton.defaultProps = defaultProps
SplitButton.displayName = 'SplitButton'

export default SplitButton
