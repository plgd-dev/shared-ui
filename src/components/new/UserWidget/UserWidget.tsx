import { useRef, useState, memo } from 'react'
import classNames from 'classnames'
import { useIntl } from 'react-intl'
import { useClickOutside } from '../../../common/hooks'
import { messages as t } from './UserWidget.i18n'
import { Props } from './UserWidget.types'
import './UserWidget.scss'

const UserWidget = memo((props: Props) => {
    const {isLoading, userData, logout } = props
    const [expanded, setExpand] = useState(false)
    const { formatMessage: _ } = useIntl()
    const clickRef = useRef<any>()
    useClickOutside(clickRef, () => setExpand(false))

    if (!isLoading) {
        return null
    }

    return (
        <div id='user-widget' className='status-bar-item' ref={clickRef}>
            <div className='toggle' onClick={() => setExpand(!expanded)}>
                {/*<div className='user-avatar'>*/}
                {/*    <img src={userData.picture} alt='User Avatar' />*/}
                {/*</div>*/}
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
})

UserWidget.displayName = 'UserWidget'

export default UserWidget