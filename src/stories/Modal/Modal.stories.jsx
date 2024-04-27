import React, { useState } from 'react'
import Modal from '../../components/Atomic/Modal'
import ModalStrippedLine from '../../components/Atomic/Modal/ModalStrippedLine'
import Button from '../../components/Atomic/Button'
import Switch from '../../components/Atomic/Switch'
import TimeoutControl from '../../components/Atomic/TimeoutControl'
import Editor from '../../components/Atomic/Editor'

export default {
    title: 'Modals/Default',
    component: Modal,
    argTypes: {
        layout: 'fullscreen',
    },
}

const Template = (args) => {
    const defaultCommandTimeToLive = 10000000000 // 10s
    const [ttl, setTtl] = useState(defaultCommandTimeToLive)
    // eslint-disable-next-line no-unused-vars
    const [_, setError] = useState(false)
    const [show, setShow] = useState(true)
    const [notification, setNotification] = useState(true)

    const renderBody = () => (
        <div>
            <ModalStrippedLine
                component={
                    <Switch
                        defaultChecked={true}
                        label={notification ? 'On' : 'Off'}
                        labelBefore={true}
                        onChange={(e) => setNotification(e.target.checked)}
                        size='big'
                    />
                }
                label='Notifications'
            />
            <ModalStrippedLine component='c486781e-f342-46c9-72fd-b740b7e864af' label='Device ID' />
            <ModalStrippedLine component='core.light' label='Types' />
            <ModalStrippedLine component='core.light, oic.ifbaseline' label='Interfaces' />
            <ModalStrippedLine
                component={
                    <TimeoutControl
                        defaultTtlValue={defaultCommandTimeToLive}
                        defaultValue={ttl}
                        i18n={{
                            default: 'default',
                            duration: 'duration',
                            placeholder: 'placeholder',
                            unit: 'unit',
                        }}
                        onChange={setTtl}
                        onTtlHasError={setError}
                    />
                }
                label='Command Timeout'
            />
            <div style={{ padding: '24px 0 20px 0' }}>
                <Editor height={142} json={{ state: false, power: 0, name: 'Light' }} />
            </div>
        </div>
    )
    return (
        <div>
            <Button onClick={() => setShow(true)}>Show modal</Button>
            <Modal
                appRoot={document.getElementById('root')}
                closeButton={true}
                onClose={() => setShow(false)}
                portalTarget={document.getElementById('modal-root')}
                renderBody={renderBody}
                renderFooter={() => (
                    <div className='modal-buttons'>
                        <Button className='modal-button'>Retrive</Button>
                        <Button className='modal-button' variant='primary'>
                            Update
                        </Button>
                    </div>
                )}
                show={show}
                title='/light/1'
            />
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {
    layout: 'fullscreen',
}
