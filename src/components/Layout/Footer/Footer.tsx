import { FC, memo } from 'react'
import { motion } from 'framer-motion'
import isFunction from 'lodash/isFunction'
import { Props } from './Footer.types'
import * as styles from './Footer.styles'
import { Icon } from '../../Atomic/Icon'

const Footer: FC<Props> = memo((props) => {
    const { paginationComponent, recentTasksPortal, recentTasksPortalTitle, footerExpanded, setFooterExpanded } = props

    const handleToggle = (e: any) => {
        e.preventDefault()
        isFunction(setFooterExpanded) && setFooterExpanded(!footerExpanded)
    }

    const LeftSide = () => {
        if (recentTasksPortalTitle) {
            return (
                <a css={styles.recentTasks} href='packages/shared-ui/src/components/Layout/Footer#' onClick={handleToggle}>
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
            <div css={styles.footerInner}>
                <div css={styles.footerMainLine}>
                    <LeftSide />
                    <div>{paginationComponent}</div>
                </div>

                {recentTasksPortal}
            </div>
        </motion.div>
    )
})

Footer.displayName = 'Footer'

export default Footer
