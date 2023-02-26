import { FC, memo, useState } from 'react'
import { Props } from './Footer.types'
import * as styles from './Footer.styles'
import { Icon } from '../../Icon'
import { motion, AnimatePresence } from 'framer-motion'

const Footer: FC<Props> = memo((props) => {
    const { paginationComponent, recentTasks, recentTasksTitle } = props
    const [recentPanelOpen, setRecentPanelOpen] = useState(false)

    const handleToggle = (e: any) => {
        e.preventDefault()
        setRecentPanelOpen(!recentPanelOpen)
    }

    const LeftSide = () => {
        if (recentTasks && recentTasksTitle) {
            return (
                <a href='#' css={styles.recentTasks} onClick={handleToggle}>
                    {recentTasksTitle} <Icon icon='arrow-triangle-full-up' css={[styles.icon, recentPanelOpen && styles.panelOpen]} />
                </a>
            )
        } else {
            return <div />
        }
    }

    return (
        <motion.div
            layout
            initial={false}
            animate={{
                height: recentPanelOpen ? 420 : 65,
                flex: `0 0 ${recentPanelOpen ? 420 : 65}`,
            }}
            exit={{
                height: 65,
            }}
            transition={{
                duration: 0.3,
            }}
            css={styles.footer}
        >
            <div css={styles.footerMainLine}>
                <LeftSide />
                <div>{paginationComponent}</div>
            </div>

            <AnimatePresence mode='wait'>
                {recentPanelOpen && (
                    <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        exit={{
                            opacity: 0,
                        }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        {recentTasks}
                        <div style={{ height: 24 }} />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
})

Footer.displayName = 'Footer'

export default Footer
