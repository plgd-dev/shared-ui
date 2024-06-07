import React, { FC, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { Props } from './ResourceToggleCreator.types'
import IconArrowDownNoPadding from '../../Atomic/Icon/components/IconArrowDownNoPadding'
import IconTrash from '../../Atomic/Icon/components/IconTrash'
import { convertSize } from '../../Atomic/Icon'
import * as styles from './ResourceToggleCreator.styles'

const ResourceToggleCreator: FC<Props> = (props) => {
    const { className, dataTestId, defaultOpen, id, title } = props

    const [show, setShow] = useState(defaultOpen ?? false)

    return (
        <div className={className} css={styles.creator} data-test-id={dataTestId} id={id}>
            <div css={styles.header} onClick={() => setShow(!show)}>
                <div css={styles.title}>{title}</div>
                <div css={styles.right}>
                    <div css={styles.icon}>
                        <IconTrash {...convertSize(20)} />
                    </div>
                    <div css={styles.rightSpacer}></div>
                    <motion.div
                        animate={{
                            rotate: show ? 180 : 0,
                        }}
                        className='expander'
                        css={styles.icon}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <IconArrowDownNoPadding {...convertSize(20)} />
                    </motion.div>
                </div>
            </div>
            <AnimatePresence>
                {show && (
                    <motion.div
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{
                            opacity: 0,
                            height: 0,
                        }}
                        initial={{ opacity: 0, height: 0 }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <div css={styles.content}></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

ResourceToggleCreator.displayName = 'ResourceToggleCreator'

export default ResourceToggleCreator
