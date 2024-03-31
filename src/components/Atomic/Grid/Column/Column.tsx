import { FC } from 'react'
import { Props, defaultProps } from './Column.types'
import * as styles from './Column.styles'

const Column: FC<Props> = (props) => {
    const { size, sm, md, lg, xl, xxl, className, id, style, children } = { ...defaultProps, ...props }
    return (
        <div className={className} css={styles.column({ size, sm, md, lg, xl, xxl })} id={id} style={style}>
            {children}
        </div>
    )
}

Column.displayName = 'Column'
Column.defaultProps = defaultProps

export default Column
