import React, { FC } from 'react'

import Row from '../../../../Atomic/Grid/Row'
import Column from '../../../../Atomic/Grid/Column'
import Spacer from '../../../../Atomic/Spacer'
import * as ModalStrippedLineStyles from '../../../../Atomic/Modal/ModalStrippedLine/ModalStrippedLine.styles'
import * as styles from './FormGeneratorLine.styles'
import { Props } from './FormGeneratorLine.types'

const FormGeneratorLine: FC<Props> = (props) => (
    <Spacer type='pl-7'>
        <div css={styles.wrapper}>
            <div css={[styles.lineImg, props.isLast && styles.isLast, !props.label && styles.noBefore, props.isLast && !props.label && styles.lastGroup]}></div>
            {props.label ? (
                <Row css={styles.line}>
                    <Column css={ModalStrippedLineStyles.label} size={4}>
                        {props.label}
                    </Column>
                    <Column css={ModalStrippedLineStyles.component} size={8}>
                        {props.component}
                    </Column>
                </Row>
            ) : (
                props.component
            )}
        </div>
    </Spacer>
)

FormGeneratorLine.displayName = 'FormGeneratorLine'

export default FormGeneratorLine
