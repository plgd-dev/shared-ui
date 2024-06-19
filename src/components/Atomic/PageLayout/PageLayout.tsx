import React, { forwardRef } from 'react'

import { Props, defaultProps } from './PageLayout.types'
import * as styles from './PageLayout.styles'
import Headline from '../Headline'
import PageLoader from '../PageLoader'
import ConditionalWrapper from '../ConditionalWrapper'
import { useDocumentTitle } from '../../../common/hooks'
import Spacer from '../Spacer'

const PageLayout = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { children, dataTestId, headlineCustomContent, headlineStatusTag, title, header, headerBorder, footer, loading, notFound, collapsed, xPadding } = {
        ...defaultProps,
        ...props,
    }

    useDocumentTitle(title || '')

    return (
        <div css={styles.pageLayout} ref={ref}>
            <div css={styles.top}>
                <PageLoader className='auth-loader' collapsed={collapsed} loading={loading} />
                {notFound !== true && (
                    <div css={[styles.header, styles.padding, headerBorder && styles.headerBorder]}>
                        <div css={styles.left}>
                            <Headline css={styles.headline} dataTestId={dataTestId?.concat('-title')} type='h4'>
                                {title}
                            </Headline>
                            {headlineStatusTag && <div css={styles.statusTag}>{headlineStatusTag}</div>}
                            {headlineCustomContent && <Spacer type='pl-4'>{headlineCustomContent}</Spacer>}
                        </div>
                        <div css={styles.rightActions}>{header}</div>
                    </div>
                )}
                <ConditionalWrapper condition={xPadding === true} wrapper={(c) => <div css={[styles.padding, styles.contentPadding]}>{c}</div>}>
                    {children}
                </ConditionalWrapper>
            </div>
            {footer}
        </div>
    )
})

PageLayout.displayName = 'PageLayout'

export default PageLayout
