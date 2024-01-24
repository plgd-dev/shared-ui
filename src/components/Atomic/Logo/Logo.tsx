import { FC, useCallback } from 'react'
import { motion, PanInfo, useMotionValue } from 'framer-motion'
import isFunction from 'lodash/isFunction'

import { Props } from './Logo.types'
import { getNumberFromPx } from '../_utils/commonStyles'

const Logo: FC<Props> = (props) => {
    const { css, logo, className, onClick, onResized, title } = props

    const mHeight = useMotionValue(typeof logo.height === 'string' ? getNumberFromPx(logo.height) : logo.height)
    const mWidth = useMotionValue(typeof logo.width === 'string' ? getNumberFromPx(logo.width) : logo.width)

    const handleDrag = useCallback(
        (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
            let newHeight = mHeight.get() + info.delta.y
            if (newHeight > 20 && newHeight < 60) {
                mHeight.set(mHeight.get() + info.delta.y)
            }

            let newWidth = mWidth.get() + info.delta.x
            if (newWidth > 20 && newWidth < 225) {
                mWidth.set(mWidth.get() + info.delta.x)
            }
        },
        [mHeight, mWidth]
    )

    if (!isFunction(onResized)) {
        return <img alt={title || ''} className={className} css={css} height={logo.height} onClick={onClick} src={logo.source} width={logo.width} />
    }

    return (
        <motion.img
            alt={title || ''}
            className={className}
            css={css}
            drag={true}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={0}
            dragMomentum={false}
            dragPropagation={false}
            dragSnapToOrigin={true}
            onClick={onClick}
            onDrag={handleDrag}
            onDragEnd={() => {
                isFunction(onResized) && onResized(Math.floor(mHeight.get()), Math.floor(mWidth.get()))
            }}
            src={logo.source}
            style={{
                height: mHeight,
                width: mWidth,
                border: '1px dashed #ccc',
                cursor: 'move',
                transform: 'none!important',
            }}
        />
    )
}

Logo.displayName = 'Logo'

export default Logo
