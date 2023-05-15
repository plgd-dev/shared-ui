import React, { useState } from 'react'
import Button from '../../components/Atomic/Button'
import ShareDeviceModal from '../../components/Atomic/Modal/components/ShareDeviceModal'

export default {
    title: 'Modal/ShareDeviceModal',
    component: ShareDeviceModal,
    argTypes: {
        layout: 'fullscreen',
    },
}

const Template = (args) => {
    const [show, setShow] = useState(true)
    const [shared, setShared] = useState([
        { name: 'Ondrej Tomcik', email: 'ondrej.tomcik@plgd.dev', image: 'https://placekitten.com/40/40' },
        { name: 'Martin Maderič', email: 'mmartin.maderic@gmail.com', image: 'https://placekitten.com/40/40' },
    ])

    return (
        <div>
            <Button onClick={() => setShow(true)}>Show modal</Button>
            <ShareDeviceModal
                alreadyShared={shared}
                footerActions={[
                    {
                        label: 'Cancel',
                        onClick: () => setShow(false),
                        variant: 'tertiary',
                    },
                    {
                        label: 'Save',
                        onClick: () => setShow(false),
                        variant: 'primary',
                    },
                ]}
                onAddShared={(s) => setShared([...shared, s])}
                onClose={() => setShow(false)}
                onRemoveShared={(email) => setShared(shared.filter((i) => i.email !== email))}
                show={show}
                title='Share "device name"'
            />
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {
    layout: 'fullscreen',
}
