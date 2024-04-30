import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import isFunction from 'lodash/isFunction'

import Modal, { ModalFooter } from '../../../../../components/Atomic/Modal'
import Button from '../../../../../components/Atomic/Button'
import { messages as t } from '../../Devices.i18n'
import { Props, defaultProps } from './FirstTimeOnboardingModal.types'
import testId from '../../../testId'

const FirstTimeOnboardingModal: FC<Props> = (props) => {
    const { show, onClose, onSubmit } = { ...defaultProps, ...props }
    const { formatMessage: _ } = useIntl()
    const { firstTimeModalButton } = testId.devices.detail

    const handleSubmit = () => {
        isFunction(onClose) && onClose && onClose()
        isFunction(onSubmit) && onSubmit && onSubmit()
    }

    const renderFooter = () => (
        <ModalFooter
            right={
                <Button dataTestId={firstTimeModalButton} onClick={handleSubmit} variant='primary'>
                    {_(t.ok)}
                </Button>
            }
        />
    )

    return (
        <Modal
            onClose={onClose}
            renderBody={() => <div>{_(t.firstTimeDescription)}</div>}
            renderFooter={renderFooter}
            show={show}
            title={_(t.firstTimeTitle)}
        />
    )
}

FirstTimeOnboardingModal.displayName = 'FirstTimeOnboardingModal'

export default FirstTimeOnboardingModal
