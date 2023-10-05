import { FC } from 'react'
import { Scrollbars as ScrollbarsCore } from 'rc-scrollbars'

import { Props, defaultProps } from './Scrollbars.types'
import * as styles from './Scrollbars.styles'

const Scrollbars: FC<Props> = (props) => {
    const { children, horizontalScrollbar, verticalScrollbar, ...rest } = { ...defaultProps, ...props }
    return (
        <ScrollbarsCore
            {...rest}
            renderThumbHorizontal={horizontalScrollbar ? ({ style, ...props }) => <div {...props} css={styles.scrollbar} style={style} /> : undefined}
            renderThumbVertical={verticalScrollbar ? ({ style, ...props }) => <div {...props} css={styles.scrollbar} style={style} /> : undefined}
        >
            {children}
        </ScrollbarsCore>
    )
}

Scrollbars.displayName = 'Scrollbars'
Scrollbars.defaultProps = defaultProps

export default Scrollbars
