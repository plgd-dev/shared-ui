import { FC } from 'react'

import { Props } from './AppLoader.types'
import PageLoader from '../../../../components/Atomic/PageLoader'

const AppLoader: FC<Props> = (props) => {
    const { i18n } = props
    return (
        <>
            <PageLoader loading className='auth-loader' />
            <div className='page-loading-text'>{`${i18n.loading}...`}</div>
        </>
    )
}

AppLoader.displayName = 'AppLoader'

export default AppLoader
