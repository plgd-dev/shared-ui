import { FC, SyntheticEvent } from "react";
import { Props } from './Header.types'
import * as styles from './Header.styles'
import { Icon } from '../../Icon'
import isFunction from 'lodash/isFunction'

const Header: FC<Props> = (props) => {
    const { breadcrumbs, onCollapseToggle, userWidget } = props

    const handleCollapseToggle = (e: SyntheticEvent) => {
        e.preventDefault()
        e.stopPropagation()

        isFunction(onCollapseToggle) && onCollapseToggle()
    }

    return (
        <div css={styles.header}>
            <div css={styles.left}>
                <a css={styles.iconCollapse} href='#' onClick={(e) => handleCollapseToggle(e)}>
                    <Icon icon='collapse' size={24} />
                </a>
                {breadcrumbs && <div css={styles.breadcrumbs}>{breadcrumbs}</div>}
            </div>
            <div css={styles.right}>
                <ul css={styles.actions}>
                    <li>
                        <a css={styles.actionItem} href='#'>
                            <Icon icon='settings' size={20} />
                        </a>
                    </li>
                    <li>
                        <a css={styles.actionItem} href='#'>
                            <Icon icon='notification' size={20} />
                        </a>
                    </li>
                </ul>
                {userWidget}
            </div>
        </div>
    )
}

Header.displayName = 'Header'

export default Header
