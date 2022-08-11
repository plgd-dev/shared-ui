import { memo } from 'react'
import { LanguageSwitcher } from '../LanguageSwitcher'
import './StatusBar.scss'

const StatusBar = memo(() => (
    <>
        <div id='status-bar-shadow' className='status-bar' />
        <header id='status-bar' className='status-bar'>
            {/* Insert custom components here. */}
            <LanguageSwitcher />
            {/*<UserWidget />*/}
        </header>
    </>
))

StatusBar.displayName = 'StatusBar'

export default StatusBar
