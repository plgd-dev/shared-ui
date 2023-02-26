import React, { useState } from 'react'
import Button from '../../components/new/Button'
import { AddClientModal } from '../../components/new/Modal'

export default {
    title: 'Modal/AddClientModal',
    component: AddClientModal,
    argTypes: {
        layout: 'fullscreen',
    },
}

const Template = (args) => {
    const [show, setShow] = useState(true)
    const [deviceAuthLoading, setDeviceAuthLoading] = useState(false)
    const [deviceAuthCode, setDeviceAuthCode] = useState('')

    const getDeviceAuthCode = (deviceId) => {
        setDeviceAuthLoading(true)
        setTimeout(() => {
            setDeviceAuthCode(`device-auth-random-code-${deviceId}`)
        }, 3000)
    }

    return (
        <div>
            <Button onClick={() => setShow(true)}>Show modal</Button>
            <AddClientModal
                onClose={() => setShow(false)}
                footerActions={[
                    {
                        label: 'Done',
                        onClick: () => setShow(false),
                        variant: 'primary',
                    },
                ]}
                deviceInformation={deviceAuthCode ? [{ attribute: 'Version', value: '3.0.2' }] : undefined}
                deviceAuthLoading={deviceAuthLoading}
                deviceAuthCode={deviceAuthCode}
                getDeviceAuthCode={getDeviceAuthCode}
                show={show}
                title='Add a new client'
            />
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {
    layout: 'fullscreen',
}