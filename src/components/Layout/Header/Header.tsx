import { FC } from 'react'
import { Props } from './Header.types'
import * as styles from './Header.styles'

const Header: FC<Props> = (props) => {
    const { breadcrumbs, configButton, headerIconCollapsePortalTarget, contentLeft, notificationCenter, userWidget } = props

    return (
        <div css={styles.header}>
            <div css={styles.left}>
                {contentLeft}
                {headerIconCollapsePortalTarget ?? <div id='header-icon-collapse-portal-target'></div>}
                {breadcrumbs && <div css={styles.breadcrumbs}>{breadcrumbs}</div>}
            </div>
            <div css={styles.right}>
                <ul css={styles.actions}>
                    {configButton && <li css={styles.action}>{configButton}</li>}
                    {notificationCenter && <li css={styles.action}>{notificationCenter}</li>}
                </ul>
                {userWidget}
            </div>
        </div>
    )
}

Header.displayName = 'Header'

export default Header
