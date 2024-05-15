import React, { FC } from 'react'
import isFunction from 'lodash/isFunction'

import Spacer from '../../../../Atomic/Spacer'
import Headline from '../../../../Atomic/Headline'
import { Props } from './SubHeadline.types'
import * as styles from './SubHeadline.styles'
import IconArrowDown from '../../../../Atomic/Icon/components/IconArrowDown'
import { convertSize } from '../../../../Atomic/Icon'

const SubHeadline: FC<Props> = (props) => (
    <Spacer css={styles.wrapper} type='mb-4'>
        {props.hasLine && <div css={styles.line}></div>}
        <a
            css={styles.headlineLine}
            href='#'
            onClick={(e) => {
                e.preventDefault()
                isFunction(props.onToggle) && props.onToggle()
            }}
        >
            <Headline css={styles.headline} type='h5'>
                {props.headline}
            </Headline>
            {isFunction(props.onToggle) && (
                <span css={[styles.icon, props.expanded && styles.iconExpanded]}>
                    <IconArrowDown {...convertSize(12)} />
                </span>
            )}
        </a>
    </Spacer>
)

SubHeadline.displayName = 'SubHeadline'

export default SubHeadline
