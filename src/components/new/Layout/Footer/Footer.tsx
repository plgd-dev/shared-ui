import { FC, memo } from 'react'
import { Props } from './Footer.types'
import * as styles from './Footer.styles'
import { Icon } from '../../Icon'
import { motion } from 'framer-motion'

const Footer: FC<Props> = memo((props) => {
    const { paginationComponent, recentTasksPortal, recentTasksPortalTitle, footerExpanded, setFooterExpanded } = props

    const handleToggle = (e: any) => {
        e.preventDefault()
        setFooterExpanded(!footerExpanded)
    }

    const LeftSide = () => {
        if (recentTasksPortalTitle) {
            return (
                <a href='#' css={styles.recentTasks} onClick={handleToggle}>
                    {recentTasksPortalTitle} <Icon icon='arrow-triangle-full-up' css={[styles.icon, footerExpanded && styles.panelOpen]} />
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
                height: footerExpanded ? 420 : 65,
                flex: `0 0 ${footerExpanded ? 420 : 65}`,
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

            {recentTasksPortal}
        </motion.div>
    )
})

Footer.displayName = 'Footer'

export default Footer
