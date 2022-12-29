import { cloneElement, FC, ReactElement } from 'react'
import { Props } from './TileRow.types'
import * as styles from './TileRow.styles'

const TileRow: FC<Props> = (props) => {
    const { children } = props
    return <div css={styles.tileRow}>{children.map((tile, key) => cloneElement(tile as ReactElement, { className: 'tile', key }))}</div>
}

TileRow.displayName = 'TileRow'

export default TileRow
