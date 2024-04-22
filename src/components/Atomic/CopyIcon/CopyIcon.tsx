import React, { FC } from 'react'

import * as styles from '../SimpleStripTable/SimpleStripTable.styles'
import IconCopy from '../Icon/components/IconCopy'
import { copyToClipboard } from '../../../common/utils'
import Tooltip from '../Tooltip'
import { Props } from './CopyIcon.types'

const CopyIcon: FC<Props> = (props) => {
    const { dataTestId, i18n, value } = props

    return (
        <Tooltip content={i18n.content} css={styles.copy}>
            <IconCopy data-test-id={dataTestId} onClick={() => copyToClipboard(value.toString())} />
        </Tooltip>
    )
}

CopyIcon.displayName = 'CopyIcon'

export default CopyIcon
