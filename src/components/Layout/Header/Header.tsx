import { FC } from 'react'
import { Props, defaultProps } from './Header.types'
import * as styles from './Header.styles'
import { convertSize, IconSettings } from '../../Atomic/Icon'
import NotificationCenter from '../../Atomic/NotificationCenter'

const Header: FC<Props> = (props) => {
    const { breadcrumbs, userWidget, useNotificationCenter } = { ...defaultProps, ...props }

    return (
        <div css={styles.header}>
            <div css={styles.left}>
                <div id='header-icon-collapse-portal-target'></div>
                {breadcrumbs && <div css={styles.breadcrumbs}>{breadcrumbs}</div>}
            </div>
            <div css={styles.right}>
                <ul css={styles.actions}>
                    <li>
                        <a css={styles.actionItem} href='packages/shared-ui/src/components/Layout/Header#'>
                            <IconSettings {...convertSize(20)} />
                        </a>
                    </li>
                    {useNotificationCenter && (
                        <li>
                            <NotificationCenter />
                        </li>
                    )}
                </ul>
                {userWidget}
            </div>
        </div>
    )
}

Header.displayName = 'Header'
Header.defaultProps = defaultProps

export default Header
