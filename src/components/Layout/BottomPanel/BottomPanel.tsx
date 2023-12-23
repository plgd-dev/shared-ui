import { FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Props } from './BottomPanel.types'
import * as styles from './BottomPanel.styles'

const BottomPanel: FC<Props> = (props) => {
    const { actionPrimary, actionSecondary, attribute, value, iframeMode, leftPanelCollapsed, show } = props
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
                            {!!attribute && <div css={styles.label}>{attribute}:&nbsp;</div>}
                            {!!value && <div css={styles.selectionInfo}>{value}</div>}
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
}

BottomPanel.displayName = 'BottomPanel'

export default BottomPanel
