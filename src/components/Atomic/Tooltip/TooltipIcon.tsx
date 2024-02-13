import React, { FC } from 'react'

import IconQuestion from '../Icon/components/IconQuestion'
import { convertSize } from '../Icon'
import Tooltip from './Tooltip'
import { TooltipIconProps as Props } from './Tooltip.types'
import * as styles from './Tooltip.styles'

const TooltipIcon: FC<Props> = (props) => {
    const { iconSize, ...rest } = props
    return (
        <Tooltip {...rest} delay={200} maxWidth={260} portalTarget={document.getElementById('modal-root')!}>
            <IconQuestion {...convertSize(iconSize || 16)} css={styles.iconTooltip} />
        </Tooltip>
    )
}

TooltipIcon.displayName = 'TooltipIcon'

export default TooltipIcon
