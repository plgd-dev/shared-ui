import { FC } from 'react'
import { Props } from './Header.types'
import * as styles from './Header.styles'
// import { convertSize, IconSettings } from '../../Atomic/Icon'

const Header: FC<Props> = (props) => {
    const { breadcrumbs, configButton, notificationCenter, userWidget } = props

    return (
        <div css={styles.header}>
            <div css={styles.left}>
                <div id='header-icon-collapse-portal-target'></div>
                {breadcrumbs && <div css={styles.breadcrumbs}>{breadcrumbs}</div>}
            </div>
            <div css={styles.right}>
                <ul css={styles.actions}>
                    {configButton && <li>{configButton}</li>}
                    {/* <li>*/}
                    {/*    <a css={styles.actionItem} href='#'>*/}
                    {/*        <IconSettings {...convertSize(20)} />*/}
                    {/*    </a>*/}
                    {/* </li>*/}
                    {notificationCenter && <li>{notificationCenter}</li>}
                </ul>
                {userWidget}
            </div>
        </div>
    )
}

Header.displayName = 'Header'

export default Header
