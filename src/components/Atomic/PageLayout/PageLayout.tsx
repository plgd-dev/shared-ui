import React, { FC, memo } from 'react'
import { Helmet } from 'react-helmet'

import { Props } from './PageLayout.types'
import * as styles from './PageLayout.tsx.styles'
import Headline from '../Headline'
import PageLoader from '../PageLoader'

const PageLayout: FC<Props> = memo((props) => {
    const { children, dataTestId, headlineStatusTag, title, header, footer, loading } = props
    return (
        <div css={styles.pageLayout}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div css={styles.top}>
                <PageLoader className='auth-loader' loading={loading} />
                <div css={styles.header}>
                    <div css={styles.left}>
                        <Headline css={styles.headline} dataTestId={dataTestId?.concat('-title')} type='h4'>
                            {title}
                        </Headline>
                        {headlineStatusTag && <div css={styles.statusTag}>{headlineStatusTag}</div>}
                    </div>
                    <div css={styles.rightActions}>{header}</div>
                </div>
                {children}
            </div>
            {footer}
        </div>
    )
})

PageLayout.displayName = 'PageLayout'

export default PageLayout
