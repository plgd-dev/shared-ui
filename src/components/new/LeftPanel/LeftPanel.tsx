import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

import logoBig from '@/assets/img/plgd-logo-full-white.svg'
import logoSmall from '@/assets/img/plgd-logo-alt-white.svg'
import './LeftPanel.scss'
import { Props } from './LeftPanel.types'

const LeftPanel:FC<Props> = memo(({ children }) => (
    <div id='left-panel'>
        <Link to='/' className='logo'>
            <img src={logoBig} alt='PLGD Logo Big' className='logo-big' />
            <img src={logoSmall} alt='PLGD Logo Small' className='logo-small' />
        </Link>
        {children}
    </div>
))

LeftPanel.displayName = 'LeftPanel'

export default LeftPanel
