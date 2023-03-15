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
                <a css={styles.recentTasks} href='#' onClick={handleToggle}>
                    {recentTasksPortalTitle} <Icon css={[styles.icon, footerExpanded && styles.panelOpen]} icon='arrow-triangle-full-up' />
                </a>
            )
        } else {
            return <div />
        }
    }

    return (
        <motion.div
            layout
            animate={{
                height: footerExpanded ? 420 : 65,
                flex: `0 0 ${footerExpanded ? 420 : 65}`,
            }}
            css={styles.footer}
            exit={{
                height: 65,
            }}
            initial={false}
            transition={{
                duration: 0.3,
            }}
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
