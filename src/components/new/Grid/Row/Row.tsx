import { FC } from 'react'
import { Props, defaultProps } from './Row.types'
import * as styles from './Row.styles'

const Row: FC<Props> = (props) => {
    const { className, id, children, style, gutters } = { ...defaultProps, ...props }
    return (
        <div id={id} className={className} style={style} css={[styles.row, !gutters && styles.noGutters]}>
            {children}
        </div>
    )
}

Row.displayName = 'Row'
Row.defaultProps = defaultProps

export default Row
