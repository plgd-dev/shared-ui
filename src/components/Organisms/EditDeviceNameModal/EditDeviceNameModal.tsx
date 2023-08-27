import React, { FC, KeyboardEvent, useEffect, useState } from 'react'
import isFunction from 'lodash/isFunction'

import Button from '../../Atomic/Button'
import FormGroup from '../../Atomic/FormGroup'
import FormLabel from '../../Atomic/FormLabel'
import FormInput from '../../Atomic/FormInput'
import Modal from '../../Atomic/Modal'

import { Props } from './EditDeviceNameModal.types'
import * as styles from './EditDeviceNameModal.styles'

const EditDeviceNameModal: FC<Props> = (props) => {
    const { dataTestId, deviceName, deviceNameLoading, show, handleClose, handleSubmit, i18n } = props
    const [name, setName] = useState(deviceName)

    useEffect(() => {
        setName(deviceName)
    }, [deviceName])

    const handleReset = () => {
        setName(deviceName)
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
            <FormGroup id='device-name'>
                <FormLabel text={i18n.name} />
                <FormInput
                    dataTestId={dataTestId?.concat('-input')}
                    onChange={(e) => setName(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e)}
                    placeholder={i18n.deviceName}
                    value={name}
                />
            </FormGroup>
        </div>
    )

    const renderFooter = () => (
        <div css={styles.footer}>
            <div />
            <div className='modal-buttons'>
                <Button className='modal-button' dataTestId={dataTestId?.concat('-button-reset')} onClick={handleReset} variant='secondary'>
                    {i18n.reset}
                </Button>

                <Button
                    className='modal-button'
                    dataTestId={dataTestId?.concat('-button-confirm')}
                    loading={deviceNameLoading}
                    loadingText={i18n.savingChanges}
                    onClick={handleSubmitFunc}
                    variant='primary'
                >
                    {i18n.saveChange}
                </Button>
            </div>
        </div>
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
            title={`${i18n.edit} ${deviceName}`}
        />
    )
}

EditDeviceNameModal.displayName = 'EditDeviceNameModal'

export default EditDeviceNameModal
