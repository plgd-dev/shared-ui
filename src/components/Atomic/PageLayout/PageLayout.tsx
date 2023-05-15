import React, { FC, memo } from 'react'
import { Props } from './PageLayout.types'
import * as styles from './PageLayout.tsx.styles'
import Headline from '../Headline'
import { Helmet } from 'react-helmet'

const PageLayout: FC<Props> = memo((props) => {
    const { children, headlineStatusTag, title, header, footer } = props
    return (
        <div css={styles.pageLayout}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div css={styles.top}>
                <div css={styles.header}>
                    <div css={styles.left}>
                        <Headline css={styles.headline} type='h4'>
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
