import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import Button from '../Button'
import Modal from '../Modal'
import { messages as t } from './ConfirmModal.i18n'
import { defaultProps, Props } from './ConfirmModal.types'
import ModalFooter from '../Modal/components/ModalFooter'

const ConfirmModal: FC<Props> = (props) => {
    const { onConfirm, confirmButtonText, cancelButtonText, title, body, loading, show, onClose, data, confirmDisabled, ...rest } = props
    const { formatMessage: _ } = useIntl()

    const renderFooter = (
        <ModalFooter
            right={
                <div className='modal-buttons'>
                    <Button className='modal-button' disabled={loading} onClick={onClose} variant='secondary'>
                        {cancelButtonText || _(t.cancel)}
                    </Button>
                    <Button
                        className='modal-button'
                        disabled={loading || confirmDisabled}
                        loading={loading}
                        onClick={() => onConfirm(onClose, data)}
                        variant='primary'
                    >
                        {confirmButtonText || _(t.confirm)}
                    </Button>
                </div>
            }
        />
    )

    return (
        <Modal
            {...rest}
            closeButton={!loading}
            onClose={!loading ? onClose : () => {}}
            renderBody={body}
            renderFooter={renderFooter}
            show={show}
            title={title}
        />
    )
}

ConfirmModal.displayName = 'ConfirmModal'
ConfirmModal.defaultProps = defaultProps

export default ConfirmModal
