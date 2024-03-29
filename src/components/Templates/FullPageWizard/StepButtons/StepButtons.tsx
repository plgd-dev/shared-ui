import React, { FC } from 'react'
import isFunction from 'lodash/isFunction'

import * as commonStyles from '../FullPageWizardCommon.styles'
import * as styles from '../FullPageWizard.styles'
import { Props } from './StepButtons.types'
import Spacer from '../../../Atomic/Spacer'
import Button from '../../../Atomic/Button'
import Tooltip from '../../../Atomic/Tooltip'

const StepButtons: FC<Props> = (props) => {
    const { disableNext, i18n, onClickBack, onClickNext } = props
    const requiredMessageSplit = i18n.requiredMessage.split('(*)')

    return (
        <>
            <Spacer css={commonStyles.description} type='mt-10'>
                {requiredMessageSplit[0]}(<span css={styles.requiredStar}>*</span>){requiredMessageSplit[1]}
            </Spacer>
            <Spacer css={commonStyles.buttons} type='mt-4'>
                {isFunction(onClickBack) && (
                    <Button
                        onClick={(e) => {
                            e.preventDefault()
                            isFunction(onClickBack) && onClickBack()
                        }}
                        size='big'
                        variant='tertiary'
                    >
                        {i18n.back}
                    </Button>
                )}
                <Tooltip content={disableNext ? i18n.formError : undefined} placement='top'>
                    <div style={{ width: '100%' }}>
                        <Button
                            fullWidth
                            disabled={disableNext}
                            onClick={(e) => {
                                e.preventDefault()
                                isFunction(onClickNext) && onClickNext()
                            }}
                            size='big'
                            variant='primary'
                        >
                            {i18n.continue}
                        </Button>
                    </div>
                </Tooltip>
            </Spacer>
        </>
    )
}

StepButtons.displayName = 'StepButtons'

export default StepButtons
