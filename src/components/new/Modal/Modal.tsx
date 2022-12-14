import { FC } from 'react'
import RBModal from 'react-bootstrap/Modal'
import classNames from 'classnames'

import { useAppConfig } from '@/containers/App'
import { defaultProps, Props } from './Modal.types'
import isFunction from 'lodash/isFunction'

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
                    {renderBody && <RBModal.Body>{isFunction(renderBody) ? renderBody() : renderBody}</RBModal.Body>}
                    {renderFooter && <RBModal.Footer>{isFunction(renderFooter) ? renderFooter() : renderFooter}</RBModal.Footer>}
                </>
            )}
        </RBModal>
    )
}

Modal.displayName = 'Modal'
Modal.defaultProps = defaultProps

export default Modal
