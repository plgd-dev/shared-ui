import React, { useEffect, useState, useRef, FC, useMemo } from 'react'
import { Props, defaultProps } from './DevicesResourcesModal.types'
import { resourceModalTypes } from '../../../common/constants'
import isFunction from 'lodash/isFunction'
import pick from 'lodash/pick'

// Components
import Editor from '../../new/Editor'
import FormSelect from '../../new/FormSelect'
import Button from '../../new/Button'
import Modal, { ModalStrippedLine } from '../../new/Modal'

import DevicesResourcesModalNotifications from './DevicesResourcesModalNotifications'
import isEmpty from 'lodash/isEmpty'

const { UPDATE_RESOURCE } = resourceModalTypes

const DevicesResourcesModal: FC<Props> = (props) => {
    const {
        data,
        deviceId,
        deviceName,
        resourceData,
        onClose,
        retrieving,
        i18n,
        isDeviceOnline,
        isUnregistered,
        loading,
        updateResource,
        createResource,
        type,
        ttlControl,
        confirmDisabled,
        fetchResource,
        show,
    } = { ...defaultProps, ...props }
    const editor = useRef()
    const [jsonData, setJsonData] = useState<object | undefined>(undefined)
    const [interfaceJsonError, setInterfaceJsonError] = useState(false)

    const disabled = retrieving || loading
    const isUpdateModal = type === UPDATE_RESOURCE
    const updateLabel = !loading ? i18n.update : i18n.updating
    const createLabel = !loading ? i18n.create : i18n.creating
    const initialInterfaceValue = { value: '', label: i18n.resourceInterfaces }
    const [selectedInterface, setSelectedInterface] = useState(initialInterfaceValue)

    const defaultData = useMemo(
        () =>
            isUpdateModal
                ? {}
                : {
                      rt: ['oic.r.switch.binary'],
                      if: ['oic.if.a', 'oic.if.baseline'],
                      rep: {
                          value: true,
                      },
                      p: {
                          bm: 3,
                      },
                  },
        [isUpdateModal]
    )

    useEffect(() => {
        const dataToDisplay = resourceData?.data?.content
        const newJsonData = (dataToDisplay && !isEmpty(dataToDisplay)) || defaultData
        setJsonData(newJsonData)

        if (resourceData && editor.current) {
            // Set the retrieved JSON object to the editor
            if (typeof resourceData === 'object') {
                // @ts-ignore
                editor?.current?.current?.set(newJsonData)
            } else if (typeof resourceData === 'string') {
                // @ts-ignore
                editor?.current?.current?.setText(newJsonData)
            }
        }
    }, [defaultData, resourceData, show])

    const handleRetrieve = () => {
        fetchResource({
            href: data?.href || '',
            currentInterface: selectedInterface.value,
        })
    }

    const handleSubmit = () => {
        const params = {
            href: data?.href as string,
            currentInterface: selectedInterface.value,
        }

        if (isUpdateModal) {
            updateResource(params, jsonData)
        } else {
            createResource(params, jsonData)
        }
    }

    const handleCleanup = () => {
        setSelectedInterface(initialInterfaceValue)
        setJsonData(undefined)
    }

    const handleOnEditorChange = (json: object) => {
        json && setJsonData(json)
    }

    const handleOnEditorError = (error: any) => setInterfaceJsonError(error.length > 0)

    const renderBody = () => {
        const interfaces = data?.interfaces?.map?.((ifs) => ({ value: ifs, label: ifs })) || []
        interfaces.unshift(initialInterfaceValue)

        return (
            <>
                {data && isUpdateModal && (
                    <DevicesResourcesModalNotifications
                        deviceId={deviceId as string}
                        deviceName={deviceName}
                        deviceResourceUpdateListener={props.deviceResourceUpdateListener}
                        href={data?.href as string}
                        i18n={pick(props.i18n, ['on', 'off', 'notifications'])}
                        isNotificationActive={props.isNotificationActive}
                        isUnregistered={isUnregistered}
                        toggleActiveNotification={props.toggleActiveNotification}
                    />
                )}

                <ModalStrippedLine component={deviceId} label={i18n.deviceId} />

                {(data?.types?.length || 0) > 0 ? (
                    <ModalStrippedLine component={data?.types?.join(', ')} label={isUpdateModal ? i18n.types : i18n.supportedTypes} />
                ) : undefined}

                {isUpdateModal && <ModalStrippedLine component={data?.interfaces?.join(', ')} label={i18n.interfaces} />}

                <ModalStrippedLine component={ttlControl} label={i18n.commandTimeout} smallPadding={true} />

                {isUpdateModal && (
                    <ModalStrippedLine
                        component={
                            <FormSelect disabled={disabled || !isDeviceOnline} onChange={setSelectedInterface} options={interfaces} value={selectedInterface} />
                        }
                        componentSize={200}
                        label={i18n.resourceInterfaces}
                        smallPadding={true}
                    />
                )}

                <div className='m-t-20 m-b-0'>
                    {jsonData && (
                        <Editor
                            disabled={disabled}
                            editorRef={(node: any) => {
                                editor.current = node
                            }}
                            json={jsonData}
                            onChange={handleOnEditorChange}
                            onError={handleOnEditorError}
                        />
                    )}
                </div>
            </>
        )
    }

    const renderFooter = () => {
        const interfaces = data?.interfaces?.map?.((ifs) => ({ value: ifs, label: ifs })) || []
        interfaces.unshift(initialInterfaceValue)

        return (
            <div className='w-100 d-flex justify-content-between align-items-center'>
                <div />
                <div className='modal-buttons'>
                    {isUpdateModal && (
                        <Button className='modal-button' disabled={disabled} loading={retrieving} onClick={handleRetrieve} variant='secondary'>
                            {!retrieving ? i18n.retrieve : i18n.retrieving}
                        </Button>
                    )}

                    <Button
                        className='modal-button'
                        disabled={disabled || interfaceJsonError || confirmDisabled}
                        loading={loading}
                        onClick={handleSubmit}
                        variant='primary'
                    >
                        {isUpdateModal ? updateLabel : createLabel}
                    </Button>
                </div>
            </div>
        )
    }

    const handleClose = () => {
        isFunction(onClose) && onClose()
        handleCleanup()
    }

    return (
        <Modal
            appRoot={document.getElementById('root')}
            closeButton={!disabled}
            closeButtonText={i18n.close}
            contentPadding={false}
            onClose={!disabled ? handleClose : undefined}
            portalTarget={document.getElementById('modal-root')}
            renderBody={renderBody}
            renderFooter={renderFooter}
            show={show && !!data && !!jsonData}
            title={data?.href}
        />
    )
}

DevicesResourcesModal.displayName = 'DevicesResourcesModal'
DevicesResourcesModal.defaultProps = defaultProps

export default DevicesResourcesModal
