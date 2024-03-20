import React, { FC } from 'react'
import isFunction from 'lodash/isFunction'

import * as commonStyles from '../FullPageWizardCommon.styles'
import { Props } from './StepButtons.types'
import Spacer from '../../../Atomic/Spacer'
import Button from '../../../Atomic/Button'

const StepButtons: FC<Props> = (props) => {
    const { i18n, onClickBack, onClickNext } = props

    return (
        <Spacer css={commonStyles.buttons} type='mt-10'>
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
            <Button
                fullWidth
                onClick={(e) => {
                    e.preventDefault()
                    isFunction(onClickNext) && onClickNext()
                }}
                size='big'
                variant='primary'
            >
                {i18n.continue}
            </Button>
        </Spacer>
    )
}

StepButtons.displayName = 'StepButtons'

export default StepButtons
