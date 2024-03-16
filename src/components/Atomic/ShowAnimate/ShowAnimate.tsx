import { FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { Props } from './ShowAnimate.types'

const ShowAnimate: FC<Props> = (props) => (
    <AnimatePresence>
        {props.show && (
            <motion.div
                animate={{ opacity: 1, height: 'auto' }}
                exit={{
                    opacity: 0,
                    height: 0,
                }}
                initial={{ opacity: 0, height: 0 }}
                transition={{
                    duration: 0.3,
                }}
            >
                {props.children}
            </motion.div>
        )}
    </AnimatePresence>
)

ShowAnimate.displayName = 'ShowAnimate'

export default ShowAnimate
