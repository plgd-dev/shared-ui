import { FC, memo } from 'react'

import { Props } from './PageLoader.types'
import * as styles from './PageLoader.styles'

const PageLoader: FC<Props> = memo(({ loading, className }) =>
    loading ? (
        <div aria-busy='true' className={className} css={styles.pageLoader} role='alert'>
            <div css={styles.bar}>
                <div css={styles.progress}>
                    <div css={[styles.subline, styles.inc]} />
                    <div css={[styles.subline, styles.dec]} />
                </div>
            </div>
        </div>
    ) : null
)

PageLoader.displayName = 'PageLoader'

export default PageLoader
