import { FC, memo } from 'react'

import { Props } from './PageLoader.types'
import * as styles from './PageLoader.styles'

const PageLoader: FC<Props> = memo(({ loading, className, collapsed, noOffset }) => {
    if (!loading) {
        return null
    }

    return (
        <div aria-busy='true' className={className} css={[styles.pageLoader(collapsed), noOffset && styles.noOffset]} role='alert'>
            <div css={styles.bar}>
                <div css={styles.progress}>
                    <div css={[styles.subline, styles.inc]} />
                    <div css={[styles.subline, styles.dec]} />
                </div>
            </div>
        </div>
    )
})

PageLoader.displayName = 'PageLoader'

export default PageLoader
