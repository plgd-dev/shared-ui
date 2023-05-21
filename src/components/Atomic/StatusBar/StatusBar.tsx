import { memo, ReactNode } from 'react'
import LanguageSwitcher from '../LanguageSwitcher'
import './StatusBar.scss'

const StatusBar = memo(({ children }: { children?: ReactNode }) => (
    <>
        <div className='status-bar' id='status-bar-shadow' />
        <header className='status-bar' id='status-bar'>
            {/* Insert custom components here. */}
            <LanguageSwitcher supportedLanguages={[]} />
            {children}
        </header>
    </>
))

StatusBar.displayName = 'StatusBar'

export default StatusBar
