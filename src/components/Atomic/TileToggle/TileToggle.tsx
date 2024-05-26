import React, { FC, memo } from 'react'
import { ClipLoader } from 'react-spinners'

import { Props } from './TileToggle.types'
import * as styles from './TileToggle.styles'
import Switch from '../Switch'
import { colors } from '../_utils/colors'

const TileToggle: FC<Props> = memo((props) => {
    const { className, darkBg, dataTestId, name, checked, onChange, loading } = props
    return (
        <div className={className} css={[styles.tileToggle, darkBg && styles.darkBg]} data-test-id={dataTestId}>
            <div css={styles.name}>
                {name}
                {loading && <ClipLoader color={colors.primaryDarken} css={styles.loading} size={16} />}
            </div>
            <Switch checked={checked} dataTestId={dataTestId?.concat('-switch')} disabled={loading} loading={loading} onChange={onChange} />
        </div>
    )
})

TileToggle.displayName = 'TileToggle'

export default TileToggle
