import { FC, memo } from 'react'
import { Props } from './TableSelectionPanel.types'
import * as styles from './TableSelectionPanel.styles'
import { CSSTransition } from 'react-transition-group'

const TableSelectionPanel: FC<Props> = memo((props) => {
    const { actionPrimary, actionSecondary, leftPanelCollapsed, selectionInfo, show } = props
    return (
        <div css={[styles.selectionPanel, leftPanelCollapsed && styles.isLeftPanelCollapsed]}>
            <CSSTransition appear={true} classNames='item' in={show} timeout={0}>
                <div css={styles.inner}>
                    <div css={styles.left}>
                        <div css={styles.label}>Select:&nbsp;</div>
                        <div css={styles.selectionInfo}>{selectionInfo}</div>
                    </div>
                    <div css={styles.right}>
                        {actionSecondary}
                        {actionPrimary}
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
})

TableSelectionPanel.displayName = 'TableSelectionPanel'

export default TableSelectionPanel
