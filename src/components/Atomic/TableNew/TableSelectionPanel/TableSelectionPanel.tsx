import { FC, memo } from 'react'
import { Props } from './TableSelectionPanel.types'
import * as styles from './TableSelectionPanel.styles'
import { motion, AnimatePresence } from 'framer-motion'

const TableSelectionPanel: FC<Props> = memo((props) => {
    const { actionPrimary, actionSecondary, i18n, iframeMode, leftPanelCollapsed, selectionInfo, show } = props

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    css={[styles.selectionPanel, leftPanelCollapsed && styles.isLeftPanelCollapsed, iframeMode && styles.iframeMode]}
                    exit={{
                        opacity: 0,
                        y: 150,
                    }}
                    initial={{ opacity: 0, y: 150 }}
                    transition={{
                        duration: 0.3,
                    }}
                >
                    <div css={styles.inner}>
                        <div css={styles.left}>
                            <div css={styles.label}>{i18n.select}:&nbsp;</div>
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
