import { FC } from 'react'
import { Props, defaultProps } from './Row.types'
import * as styles from './Row.styles'

const Row: FC<Props> = (props) => {
    const { className, dataTestId, id, children, style, gutters } = { ...defaultProps, ...props }
    return (
        <div className={className} css={[styles.row, !gutters && styles.noGutters]} data-test-id={dataTestId} id={id} style={style}>
            {children}
        </div>
    )
}

Row.displayName = 'Row'

export default Row
