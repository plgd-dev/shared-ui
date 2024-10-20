import React, { FC } from 'react'
import { motion } from 'framer-motion'

const MotionElement: FC<any> = (props) => {
    const noAnimations = process.env.REACT_APP_NO_ANIMATIONS === 'true' || process.env.REACT_APP_MOCK_API === 'true'
    const { divStyle, children, noAnimations: noAnimationsProp, ...rest } = props

    return noAnimations || noAnimationsProp ? (
        <div className={rest.className} css={rest.css} data-test-id={rest.dataTestId} style={{ ...rest.style, ...divStyle }}>
            {children}
        </div>
    ) : (
        <motion.div {...rest}>{children}</motion.div>
    )
}

MotionElement.displayName = 'MotionElement'

export default MotionElement
