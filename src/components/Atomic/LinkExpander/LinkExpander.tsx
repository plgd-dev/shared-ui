import React, { FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Link from '../Link'
import * as styles from './LinkExpander.styles'

const LinkExpander: FC<any> = (props) => {
    const { children, i18n, show, toggleView } = props

    const AnimatedLink = () => (
        <AnimatePresence>
            <motion.div
                animate={{ opacity: 1 }}
                exit={{
                    opacity: 0,
                }}
                initial={{ opacity: 0 }}
                transition={{
                    duration: 0.3,
                }}
            >
                <Link
                    href='#'
                    onClick={(e) => {
                        e.preventDefault()
                        toggleView(!show)
                    }}
                    size='big'
                >
                    {`${show ? i18n.hide : i18n.show} ${i18n.name}`}
                </Link>
            </motion.div>
        </AnimatePresence>
    )

    return (
        <div>
            <AnimatePresence>
                {show && (
                    <motion.div
                        animate={{ opacity: 1, height: 'auto' }}
                        css={styles.expandContent}
                        exit={{
                            opacity: 0,
                            height: 0,
                        }}
                        initial={{ opacity: 0, height: 0 }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <>
                            {children}
                            {show && <AnimatedLink />}
                        </>
                    </motion.div>
                )}
            </AnimatePresence>
            {!show && <AnimatedLink />}
        </div>
    )
}

LinkExpander.displayName = 'LinkExpander'

export default LinkExpander
