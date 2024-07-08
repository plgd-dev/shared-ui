import { forwardRef } from 'react'

import { Props } from './Spacer.types'
import * as styles from './Spacer.styles'

const Spacer = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { children, className, dataTestId, id, style, type } = props
    const typeRegex = /^(([mp][tblrxy]?-[0-10]|m[tblrxy]?-(auto))\s?)+$/

    if (typeRegex.test(type)) {
        return null
    }

    return (
        <div className={className} css={(theme) => styles.spacer(props.type, theme)} data-test-id={dataTestId} id={id} ref={ref} style={style}>
            {children}
        </div>
    )
})

Spacer.displayName = 'Spacer'

export default Spacer
