import { FC, memo } from 'react'
import { Props } from './PageLoader.types'

const PageLoader: FC<Props> = memo(({ loading, className }) =>
    loading ? (
        <div id='page-loader' role='alert' aria-busy='true' className={className}>
            <div className='bar'>
                <div className='progress'>
                    <div className='subline inc' />
                    <div className='subline dec' />
                </div>
            </div>
        </div>
    ) : null
)

PageLoader.displayName = 'PageLoader'

export default PageLoader
