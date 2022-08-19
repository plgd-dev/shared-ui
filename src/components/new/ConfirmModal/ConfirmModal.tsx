import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import Button from '../Button'
import Modal from '../Modal'
import { messages as t } from './ConfirmModal.i18n'
import { defaultProps, Props } from './ConfirmModal.types'

const ConfirmModal: FC<Props> = (props) => {
    const { onConfirm, confirmButtonText, cancelButtonText, title, body, loading, show, onClose, data, confirmDisabled, ...rest } = props
    const { formatMessage: _ } = useIntl()

    const renderFooter = (
        <div className='w-100 d-flex justify-content-end align-items-center'>
            <Button variant='secondary' onClick={onClose} disabled={loading}>
                {cancelButtonText || _(t.cancel)}
            </Button>
            <Button variant='primary' onClick={() => onConfirm(onClose, data)} loading={loading} disabled={loading || confirmDisabled}>
                {confirmButtonText || _(t.confirm)}
            </Button>
        </div>
    )

    return (
        <Modal
            {...rest}
            show={show}
            onClose={!loading ? onClose : () => {}}
            title={title}
            renderBody={body}
            renderFooter={renderFooter}
            closeButton={!loading}
        />
    )
}

ConfirmModal.displayName = 'ConfirmModal'
ConfirmModal.defaultProps = defaultProps

export default ConfirmModal
