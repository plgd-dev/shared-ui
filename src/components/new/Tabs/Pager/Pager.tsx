import React, { FC } from 'react'
import { Props } from './Pager.types'
import * as styles from './Pager.styles'
import { motion } from 'framer-motion'

const Pager: FC<Props> = (props) => {
    const { children, value } = props
    return (
        <div css={styles.container}>
            <motion.div
                css={styles.animatedContainer}
                transition={{
                    tension: 190,
                    friction: 70,
                    mass: 0.4,
                }}
                initial={false}
                animate={{ x: value * -100 + '%' }}
            >
                {React.Children.map(children, (child, i) => (
                    <div css={styles.page} key={i} aria-hidden={value !== i} tabIndex={value === i ? 0 : -1}>
                        {child}
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

Pager.displayName = 'Pager'

export default Pager
