import { FC } from 'react'
import { Props } from './Layout.types'
import * as styles from './Layout.styles'
import ConditionalWrapper from '../Atomic/ConditionalWrapper'

const Layout: FC<Props> = (props) => {
    const { leftPanel, header, content, isIframeMode, previewMode } = props

    return (
        <ConditionalWrapper
            condition={!!previewMode}
            wrapper={(c) => (
                <>
                    <div css={styles.previewMode}>{previewMode}</div>
                    {c}
                </>
            )}
        >
            <div css={[styles.layout, previewMode && styles.smallerLayout]}>
                {!isIframeMode && leftPanel}

                <div css={styles.right}>
                    {!isIframeMode && header}
                    <div css={styles.content}>{content}</div>
                </div>
            </div>
        </ConditionalWrapper>
    )
}

Layout.displayName = 'Layout'

export default Layout
