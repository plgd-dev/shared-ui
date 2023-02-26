import { FC, memo } from 'react'
import { Props } from './TableSelectionPanel.types'
import * as styles from './TableSelectionPanel.styles'
import { motion, AnimatePresence } from 'framer-motion'

const TableSelectionPanel: FC<Props> = memo((props) => {
    const { actionPrimary, actionSecondary, leftPanelCollapsed, selectionInfo, show } = props

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    exit={{
                        opacity: 0,
                        y: 150,
                    }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.3,
                    }}
                    css={[styles.selectionPanel, leftPanelCollapsed && styles.isLeftPanelCollapsed]}
                >
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
                </motion.div>
            )}
        </AnimatePresence>
    )
})

TableSelectionPanel.displayName = 'TableSelectionPanel'

export default TableSelectionPanel
