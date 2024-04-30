import { FC, memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import isFunction from 'lodash/isFunction'

import { Props, defaultProps } from './Footer.types'
import * as styles from './Footer.styles'
import { IconArrowTriangleFullUp } from '../../Atomic/Icon'

const Footer: FC<Props> = memo((props) => {
    const {
        id,
        className,
        innerPortalTarget,
        paginationComponent,
        contentLeft,
        recentTasksPortal,
        recentTasksPortalTitle,
        footerExpanded,
        setFooterExpanded,
        size,
    } = { ...defaultProps, ...props }

    const handleToggle = (e: any) => {
        e.preventDefault()
        isFunction(setFooterExpanded) && setFooterExpanded(!footerExpanded)
    }

    const LeftSide = () => {
        if (recentTasksPortalTitle) {
            return (
                <a css={styles.recentTasks} href='#' onClick={handleToggle}>
                    {recentTasksPortalTitle} <IconArrowTriangleFullUp css={[styles.icon, footerExpanded && styles.panelOpen]} />
                </a>
            )
        } else if (contentLeft) {
            return <div>{contentLeft}</div>
        } else {
            return <div />
        }
    }

    const footerHeight = useMemo(() => {
        if (footerExpanded) {
            return 420
        } else {
            return size === 'medium' ? 88 : 65
        }
    }, [size, footerExpanded])

    return (
        <motion.div
            layout
            animate={{
                height: footerHeight,
                flex: `0 0 ${footerHeight}`,
            }}
            className={className}
            css={styles.footer}
            exit={{
                height: size === 'medium' ? 88 : 65,
            }}
            id={id}
            initial={false}
            transition={{
                duration: 0.3,
            }}
        >
            {innerPortalTarget}
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
