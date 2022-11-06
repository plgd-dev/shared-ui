import { FC } from 'react'
import { Props, defaultProps } from './Layout.types'
import * as styles from './Layout.styles'

const Layout: FC<Props> = (props) => {
    const { leftPanel, header, collapsedMenu, content, footer } = { ...defaultProps, ...props }

    return (
        <div css={styles.layout}>
            <div css={[styles.left, collapsedMenu && styles.collapsed]}>{leftPanel}</div>
            <div css={styles.right}>
                {header}
                <div css={styles.content}>{content}</div>
                {footer}
            </div>
        </div>
    )
}

Layout.displayName = 'Layout'
Layout.defaultProps = defaultProps

export default Layout
