import React, { useState } from 'react'
import Button from '../../components/Atomic/Button'
import { DeleteModal } from '../../components/Atomic/Modal'

export default {
    title: 'Modal/DeleteModal',
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
                deleteInformation={[
                    { label: 'Device Name', value: 'August Doorbell Cam' },
                    { label: 'Device ID', value: '376ee947-4801-5cfe-3a8f-49103697f7d1' },
                ]}
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
                onClose={() => setShow(false)}
                show={show}
                subTitle='This action cannot be undone.'
                title='Are you sure you want to delete this device?'
            />
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {
    layout: 'fullscreen',
}
