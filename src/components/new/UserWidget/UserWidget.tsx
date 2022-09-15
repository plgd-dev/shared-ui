import { useRef, useState, memo } from 'react'
import classNames from 'classnames'
import { useIntl } from 'react-intl'
import { useClickOutside } from '../../../common/hooks'
import { messages as t } from './UserWidget.i18n'
import { Props } from './UserWidget.types'
import './UserWidget.scss'
import Avatar from 'react-avatar'
import { useAuth } from 'oidc-react'

const UserWidget = (props: Props) => {
    const { logout } = props
    const [expanded, setExpand] = useState(false)
    const { isLoading, userData } = useAuth()
    const { formatMessage: _ } = useIntl()
    const clickRef = useRef<HTMLDivElement>(null)
    useClickOutside(clickRef, () => setExpand(false))

    if (isLoading || !userData) {
        return null
    }

    return (
        <div id='user-widget' className='status-bar-item' ref={clickRef}>
            <div className='toggle' onClick={() => setExpand(!expanded)}>
                <div className='user-avatar'>
                    <Avatar name={userData.profile.name} size='30' round='50%' color='#255897' />
                </div>
                {userData.profile.name}
                <i
                    className={classNames('fas', {
                        'fa-chevron-down': !expanded,
                        'fa-chevron-up': expanded,
                    })}
                />
            </div>
            {expanded && (
                <div className='content'>
                    <span onClick={() => logout()}>{_(t.logOut)}</span>
                </div>
            )}
        </div>
    )
}

UserWidget.displayName = 'UserWidget'

export default UserWidget
