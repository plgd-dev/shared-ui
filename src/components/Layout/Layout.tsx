import { FC } from 'react'
import { Props } from './Layout.types'
import * as styles from './Layout.styles'

const Layout: FC<Props> = (props) => {
    const { dataTestId, leftPanel, header, content, isIframeMode, mockApiMode } = props

    return (
        <div css={styles.layout} data-test-id={dataTestId}>
            {!isIframeMode && leftPanel}
            {mockApiMode && <div css={styles.mockApiMode}>Mock API mode</div>}

            <div css={styles.right}>
                {!isIframeMode && header}
                <div css={styles.content}>{content}</div>
            </div>
        </div>
    )
}

Layout.displayName = 'Layout'

export default Layout
