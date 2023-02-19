import React, { FC } from 'react'
import { Props } from './Bell.types'
import { Icon } from '../../../Icon'
import * as styles from './Bell.styles'

const Bell: FC<Props> = (props) => (
    <a
        ref={props.innerRef}
        href='#'
        css={[styles.bell, props.hasUnRead && styles.hasUnRead]}
        onClick={(e) => {
            e.preventDefault()
            props.onClick()
        }}
    >
        <Icon icon='bell' size={24} />
    </a>
)

Bell.displayName = 'Bell'

export default Bell
