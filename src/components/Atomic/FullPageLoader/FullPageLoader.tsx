import { FC } from 'react'

import { Props } from './FullPageLoader.types'
import * as styles from './FullPageLoader.styles'
import PageLoader from '../PageLoader'

const FullPageLoader: FC<Props> = (props) => {
    const { i18n } = props

    return (
        <>
            <PageLoader loading noOffset className='auth-loader' />
            <div css={styles.holder}>{`${i18n.loading}...`}</div>
        </>
    )
}

FullPageLoader.displayName = 'FullPageLoader'

export default FullPageLoader
