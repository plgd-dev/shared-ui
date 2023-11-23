import { cloneElement, FC, useEffect, useRef, useState } from 'react'
import { offset, shift, useFloating } from '@floating-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FloatingPortal } from '@floating-ui/react-dom-interactions'

import { Props } from './FloatingPanel.types'
import * as styles from './FloatingPanel.styles'
import { hasEventBlocker } from '../_utils/envets'

const FloatingPanel: FC<Props> = (props) => {
    const { children, reference, title } = props
    const [open, setOpen] = useState(false)
    const ref = useRef(null)
    const { x, y, refs, strategy } = useFloating({
        placement: 'bottom-end',
        strategy: 'fixed',
        middleware: [shift(), offset(4)],
    })

    useEffect(() => {
        function handleClickOutside(event: any) {
            // @ts-ignore
            if (ref?.current && !ref?.current?.contains(event.target) && !hasEventBlocker(event, 'data-block-outside-click')) {
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
        <div>
            <span
                css={[styles.referenceItem, open && styles.activeReferenceItem]}
                data-block-outside-click={true}
                onClick={() => setOpen(!open)}
                ref={refs.setReference}
            >
                {cloneElement(reference)}
            </span>
            <FloatingPortal>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            css={styles.floatingPanel}
                            exit={{ opacity: 0, y: 0 }}
                            initial={{ opacity: 0, scale: 0.85, y: -100 }}
                            ref={refs.setFloating}
                            style={{
                                position: strategy,
                                top: y ?? 0,
                                left: x ?? 0,
                                width: 'max-content',
                            }}
                            transition={
                                // When in "grouped phase", make the transition faster
                                // The open delay becomes 1ms during this phase.
                                { type: 'spring', damping: 20, stiffness: 300 }
                            }
                        >
                            <div ref={ref}>
                                {title ? (
                                    <div css={styles.header}>
                                        <div css={styles.headline}>{title}</div>
                                    </div>
                                ) : null}
                                <div css={styles.content}>{children}</div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </FloatingPortal>
        </div>
    )
}

FloatingPanel.displayName = 'FloatingPanel'

export default FloatingPanel
