import React, { FC, memo } from 'react'
import { Props } from './TileToggle.types'
import * as styles from './TileToggle.styles'
import Switch from '../Switch'
import { ClipLoader } from 'react-spinners'
import { colors } from '../_utils/colors'

const TileToggle: FC<Props> = memo((props) => {
    const { className, name, checked, onChange, loading } = props
    return (
        <div className={className} css={styles.tileToggle}>
            <div css={styles.name}>
                {name}
                {loading && <ClipLoader color={colors.primaryDarken} size={16} css={styles.loading} />}
            </div>
            <Switch checked={checked} onChange={onChange} disabled={loading} />
        </div>
    )
})

TileToggle.displayName = 'TileToggle'

export default TileToggle
