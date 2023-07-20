import React from 'react'
import { Props } from './Display.types'

const Display = (props: Props) => (props.when ? <>{props.children}</> : <></>)

Display.displayName = 'Display'

export default Display
