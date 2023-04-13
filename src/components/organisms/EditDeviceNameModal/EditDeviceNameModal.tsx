import React, { FC, useEffect, useState } from 'react'
import isFunction from 'lodash/isFunction'

import Button from '../../new/Button'
import FormGroup from '../../new/FormGroup'
import FormLabel from '../../new/FormLabel'
import FormInput from '../../new/FormInput'
import Modal from '../../new/Modal'

import { Props } from './EditDeviceNameModal.types'
import * as styles from './EditDeviceNameModal.styles'

const EditDeviceNameModal: FC<Props> = (props) => {
    const { deviceName, deviceNameLoading, show, handleClose, handleSubmit, i18n } = props
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

    const renderBody = () => (
        <div css={styles.body}>
            <FormGroup id='device-name'>
                <FormLabel text={i18n.name} />
                <FormInput onChange={(e) => setName(e.target.value)} placeholder={i18n.deviceName} value={name} />
            </FormGroup>
        </div>
    )

    const renderFooter = () => (
        <div css={styles.footer}>
            <div />
            <div className='modal-buttons'>
                <Button className='modal-button' onClick={handleReset} variant='secondary'>
                    {i18n.reset}
                </Button>

                <Button className='modal-button' loading={deviceNameLoading} loadingText={i18n.savingChanges} onClick={handleSubmitFunc} variant='primary'>
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
