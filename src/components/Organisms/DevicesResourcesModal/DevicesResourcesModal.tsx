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
import Switch from '../../Atomic/Switch'
import ContentSwitch from '../../Atomic/ContentSwitch'
import GeneratedResourceForm from '../GeneratedResourceForm'
import Spacer from '../../Atomic/Spacer'
import Headline from '../../Atomic/Headline'
import Loadable from '../../Atomic/Loadable'

const { UPDATE_RESOURCE } = resourceModalTypes

const DevicesResourcesModal: FC<Props> = (props) => {
    const {
        confirmDisabled,
        createResource,
        data,
        deviceId,
        deviceName,
        fetchResource,
        formProperties,
        i18n,
        isDeviceOnline,
        isUnregistered,
        loading,
        onClose,
        resourceData,
        retrieving,
        show,
        ttlControl,
        type,
        updateResource,
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
    const [advancedView, setAdvancedView] = useState<boolean | undefined>(undefined)
    const [reset, setReset] = useState(0)
    const [isEditable, setIsEditable] = useState(true)
    const [formError, setFormError] = useState(false)

    useEffect(() => {
        setIsEditable(true)
        setAdvancedView(formProperties === false)
    }, [formProperties])

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

        if (resourceData) {
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
    }, [defaultData, resourceData, show, advancedView])

    const handleRetrieve = () => {
        fetchResource({
            href: data?.href || '',
            currentInterface: selectedInterface.value,
        })
        setReset((prev) => prev + 1)
    }

    const handleSubmit = () => {
        const params = {
            href: data?.href as string,
            currentInterface: selectedInterface.value,
        }
        const dataForSend = typeof jsonData === 'string' && jsonData.startsWith('"') && jsonData.endsWith('"') ? jsonData.replace(/"/g, '') : jsonData

        if (isUpdateModal) {
            console.log('!!!')
            console.log(dataForSend)
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

    const hasGeneratedForm = useMemo(() => !!formProperties, [formProperties])

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
                                    size='small'
                                    value={selectedInterface}
                                />
                            }
                            label={i18n.resourceInterfaces}
                            smallPadding={true}
                        />
                    )}
                </>
            )
        }

        const href = data?.href || ''

        return (
            <>
                <InnerContent />

                <Spacer type='pt-4'>
                    <Headline type='h5'>{i18n.content}</Headline>
                </Spacer>

                {hasGeneratedForm && (
                    <Spacer type='py-4'>
                        <Switch checked={advancedView} label={i18n.advancedView} onChange={() => setAdvancedView(!advancedView)} />
                    </Spacer>
                )}

                <Loadable condition={advancedView !== undefined}>
                    <ContentSwitch activeItem={advancedView ? 0 : 1}>
                        <Spacer style={{ height: 'calc(100% - 20px)' }} type='pt-5'>
                            <Editor
                                disabled={disabled}
                                editorRef={(node: any) => {
                                    editor.current = node
                                }}
                                height={modalCode ? '100%' : '350px'}
                                i18n={{
                                    viewText: modalCode ? i18n.compactView : i18n.fullView,
                                }}
                                json={jsonData || {}}
                                onChange={handleOnEditorChange}
                                onError={handleOnEditorError}
                                onViewChange={handleModalContentViewChange}
                            />
                        </Spacer>
                        {formProperties ? (
                            <GeneratedResourceForm
                                href={href}
                                i18n={pick(i18n, ['invalidNumber', 'minValue', 'maxValue'])}
                                onChange={(values: any) => setJsonData(values)}
                                properties={{ [href]: formProperties }}
                                resetFormKey={reset}
                                setFormError={setFormError}
                                setIsEditable={setIsEditable}
                                values={resourceData?.data?.content}
                            />
                        ) : (
                            <div />
                        )}
                    </ContentSwitch>
                </Loadable>
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
                            disabled={disabled || interfaceJsonError || confirmDisabled || !isEditable || formError}
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
            minWidth={720}
            onClose={!disabled ? handleClose : undefined}
            portalTarget={document.getElementById('modal-root')}
            renderBody={renderBody}
            renderFooter={renderFooter}
            show={show && !!data && jsonData !== undefined && advancedView !== undefined}
            title={data?.href}
        />
    )
}

DevicesResourcesModal.displayName = 'DevicesResourcesModal'

export default DevicesResourcesModal
