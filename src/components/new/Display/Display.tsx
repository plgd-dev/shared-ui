import React, { FC } from 'react'
import { Props } from './Display.types'

const Display: FC<Props> = (props) => {
    return props.when ? props.children : null
}

Display.displayName = 'Display'

export default Display
