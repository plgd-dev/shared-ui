import { FC } from 'react'
import { Props } from './UnInitializedScreenStep1.types'
import * as styles from '../../UnInitializedScreen.styles'
import { DEVICE_AUTH_MODE } from '../../../../constants'

const UnInitializedScreenStep1: FC<Props> = (props) => {
    const { setAuthMode } = props

    return (
        <div css={styles.step}>
            <h3 css={styles.headline}>%DEVICE_AUTH_MODE%</h3>

            <div css={styles.tileRow}>
                <div css={styles.tile} onClick={() => setAuthMode(DEVICE_AUTH_MODE.X509)}>
                    {DEVICE_AUTH_MODE.X509}
                </div>
                <div css={styles.tile} onClick={() => setAuthMode(DEVICE_AUTH_MODE.PRE_SHARED_KEY)}>
                    {DEVICE_AUTH_MODE.PRE_SHARED_KEY}
                </div>
            </div>
        </div>
    )
}

UnInitializedScreenStep1.displayName = 'UnInitializedScreenStep1'

export default UnInitializedScreenStep1
