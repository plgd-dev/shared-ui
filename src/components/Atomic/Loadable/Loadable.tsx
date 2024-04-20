import React, { FC } from 'react'

import IconLoader from '../Loader/IconLoader'
import { Props } from './Loadable.types'

const Loadable: FC<Props> = (props) => {
    const { condition, children } = props
    return condition ? children : <IconLoader center className='loader-icon' size={20} type='secondary' />
}

Loadable.displayName = 'Loadable'

export default Loadable
