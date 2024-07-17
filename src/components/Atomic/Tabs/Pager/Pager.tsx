import React, { FC } from 'react'

import { Props } from './Pager.types'
import * as styles from './Pager.styles'
import MotionElement from '../../MotionElement'

const Pager: FC<Props> = (props) => {
    const { children, fullHeight, onAnimationComplete, value } = props

    return (
        <div css={[styles.container, fullHeight && styles.fullHeight]}>
            <MotionElement
                animate={{ x: value * -100 + '%' }}
                css={styles.animatedContainer}
                divStyle={{
                    transform: `translateX(${value * -100}%) translateZ(0px)`,
                }}
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
            </MotionElement>
        </div>
    )
}

Pager.displayName = 'Pager'

export default Pager
