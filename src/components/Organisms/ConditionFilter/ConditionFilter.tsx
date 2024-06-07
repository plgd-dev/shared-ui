import React, { FC, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { Props } from './ConditionFilter.types'
import * as styles from './ConditionFilter.styles'
import IconArrowDownNoPadding from '../../Atomic/Icon/components/IconArrowDownNoPadding'
import { convertSize } from '../../Atomic/Icon'
import Spacer from '../../Atomic/Spacer'
import Headline from '../../Atomic/Headline'
import SimpleStripTable from '../../Atomic/SimpleStripTable'
import IconTrash from '../../Atomic/Icon/components/IconTrash'
import isFunction from 'lodash/isFunction'

const ConditionFilter: FC<Props> = (props) => {
    const { className, children, dataTestId, defaultOpen, listName, listOfItems, onItemDelete, status, title } = props

    const [show, setShow] = useState(defaultOpen ?? false)

    return (
        <div className={className} css={styles.filter} data-test-id={dataTestId}>
            <div css={styles.header} onClick={() => setShow(!show)}>
                <div css={styles.left}>
                    <div css={styles.title}>{title}</div>
                    {status}
                </div>
                <div css={styles.right}>
                    <motion.div
                        animate={{
                            rotate: show ? 180 : 0,
                        }}
                        className='expander'
                        css={styles.expander}
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
                        <div css={styles.content}>
                            <div css={styles.inputBox}>{children}</div>

                            {listOfItems && listOfItems.length > 0 && listName && isFunction(onItemDelete) && (
                                <Spacer type='pt-6'>
                                    <Spacer type='mb-3'>
                                        <Headline type='h6'>{listName}</Headline>
                                    </Spacer>

                                    <SimpleStripTable
                                        lastRowBorder={false}
                                        leftColSize={10}
                                        rightColSize={2}
                                        rows={listOfItems.map((item, key) => ({
                                            attribute: <span css={styles.listItem}>{item}</span>,
                                            value: <IconTrash css={styles.listIcon} onClick={isFunction(onItemDelete) ? () => onItemDelete(key) : undefined} />,
                                        }))}
                                    />
                                </Spacer>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

ConditionFilter.displayName = 'ConditionFilter'

export default ConditionFilter
