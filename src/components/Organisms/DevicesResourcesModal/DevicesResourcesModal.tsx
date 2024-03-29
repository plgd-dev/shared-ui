import React, { useEffect, useState, useRef, FC, useMemo, useCallback } from 'react'
import isFunction from 'lodash/isFunction'
import pick from 'lodash/pick'
import isEmpty from 'lodash/isEmpty'

import { Props, defaultProps } from './DevicesResourcesModal.types'
import { resourceModalTypes } from '../../../common/constants'
import Editor from '../../Atomic/Editor'
import FormSelect from '../../Atomic/FormSelect'
import Button from '../../Atomic/Button'
import Modal, { ModalStrippedLine } from '../../Atomic/Modal'
import DevicesResourcesModalNotifications from './DevicesResourcesModalNotifications'
import ModalFooter from '../../Atomic/Modal/components/ModalFooter'

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
    const [jsonData, setJsonData] = useState<object | string | undefined>(undefined)
    const [interfaceJsonError, setInterfaceJsonError] = useState(false)
    const [modalCode, setModalCode] = useState(false)

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
                      rt: [],
                      if: ['oic.if.a', 'oic.if.baseline'],
                      rep: {},
                      p: {
                          bm: 3,
                      },
                  },
        [isUpdateModal]
    )

    useEffect(() => {
        const dataToDisplay = resourceData?.data?.content

        if (resourceData && editor.current) {
            // Set the retrieved JSON object to the editor
            if (typeof dataToDisplay === 'object') {
                const newJsonData = !isEmpty(dataToDisplay) ? dataToDisplay : defaultData
                setJsonData(newJsonData)
                // @ts-ignore
                editor?.current?.current?.set(newJsonData)
            } else if (typeof dataToDisplay === 'string' || typeof dataToDisplay === 'number' || typeof dataToDisplay === 'boolean') {
                const dataString = typeof dataToDisplay === 'string' ? `"${dataToDisplay.toString()}"` : dataToDisplay.toString()
                // @ts-ignore
                editor?.current?.current?.setText(dataString)
                setJsonData(dataString)
            }
        } else {
            setJsonData(defaultData)
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
        const dataForSend = typeof jsonData === 'string' && jsonData.startsWith('"') && jsonData.endsWith('"') ? jsonData.replace(/"/g, '') : jsonData

        if (isUpdateModal) {
            updateResource(params, dataForSend)
        } else {
            createResource(params, dataForSend)
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

    const handleModalContentViewChange = useCallback(() => {
        setModalCode((prevState) => !prevState)
    }, [])

    const renderBody = () => {
        const interfaces = data?.interfaces?.map?.((ifs) => ({ value: ifs, label: ifs })) || []
        interfaces.unshift(initialInterfaceValue)

        const InnerContent = () => {
            if (modalCode) {
                return null
            }

            return (
                <>
                    {data && isUpdateModal && props.toggleActiveNotification && (
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

                    {ttlControl && <ModalStrippedLine component={ttlControl} label={i18n.commandTimeout} smallPadding={true} />}

                    {isUpdateModal && (
                        <ModalStrippedLine
                            component={
                                <FormSelect
                                    disabled={disabled || !isDeviceOnline}
                                    menuPortalTarget={document.body}
                                    onChange={setSelectedInterface}
                                    options={interfaces}
                                    value={selectedInterface}
                                />
                            }
                            componentSize={200}
                            label={i18n.resourceInterfaces}
                            smallPadding={true}
                        />
                    )}
                </>
            )
        }

        return (
            <>
                <InnerContent />

                <div className='m-t-20' style={{ height: 'calc(100% - 20px)' }}>
                    {jsonData && (
                        <Editor
                            disabled={disabled}
                            editorRef={(node: any) => {
                                editor.current = node
                            }}
                            height={modalCode ? '100%' : undefined}
                            i18n={{
                                viewText: modalCode ? i18n.compactView : i18n.fullView,
                            }}
                            json={jsonData}
                            onChange={handleOnEditorChange}
                            onError={handleOnEditorError}
                            onViewChange={handleModalContentViewChange}
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
            <ModalFooter
                right={
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
                }
            />
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
            closeOnBackdrop={false}
            contentPadding={false}
            fullSize={modalCode}
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
