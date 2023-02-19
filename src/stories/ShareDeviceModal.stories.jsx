import React, { useState } from 'react'
import Button from '../components/new/Button'
import ShareDeviceModal from '../components/new/Modal/components/ShareDeviceModal'

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
                onClose={() => setShow(false)}
                renderFooter={() => (
                    <div className='modal-buttons'>
                        <Button className='modal-button' variant='tertiary' onClick={() => setShow(false)}>
                            Cancel
                        </Button>
                        <Button className='modal-button' onClick={() => setShow(false)} variant='primary'>
                            Save
                        </Button>
                    </div>
                )}
                show={show}
                title='Share "device name"'
                alreadyShared={shared}
                onAddShared={(s) => setShared([...shared, s])}
                onRemoveShared={(email) => setShared(shared.filter((i) => i.email !== email))}
            />
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {
    layout: 'fullscreen',
}
