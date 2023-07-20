import { Children, cloneElement, FC, ReactElement } from 'react'
import { Props } from './TileToggleRow.types'
import * as styles from './TileToggleRow.styles'

const TileToggleRow: FC<Props> = (props) => {
    const { children } = props
    return <div css={styles.tileRow}>{Children.toArray(children).map((tile, key) => cloneElement(tile as ReactElement, { className: 'tile', key }))}</div>
}

TileToggleRow.displayName = 'TileToggleRow'

export default TileToggleRow
