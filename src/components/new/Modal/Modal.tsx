import RBModal from 'react-bootstrap/Modal'
import classNames from 'classnames'

import { useAppConfig } from '@/containers/app'
import { FC } from 'react'
import { defaultProps, Props } from './Modal.types'

export const Modal: FC<Props> = (props) => {
    const { onClose, title, renderBody, renderFooter, backdropClassName, dialogClassName, show, closeButton, ...rest } = props
    const { collapsed } = useAppConfig()

    return (
        <RBModal
            show={show}
            onHide={onClose}
            centered
            backdropClassName={classNames({ collapsed }, backdropClassName)}
            dialogClassName={classNames({ collapsed }, dialogClassName)}
            {...rest}
        >
            {show && (
                <>
                    <RBModal.Header>
                        <RBModal.Title>{title || ''}</RBModal.Title>
                        {closeButton && (
                            <button className='close' aria-hidden='true' aria-label='Close' onClick={onClose}>
                                <span className='fas fa-times' />
                            </button>
                        )}
                    </RBModal.Header>
                    <RBModal.Body>{renderBody && renderBody()}</RBModal.Body>
                    <RBModal.Footer>{renderFooter && renderFooter()}</RBModal.Footer>
                </>
            )}
        </RBModal>
    )
}

Modal.displayName = 'Modal'
Modal.defaultProps = defaultProps

export default Modal
