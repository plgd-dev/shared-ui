import { FC, useEffect, useRef, useState } from 'react'
import isFunction from 'lodash/isFunction'
import { motion } from 'framer-motion'

import { defaultProps, Props } from './Tabs.types'
import * as styles from './Tabs.styles'
import { useMeasure } from '../../../common/hooks/use-measure'
import Pager from './Pager'

const Tabs: FC<Props> = (props) => {
    const { activeItem, onItemChange, fullHeight, tabs } = { ...defaultProps, ...props }
    const [value, setValue] = useState(activeItem)
    const childRefs = useRef(new Map())
    const tabListRef = useRef<HTMLDivElement | null>(null)
    const [slider, setSlider] = useState({ left: 0, right: 0, hasValue: false })
    const { bounds, ref } = useMeasure()

    const handleTabChange = (i: number) => {
        setValue(i)
        isFunction(onItemChange) && onItemChange(i)
    }

    // measure our elements
    useEffect(() => {
        const target = childRefs.current.get(value)
        const container = tabListRef.current
        if (target && container) {
            const cRect = container.getBoundingClientRect()

            // when container is `display: none`, width === 0.
            // ignore this case
            if (cRect.width === 0) {
                return
            }

            const tRect = target.getBoundingClientRect()
            const left = tRect.left - cRect.left
            const right = cRect.right - tRect.right

            setSlider({
                hasValue: true,
                left,
                right,
            })
        }
    }, [value, bounds])

    return (
        <div css={[styles.container, fullHeight && styles.fullHeight]} ref={ref}>
            <div css={styles.tabList} ref={tabListRef}>
                {tabs.map((tab, i) => (
                    <motion.button
                        css={[styles.tabItem, i === value && styles.isActive]}
                        key={i}
                        onClick={() => handleTabChange(tab.id)}
                        ref={(el) => childRefs.current.set(i, el)}
                        transition={{ duration: 0.25 }}
                    >
                        {tab.name}
                    </motion.button>
                ))}
                {slider.hasValue && (
                    <motion.div
                        layout
                        css={styles.slider}
                        initial={false}
                        style={{
                            left: slider.left,
                            right: slider.right,
                        }}
                        transition={{ bounceDamping: 3 }}
                    />
                )}
            </div>
            <Pager fullHeight={fullHeight} value={value}>
                {tabs.map((tab, i) => (
                    <div
                        css={styles.page}
                        key={i}
                        style={{
                            width: '100%',
                            height: fullHeight ? '100%' : undefined,
                        }}
                    >
                        {tab.content}
                    </div>
                ))}
            </Pager>
        </div>
    )
}

Tabs.displayName = 'Tabs'
Tabs.defaultProps = defaultProps

export default Tabs
