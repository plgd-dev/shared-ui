import { FC } from 'react'
import { Props } from './Layout.types'
import * as styles from './Layout.styles'

const Layout: FC<Props> = (props) => {
    const { leftPanel, header, content } = props

    return (
        <div css={styles.layout}>
            {leftPanel}

            <div css={styles.right}>
                {header}
                <div css={styles.content}>{content}</div>
            </div>
        </div>
    )
}

Layout.displayName = 'Layout'

export default Layout
