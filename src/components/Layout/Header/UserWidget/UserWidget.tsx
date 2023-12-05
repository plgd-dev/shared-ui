import { FC, memo } from 'react'
import Avatar from 'react-avatar'
import isFunction from 'lodash/isFunction'

import { Props } from './UserWidget.types'
import * as styles from './UserWidget.styles'
import { convertSize } from '../../../Atomic/Icon'
import IconLogout from '../../../Atomic/Icon/components/IconLogout'

const UserWidget: FC<Props> = memo((props) => {
    const { name, description, image, loading, dataTestId, onLogout, logoutTitle } = props

    if (loading) {
        return null
    }

    return (
        <div css={styles.widgetReference} data-test-id={dataTestId}>
            <div css={styles.userWidget}>
                {image && <div css={styles.image}>{typeof image === 'string' ? <img alt={name} src={image} /> : image}</div>}
                {!image && (
                    <div css={styles.image}>
                        <Avatar color='#255897' name={name} round='50%' size='44' />
                    </div>
                )}
                <div>
                    <div css={styles.name}>{name}</div>
                    {description && <div css={styles.description}>{description}</div>}
                </div>
            </div>
            {isFunction(onLogout) && logoutTitle && (
                <a
                    css={styles.logoutIcon}
                    data-test-id={dataTestId?.concat('-icon')}
                    href='#'
                    onClick={(e) => {
                        e.preventDefault()
                        onLogout()
                    }}
                    title={logoutTitle}
                >
                    <IconLogout {...convertSize(24)} />
                </a>
            )}
        </div>
    )
})

UserWidget.displayName = 'UserWidget'

export default UserWidget
