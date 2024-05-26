import React, { forwardRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { Information, Props, defaultProps } from './TileExpand.types'
import * as styles from './TileExpand.styles'
import IconArrowDownNoPadding from '../Icon/components/IconArrowDownNoPadding'
import { convertSize, IconCopy } from '../Icon'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import Tooltip from '../Tooltip'
import { copyToClipboard } from '../../../common/utils'

const TileExpand = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { className, defaultOpen, error, hasExpand, i18n, information, statusTag, title, time } = { ...defaultProps, ...props }

    const [show, setShow] = useState(defaultOpen ?? false)

    return (
        <div className={className} css={styles.tileExpand} ref={ref}>
            <div css={styles.header} onClick={hasExpand ? () => setShow(!show) : undefined}>
                <div css={styles.left}>
                    <div css={styles.title}>
                        {title}
                        {!!statusTag && <span css={styles.tagSpace}>{statusTag}</span>}
                    </div>
                    {!!time && <div css={styles.time}>{time}</div>}
                </div>
                {hasExpand && (
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
                )}
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
                            {!!error && (
                                <div css={styles.group}>
                                    <div css={styles.groupHeadline}>{error.groupTitle}</div>
                                    <div css={styles.error}>
                                        <div css={styles.errorTitle}>{error.title}</div>
                                        <div css={styles.errorMessage}>{error.message}</div>
                                    </div>
                                </div>
                            )}
                            {!!information && (
                                <div css={styles.group}>
                                    <div css={styles.groupHeadline}>{information.groupTitle}</div>
                                    {information.rows.map((info: Information, k) => (
                                        <div css={styles.infoLine} key={info.attribute || k}>
                                            <Row>
                                                <Column size={5}>
                                                    <div css={styles.attribute}>{info.attribute}</div>
                                                </Column>
                                                <Column size={7}>
                                                    <div css={styles.value}>
                                                        <span css={styles.valueRaw}>{info.value}</span>
                                                        <Tooltip
                                                            content={i18n.copy}
                                                            css={styles.icon}
                                                            id={`tooltip-group-${info.attribute}`}
                                                            portalTarget={undefined}
                                                        >
                                                            <IconCopy
                                                                onClick={() => copyToClipboard(info?.copyValue || (info.value as string), info.certFormat)}
                                                            />
                                                        </Tooltip>
                                                    </div>
                                                </Column>
                                            </Row>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
})

TileExpand.displayName = 'TileExpand'

export default TileExpand
