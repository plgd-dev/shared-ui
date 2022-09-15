import { memo, ReactNode } from 'react'
import LanguageSwitcher from '../LanguageSwitcher'
import './StatusBar.scss'

const StatusBar = memo(({ children }: { children?: ReactNode }) => (
    <>
        <div id='status-bar-shadow' className='status-bar' />
        <header id='status-bar' className='status-bar'>
            {/* Insert custom components here. */}
            <LanguageSwitcher />
            {children}
        </header>
    </>
))

StatusBar.displayName = 'StatusBar'

export default StatusBar
