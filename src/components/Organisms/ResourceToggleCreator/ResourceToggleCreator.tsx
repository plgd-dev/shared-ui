import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import isEmpty from 'lodash/isEmpty'
import isFunction from 'lodash/isFunction'
import { pick } from 'lodash'

import { Props, ResourceContentType, ResourceStatusType, ResourceType } from './ResourceToggleCreator.types'
import IconArrowDownNoPadding from '../../Atomic/Icon/components/IconArrowDownNoPadding'
import IconTrash from '../../Atomic/Icon/components/IconTrash'
import { convertSize } from '../../Atomic/Icon'
import * as styles from './ResourceToggleCreator.styles'
import SimpleStripTable from '../../Atomic/SimpleStripTable'
import FormGroup from '../../Atomic/FormGroup'
import FormInput, { inputAligns, inputSizes } from '../../Atomic/FormInput'
import { Row } from '../../Atomic/SimpleStripTable/SimpleStripTable.types'
import Button, { buttonSizes } from '../../Atomic/Button'
import IconPlus from '../../Atomic/Icon/components/IconPlus'
import Modal from '../../Atomic/Modal'
import ModalFooter from '../../Atomic/Modal/components/ModalFooter'
import Editor from '../../Atomic/Editor'
import Spacer from '../../Atomic/Spacer'
import IconEdit from '../../Atomic/Icon/components/IconEdit'
import TimeoutControl from '../../Atomic/TimeoutControl'
import IconArrowDetail from '../../Atomic/Icon/components/IconArrowDetail'
import Tooltip from '../../Atomic/Tooltip'
import StatusTag from '../../Atomic/StatusTag'
import { tagVariants as statusTagVariants } from '../../Atomic/StatusTag/constants'

export const getResourceStatus = (resource: ResourceType) => {
    if (resource.status && ['PENDING', 'TIMEOUT'].includes(resource.status)) {
        return resource.status
    }

    return resource.resourceUpdated?.status
}

export const getResourceStatusTag = (resource: ResourceType) => {
    switch (resource.status) {
        case 'PENDING':
            return <StatusTag variant={statusTagVariants.WARNING}>{resource.status}</StatusTag>
        case 'TIMEOUT':
            return <StatusTag variant={statusTagVariants.ERROR}>{resource.status}</StatusTag>
        case 'DONE':
        default:
            switch (resource.resourceUpdated?.status) {
                case 'OK':
                    return <StatusTag variant={statusTagVariants.SUCCESS}>{resource.resourceUpdated?.status}</StatusTag>
                case 'CANCELED':
                    return <StatusTag variant={statusTagVariants.WARNING}>{resource.resourceUpdated?.status}</StatusTag>
                case 'ERROR':
                default: {
                    return <StatusTag variant={statusTagVariants.ERROR}>{resource.resourceUpdated?.status}</StatusTag>
                }
            }
    }
}

const ResourceToggleCreator: FC<Props> = (props) => {
    const { className, dataTestId, defaultOpen, i18n, readOnly, id, resourceData, onCancelPending, onUpdate, responsive, statusTag } = props

    const [show, setShow] = useState(defaultOpen ?? false)
    const [touched, setTouched] = useState(false)
    const [modalCode, setModalCode] = useState(false)
    const [interfaceJsonError, setInterfaceJsonError] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [jsonData, setJsonData] = useState<ResourceContentType | undefined>(undefined)
    const [ttl, setTtl] = useState(parseInt(resourceData.timeToLive || '0', 10))
    const [ttlHasError, setTtlHasError] = useState(false)

    const editor = useRef()

    const hasContent = useMemo(() => {
        if (typeof resourceData.content === 'object') {
            return !isEmpty(resourceData.content)
        } else {
            return resourceData.content !== undefined
        }
    }, [resourceData.content])

    const hasUpdateContent = useMemo(
        () => !!resourceData.resourceUpdated && (!!resourceData.resourceUpdated.content || resourceData.resourceUpdated.status === 'CANCELED'),
        [resourceData.resourceUpdated]
    )

    const setContentByType = useCallback((content: ResourceContentType) => {
        if (typeof content === 'object') {
            setJsonData(content)
            // @ts-ignore
            editor?.current?.current?.set(content)
        } else {
            const dataString = content.toString()
            // @ts-ignore
            editor?.current?.current?.setText(dataString)
            setJsonData(dataString)
        }
    }, [])

    useEffect(() => {
        if (hasContent) {
            setContentByType(resourceData.content)
        } else if (resourceData.resourceUpdated) {
            setContentByType(resourceData.resourceUpdated?.content || '')
        } else {
            setJsonData('')
        }
    }, [resourceData.content, hasContent, resourceData.resourceUpdated, setContentByType])

    useEffect(() => {
        setTouched(false)
    }, [show])

    const getButtonIcon = useCallback((hasContent: boolean, hasUpdateContent: boolean, status?: ResourceStatusType) => {
        if (hasUpdateContent || status) {
            return <IconArrowDetail />
        } else if (hasContent) {
            return <IconEdit />
        } else {
            return <IconPlus />
        }
    }, [])

    const getButtonText = useCallback(
        (hasContent: boolean, hasUpdateContent: boolean, status?: ResourceStatusType) => {
            if (hasUpdateContent || status) {
                return i18n.view
            } else if (hasContent) {
                return i18n.edit
            } else {
                return i18n.add
            }
        },
        [i18n.add, i18n.edit, i18n.view]
    )

    const getModalTitle = useCallback(
        (hasContent: boolean, hasUpdateContent: boolean) => {
            if (hasContent) {
                return i18n.editContent
            } else if (hasUpdateContent) {
                return i18n.viewContent
            } else {
                return i18n.addContent
            }
        },
        [i18n.addContent, i18n.editContent, i18n.viewContent]
    )

    const rows: Row[] = [
        {
            attribute: i18n.href,
            value: (
                <FormGroup
                    errorTooltip
                    error={touched && resourceData.href === '' ? i18n.requiredField(i18n.href) : undefined}
                    id='name'
                    marginBottom={false}
                    style={{
                        width: '100%',
                    }}
                >
                    <FormInput
                        align={inputAligns.RIGHT}
                        compactFormComponentsView={true}
                        disabled={readOnly}
                        onChange={(e) => (isFunction(onUpdate) ? onUpdate({ ...resourceData, href: e.target.value }) : () => {})}
                        onFocus={() => setTouched(true)}
                        placeholder={i18n.href}
                        size={inputSizes.SMALL}
                        value={resourceData.href}
                    />
                </FormGroup>
            ),
        },
        {
            attribute: i18n.content,
            value: (
                <Button
                    disabled={resourceData.resourceUpdated?.status === 'CANCELED' || resourceData.status === 'PENDING'}
                    icon={getButtonIcon(hasContent, hasUpdateContent, resourceData.status)}
                    onClick={(e) => {
                        e.preventDefault()
                        setShowModal(true)
                    }}
                    size={buttonSizes.SMALL}
                    variant={hasContent || hasUpdateContent ? 'secondary' : 'primary'}
                >
                    {getButtonText(hasContent, hasUpdateContent)}
                </Button>
            ),
        },
    ]

    if (hasContent || hasUpdateContent) {
        rows.push({
            attribute: i18n.timeToLive,
            value: (
                <TimeoutControl
                    compactFormComponentsView={false}
                    defaultTtlValue={ttl}
                    defaultValue={ttl}
                    disabled={readOnly}
                    i18n={pick(i18n, 'default', 'duration', 'placeholder', 'unit')}
                    onChange={setTtl}
                    onTtlHasError={setTtlHasError}
                    size='small'
                    ttlHasError={ttlHasError}
                    unitMenuPortalTarget={document.body}
                    unitMenuZIndex={32}
                />
            ),
        })
    }

    const disabled = false

    return (
        <div className={className} css={styles.creator} data-test-id={dataTestId} id={id}>
            <div css={styles.header} onClick={() => setShow(!show)}>
                <div css={styles.title}>
                    {resourceData.href || ''}
                    {statusTag && <Spacer type='ml-2'>{statusTag}</Spacer>}
                </div>
                <div css={styles.right}>
                    {isFunction(onCancelPending) && (
                        <>
                            <div
                                css={styles.icon}
                                onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    isFunction(onCancelPending) && onCancelPending(resourceData)
                                }}
                            >
                                <Tooltip content={i18n.cancel}>
                                    <IconTrash {...convertSize(20)} />
                                </Tooltip>
                            </div>
                            <div css={styles.rightSpacer}></div>
                        </>
                    )}
                    {isFunction(props.onDeleted) && (
                        <>
                            <div
                                css={styles.icon}
                                onClick={(e) => {
                                    e.preventDefault()
                                    isFunction(props.onDeleted) && props.onDeleted()
                                }}
                            >
                                <IconTrash {...convertSize(20)} />
                            </div>
                            <div css={styles.rightSpacer}></div>
                        </>
                    )}
                    <motion.div
                        animate={{
                            rotate: show ? 180 : 0,
                        }}
                        className='expander'
                        css={styles.icon}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <IconArrowDownNoPadding {...convertSize(20)} />
                    </motion.div>
                </div>
            </div>
            <AnimatePresence>
                {show && (
                    <motion.div
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{
                            opacity: 0,
                            height: 0,
                        }}
                        initial={{ opacity: 0, height: 0 }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <div css={styles.content}>
                            <SimpleStripTable
                                noSidePadding
                                lastRowBorder={false}
                                leftColProps={
                                    responsive === false
                                        ? undefined
                                        : {
                                              xxl: 6,
                                          }
                                }
                                leftColSize={4}
                                rightColProps={
                                    responsive === false
                                        ? undefined
                                        : {
                                              xxl: 6,
                                          }
                                }
                                rightColSize={8}
                                rows={rows}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Modal
                appRoot={document.getElementById('root')}
                bodyStyle={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                closeButton={!disabled}
                closeButtonText={i18n.close}
                closeOnBackdrop={false}
                contentPadding={false}
                dataTestId={dataTestId?.concat('-modal')}
                fullSize={modalCode}
                minWidth={720}
                onClose={!disabled ? () => setShowModal(false) : undefined}
                portalTarget={document.getElementById('modal-root')}
                renderBody={
                    <Spacer style={{ flex: '1 1 auto' }} type='pt-6'>
                        <Editor
                            dataTestId={dataTestId?.concat('-editor')}
                            disabled={disabled || readOnly}
                            editorRef={(node: any) => {
                                editor.current = node
                            }}
                            height={modalCode ? '100%' : '350px'}
                            i18n={{
                                viewText: modalCode ? i18n.compactView : i18n.fullView,
                            }}
                            json={jsonData || {}}
                            onChange={(json: ResourceContentType) => {
                                setJsonData(json)
                            }}
                            onError={(error: any) => setInterfaceJsonError(error.length > 0)}
                            onViewChange={() => setModalCode((prevState) => !prevState)}
                        />
                    </Spacer>
                }
                renderFooter={
                    readOnly ? undefined : (
                        <ModalFooter
                            right={
                                <div className='modal-buttons'>
                                    <Button
                                        className='modal-button'
                                        dataTestId={dataTestId?.concat('-confirm-button')}
                                        disabled={disabled || interfaceJsonError}
                                        onClick={(e) => {
                                            setShowModal(false)
                                            if (isFunction(onUpdate)) {
                                                onUpdate({
                                                    ...resourceData,
                                                    content: jsonData,
                                                })
                                            }
                                        }}
                                        variant='primary'
                                    >
                                        {i18n.update}
                                    </Button>
                                </div>
                            }
                        />
                    )
                }
                show={showModal}
                title={getModalTitle(hasContent, hasUpdateContent)}
                zIndex={30}
            />
        </div>
    )
}

ResourceToggleCreator.displayName = 'ResourceToggleCreator'

export default ResourceToggleCreator
