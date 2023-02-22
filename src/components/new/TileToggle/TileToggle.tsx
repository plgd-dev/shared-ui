import { cloneElement, FC, memo, ReactElement } from 'react'
import { Props } from './TileToggle.types'
import * as styles from './TileToggle.styles'
import Switch from '../Switch'

const TileToggle: FC<Props> = memo((props) => {
    const { className, name, checked, onChange } = props
    return (
        <div className={className} css={styles.tileToggle}>
            <div css={styles.name}>{name}</div>
            <Switch checked={checked} onChange={onChange} />
        </div>
    )
})

TileToggle.displayName = 'TileToggle'

export default TileToggle
