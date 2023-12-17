import React, { FC, KeyboardEvent, useEffect, useState } from 'react'
import isFunction from 'lodash/isFunction'

import Button from '../../Atomic/Button'
import FormGroup from '../../Atomic/FormGroup'
import FormLabel from '../../Atomic/FormLabel'
import FormInput from '../../Atomic/FormInput'
import Modal from '../../Atomic/Modal'

import { Props } from './EditNameModal.types'
import * as styles from './EditNameModal.styles'
import ModalFooter from '../../Atomic/Modal/components/ModalFooter'

const EditNameModal: FC<Props> = (props) => {
    const { dataTestId, name: nameProp, loading, show, handleClose, handleSubmit, i18n } = props
    const [name, setName] = useState(nameProp)

    useEffect(() => {
        setName(nameProp)
    }, [nameProp])

    const handleReset = () => {
        setName(nameProp)
    }

    const handleSubmitFunc = () => {
        isFunction(handleSubmit) && handleSubmit(name)
    }

    const handleKeyPress = (e: KeyboardEvent) => {
        if (e && e.code === 'Enter') {
            isFunction(handleSubmit) && handleSubmit(name)
        }
    }

    const renderBody = () => (
        <div css={styles.body}>
            <FormGroup id='edit-name'>
                <FormLabel text={i18n.name} />
                <FormInput
                    dataTestId={dataTestId?.concat('-input')}
                    onChange={(e) => setName(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e)}
                    placeholder={i18n.namePlaceholder}
                    value={name}
                />
            </FormGroup>
        </div>
    )

    const renderFooter = () => (
        <ModalFooter
            right={
                <div className='modal-buttons'>
                    <Button
                        className='modal-button'
                        dataTestId={dataTestId?.concat('-button-reset')}
                        disabled={loading}
                        onClick={handleReset}
                        variant='secondary'
                    >
                        {i18n.reset}
                    </Button>

                    <Button
                        className='modal-button'
                        dataTestId={dataTestId?.concat('-button-confirm')}
                        loading={loading}
                        loadingText={i18n.savingChanges}
                        onClick={handleSubmitFunc}
                        variant='primary'
                    >
                        {i18n.saveChange}
                    </Button>
                </div>
            }
        />
    )

    return (
        <Modal
            appRoot={document.getElementById('root')}
            closeButtonText={i18n.close}
            contentPadding={false}
            dataTestId={dataTestId}
            onClose={handleClose}
            portalTarget={document.getElementById('modal-root')}
            renderBody={renderBody}
            renderFooter={renderFooter}
            show={show}
            title={`${i18n.edit} ${nameProp}`}
        />
    )
}

EditNameModal.displayName = 'EditDeviceNameModal'

export default EditNameModal
