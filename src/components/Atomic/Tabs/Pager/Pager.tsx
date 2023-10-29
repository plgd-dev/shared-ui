import React, { FC } from 'react'
import { motion } from 'framer-motion'

import { Props } from './Pager.types'
import * as styles from './Pager.styles'

const Pager: FC<Props> = (props) => {
    const { children, fullHeight, onAnimationComplete, value } = props
    return (
        <div css={[styles.container, fullHeight && styles.fullHeight]}>
            <motion.div
                animate={{ x: value * -100 + '%' }}
                css={styles.animatedContainer}
                initial={false}
                onAnimationComplete={onAnimationComplete}
                transition={{
                    tension: 190,
                    friction: 70,
                    mass: 0.4,
                }}
            >
                {React.Children.map(children, (child, i) => (
                    <div aria-hidden={value !== i} css={styles.page} key={i} tabIndex={value === i ? 0 : -1}>
                        {child}
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

Pager.displayName = 'Pager'

export default Pager
