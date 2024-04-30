import React, { FC, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import isFunction from 'lodash/isFunction'
import { motion } from 'framer-motion'

import { defaultProps, Props } from './Tabs.types'
import * as styles from './Tabs.styles'
import { useMeasure } from '../../../common/hooks/use-measure'
import Pager from './Pager'
import ConditionalWrapper from '../ConditionalWrapper'
import { statuses } from './constants'
import IconCheck from '../Icon/components/IconCheck'
import IconWarningCircle from '../Icon/components/IconWarningCircle'

const Tabs: FC<Props> = (props) => {
    const { activeItem, className, onAnimationComplete, onItemChange, fullHeight, innerPadding, isAsync, style, tabs } = { ...defaultProps, ...props }
    const [value, setValue] = useState(activeItem)
    const childRefs = useRef(new Map())
    const tabListRef = useRef<HTMLDivElement | null>(null)
    const [slider, setSlider] = useState({ left: 0, right: 0, hasValue: false })
    const { bounds, ref } = useMeasure()

    const handleTabChange = (i: number) => {
        setValue(i)
        isFunction(onItemChange) && onItemChange(i)
    }

    useEffect(() => {
        if (value !== activeItem) {
            setValue(activeItem)
        }
    }, [activeItem, value])

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

    const onAnimationCompleteCallback = useCallback(() => {
        isFunction(onAnimationComplete) && onAnimationComplete()
    }, [onAnimationComplete])

    return (
        <div className={className} css={[styles.container, fullHeight && styles.fullHeight]} ref={ref} style={style}>
            <div css={[styles.tabList, innerPadding && styles.tabListInnerPadding]} ref={tabListRef}>
                {tabs.map((tab, i) => (
                    <motion.button
                        css={[styles.tabItem, i === value && styles.isActive, tab.disabled && styles.isDisabled]}
                        data-test-id={tab.dataTestId}
                        key={i}
                        onClick={tab.disabled ? undefined : () => handleTabChange(tab.id)}
                        ref={(el) => childRefs.current.set(i, el)}
                        transition={{ duration: 0.25 }}
                    >
                        {tab.name}
                        {tab.status === statuses.SUCCESS && <IconCheck css={[styles.icon, styles.iconSuccess]} />}
                        {tab.status === statuses.ERROR && <IconWarningCircle css={[styles.icon, styles.iconError]} />}
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
            <ConditionalWrapper condition={isAsync} wrapper={(c) => <Suspense fallback={<div />}>{c} </Suspense>}>
                <Pager fullHeight={fullHeight} onAnimationComplete={onAnimationCompleteCallback} value={value}>
                    {tabs.map((tab, i) => {
                        if (value !== i) {
                            return null
                        }
                        return (
                            <div
                                css={[styles.page, innerPadding && tab.innerPadding !== false && styles.pageXpadding]}
                                key={i}
                                style={{
                                    width: '100%',
                                    height: fullHeight ? '100%' : undefined,
                                }}
                            >
                                {tab.content}
                            </div>
                        )
                    })}
                </Pager>
            </ConditionalWrapper>
        </div>
    )
}

Tabs.displayName = 'Tabs'

export default Tabs
