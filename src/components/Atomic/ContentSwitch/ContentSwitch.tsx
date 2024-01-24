import React, { FC, Suspense, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import isFunction from 'lodash/isFunction'

import { Props } from './ContentSwitch.types'
import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper'

const ContentSwitch: FC<Props> = (props) => {
    const { activeItem, children, isAsync, onAnimationComplete } = props

    const onAnimationCompleteCallback = useCallback(() => {
        isFunction(onAnimationComplete) && onAnimationComplete()
    }, [onAnimationComplete])

    return (
        <ConditionalWrapper condition={isAsync} wrapper={(c) => <Suspense fallback={<div />}>{c} </Suspense>}>
            <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
                {React.Children.map(children, (child, i) => {
                    if (i !== activeItem) {
                        return null
                    }
                    return (
                        <motion.div
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                            onAnimationComplete={onAnimationCompleteCallback}
                            transition={{
                                duration: 0.3,
                            }}
                        >
                            {child}
                        </motion.div>
                    )
                })}
            </AnimatePresence>
        </ConditionalWrapper>
    )
}

ContentSwitch.displayName = 'ContentSwitch'

export default ContentSwitch
