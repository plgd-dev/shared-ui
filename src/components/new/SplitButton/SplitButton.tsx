import { FC, useEffect, useRef, useState } from 'react'
import Button from '../Button'
import { Props, defaultProps } from './SplitButton.types'
import * as styles from './SplitButton.styles'
import Icon from '../Icon'
import { offset, shift, useFloating } from '@floating-ui/react'
import isFunction from 'lodash/isFunction'

const SplitButton: FC<Props> = (props) => {
    const { defaultOpen, children, variant, className, menuProps, items, disabled, loading, onClick, ...rest } = { ...defaultProps, ...props }
    const [open, setOpen] = useState(defaultOpen)
    const ref = useRef(null)
    const { x, y, reference, floating, strategy, context } = useFloating({
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

    return (
        <div ref={ref}>
            <div css={styles.splitButton} ref={reference}>
                <Button
                    {...rest}
                    variant={variant}
                    disabled={disabled}
                    loading={loading}
                    css={styles.leftButton}
                    onClick={(e) => {
                        open && setOpen(false)
                        isFunction(onClick) && onClick(e)
                    }}
                >
                    {children}
                </Button>
                <Button variant={variant} disabled={disabled} css={styles.rightButton} onClick={() => !loading && setOpen(!open)}>
                    <span css={[styles.arrow, open && styles.arrowOpen]}>
                        <Icon icon='arrow-down' />
                    </span>
                </Button>

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
                                                isFunction(item.onClick) && item.onClick(e)
                                            }}
                                        >
                                            {item.icon && <Icon icon={item.icon} size={20} css={styles.itemIcon} />}
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
