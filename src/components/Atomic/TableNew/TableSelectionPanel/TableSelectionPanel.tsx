import { FC, memo } from 'react'

import { Props } from './TableSelectionPanel.types'
import BottomPanel from '../../../Layout/BottomPanel/BottomPanel'

const TableSelectionPanel: FC<Props> = memo((props) => {
    const { i18n, selectionInfo, ...rest } = props
    return <BottomPanel {...rest} attribute={i18n.select} value={selectionInfo} />
})

TableSelectionPanel.displayName = 'TableSelectionPanel'

export default TableSelectionPanel
