import React, { useState } from 'react'
import NotificationMessage from '../../components/new/NotificationMessage'
import Button from '../../components/new/Button'

export default {
    title: 'Notification/NotificationMessage',
    component: NotificationMessage,
    argTypes: {},
}

const Template = (args) => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <Button disabled={show} onClick={() => setShow(true)}>
                Show message
            </Button>
            <NotificationMessage
                {...args}
                message='The ongoing status change in the "Twin State" may take a while.'
                onExit={() => setShow(false)}
                show={show}
            />
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {}
