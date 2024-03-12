import React, { FC } from 'react'

import * as styles from '../SimpleStripTable/SimpleStripTable.styles'
import IconCopy from '../Icon/components/IconCopy'
import { copyToClipboard } from '../../../common/utils'
import Tooltip from '../Tooltip'

const CopyIcon: FC<any> = (props) => {
    const { i18n, value } = props

    return (
        <Tooltip content={i18n.content} css={styles.copy}>
            <IconCopy onClick={() => copyToClipboard(value)} />
        </Tooltip>
    )
}

CopyIcon.displayName = 'CopyIcon'

export default CopyIcon
