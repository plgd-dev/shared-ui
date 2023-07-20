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
                {loading && <ClipLoader color={colors.primaryDarken} css={styles.loading} size={16} />}
            </div>
            <Switch checked={checked} disabled={loading} loading={loading} onChange={onChange} />
        </div>
    )
})

TileToggle.displayName = 'TileToggle'

export default TileToggle
