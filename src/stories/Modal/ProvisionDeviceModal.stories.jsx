import React, { useState } from 'react'
import Button from '../../components/new/Button'
import { ProvisionDeviceModal } from '../../components/new/Modal'

export default {
    title: 'Modal/ProvisionDeviceModal',
    component: ProvisionDeviceModal,
    argTypes: {
        layout: 'fullscreen',
    },
}

const Template = (args) => {
    const [show, setShow] = useState(false)
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
            <ProvisionDeviceModal
                {...args}
                onClose={() => setShow(false)}
                footerActions={[
                    {
                        label: 'Cancel',
                        onClick: () => setShow(false),
                        variant: 'tertiary',
                    },
                    {
                        label: 'Delete',
                        onClick: () => setShow(false),
                        variant: 'primary',
                    },
                ]}
                deviceInformation={
                    deviceAuthCode
                        ? [
                              { attribute: 'Hub Id', value: 'c486781e-f342-46c9-72fd-b740b7e864af' },
                              { attribute: 'Device endpoint', value: 'coaps+tcp://try.plgd.cloud:5684' },
                              { attribute: 'Authorization code', value: '******', copyValue: deviceAuthCode },
                              { attribute: 'Authorization provider', value: 'plgd.web' },
                              { attribute: 'Certificate authorities', value: '...', copyValue: 'CERT', certFormat: true },
                          ]
                        : undefined
                }
                // defaultDeviceId='37aa3586-9f07-4659-8800-db6fe9a7dec6'
                deviceAuthLoading={deviceAuthLoading}
                deviceAuthCode={deviceAuthCode}
                getDeviceAuthCode={getDeviceAuthCode}
                show={show}
                title='Provision a new device'
            />
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {
    layout: 'fullscreen',
}
