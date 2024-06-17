import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import isEmpty from 'lodash/isEmpty'
import isFunction from 'lodash/isFunction'
import { pick } from 'lodash'

import { Props, ResourceContentType } from './ResourceToggleCreator.types'
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

const ResourceToggleCreator: FC<Props> = (props) => {
    const { className, dataTestId, defaultOpen, i18n, id, resourceData, onUpdate } = props

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
        if (typeof resourceData.content.data === 'object') {
            return !isEmpty(resourceData.content.data)
        } else {
            return resourceData.content.data !== undefined
        }
    }, [resourceData?.content.data])

    useEffect(() => {
        if (hasContent) {
            if (typeof resourceData.content.data === 'object') {
                setJsonData(resourceData.content.data)
                // @ts-ignore
                editor?.current?.current?.set(resourceData.content.data)
            } else {
                const dataString = resourceData.content.data.toString()
                // @ts-ignore
                editor?.current?.current?.setText(dataString)
                setJsonData(dataString)
            }
        } else {
            setJsonData('')
        }
    }, [resourceData.content.data, hasContent, resourceData.content])

    useEffect(() => {
        setTouched(false)
    }, [show])

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
                        onChange={(e) => onUpdate({ ...resourceData, href: e.target.value })}
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
                    icon={hasContent ? <IconEdit /> : <IconPlus />}
                    onClick={(e) => {
                        e.preventDefault()
                        setShowModal(true)
                    }}
                    size={buttonSizes.SMALL}
                    variant={hasContent ? 'secondary' : 'primary'}
                >
                    {hasContent ? i18n.edit : i18n.add}
                </Button>
            ),
        },
    ]

    if (hasContent) {
        rows.push({
            attribute: i18n.timeToLive,
            value: (
                <TimeoutControl
                    compactFormComponentsView={false}
                    defaultTtlValue={ttl}
                    defaultValue={ttl}
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
                <div css={styles.title}>{resourceData.href || ''}</div>
                <div css={styles.right}>
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
                            <SimpleStripTable noSidePadding lastRowBorder={false} leftColSize={4} rightColSize={8} rows={rows} />
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
                            disabled={disabled}
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
                    <ModalFooter
                        right={
                            <div className='modal-buttons'>
                                <Button
                                    className='modal-button'
                                    dataTestId={dataTestId?.concat('-confirm-button')}
                                    disabled={disabled || interfaceJsonError}
                                    onClick={(e) => {
                                        setShowModal(false)
                                        onUpdate({
                                            ...resourceData,
                                            content: {
                                                ...resourceData.content,
                                                data: jsonData === undefined ? {} : jsonData,
                                                contentType: typeof jsonData,
                                            },
                                        })
                                    }}
                                    variant='primary'
                                >
                                    {i18n.update}
                                </Button>
                            </div>
                        }
                    />
                }
                show={showModal}
                title={i18n.addContent}
                zIndex={30}
            />
        </div>
    )
}

ResourceToggleCreator.displayName = 'ResourceToggleCreator'

export default ResourceToggleCreator
