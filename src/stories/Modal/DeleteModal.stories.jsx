import React, { useState } from 'react'
import Button from '../../components/new/Button'
import DeleteModal from '../../components/new/Modal/components/DeleteDeviceModal'

export default {
    title: 'Modal/DeleteDeviceModal',
    component: DeleteModal,
    argTypes: {
        layout: 'fullscreen',
    },
}

const Template = (args) => {
    const [show, setShow] = useState(true)

    return (
        <div>
            <Button onClick={() => setShow(true)}>Show modal</Button>
            <DeleteModal
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
                show={show}
                title='Are you sure you want to delete this device?'
                subTitle='This action cannot be undone.'
                deleteInformation={[
                    { label: 'Device Name', value: 'August Doorbell Cam' },
                    { label: 'Device ID', value: '376ee947-4801-5cfe-3a8f-49103697f7d1' },
                ]}
            />
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {
    layout: 'fullscreen',
}
