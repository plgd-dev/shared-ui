import React, { FC, memo } from 'react'
import { Helmet } from 'react-helmet'

import { Props, defaultProps } from './PageLayout.types'
import * as styles from './PageLayout.styles'
import Headline from '../Headline'
import PageLoader from '../PageLoader'
import ConditionalWrapper from '../ConditionalWrapper'

const PageLayout: FC<Props> = memo((props) => {
    const { children, dataTestId, headlineStatusTag, title, header, headerBorder, footer, loading, collapsed, xPadding } = { ...defaultProps, ...props }
    return (
        <div css={styles.pageLayout}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div css={styles.top}>
                <PageLoader className='auth-loader' collapsed={collapsed} loading={loading} />
                <div css={[styles.header, styles.padding, headerBorder && styles.headerBorder]}>
                    <div css={styles.left}>
                        <Headline css={styles.headline} dataTestId={dataTestId?.concat('-title')} type='h4'>
                            {title}
                        </Headline>
                        {headlineStatusTag && <div css={styles.statusTag}>{headlineStatusTag}</div>}
                    </div>
                    <div css={styles.rightActions}>{header}</div>
                </div>
                <ConditionalWrapper condition={xPadding === true} wrapper={(c) => <div css={[styles.padding, styles.contentPadding]}>{c}</div>}>
                    {children}
                </ConditionalWrapper>
            </div>
            {footer}
        </div>
    )
})

PageLayout.displayName = 'PageLayout'
PageLayout.defaultProps = defaultProps

export default PageLayout
