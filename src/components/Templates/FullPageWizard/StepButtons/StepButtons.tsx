import React, { FC } from 'react'
import isFunction from 'lodash/isFunction'

import * as commonStyles from '../FullPageWizardCommon.styles'
import * as styles from '../FullPageWizard.styles'
import { Props, defaultProps } from './StepButtons.types'
import Spacer from '../../../Atomic/Spacer'
import Button from '../../../Atomic/Button'
import Tooltip from '../../../Atomic/Tooltip'

const StepButtons: FC<Props> = (props) => {
    const { disableNext, dataTestId, i18n, onClickBack, onClickNext, showRequiredMessage } = { ...defaultProps, ...props }
    const requiredMessageSplit = i18n.requiredMessage.split('(*)')

    return (
        <>
            <Spacer css={commonStyles.description} type='mt-10'>
                {showRequiredMessage && (
                    <span>
                        {requiredMessageSplit[0]}(<span css={styles.requiredStar}>*</span>){requiredMessageSplit[1]}
                    </span>
                )}
            </Spacer>
            <Spacer css={commonStyles.buttons} type='mt-4'>
                {isFunction(onClickBack) && (
                    <Button
                        dataTestId={dataTestId?.concat('-back')}
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
                            dataTestId={dataTestId?.concat('-continue')}
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
