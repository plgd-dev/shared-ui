import React from 'react'
import StatusPill from '../components/new/StatusPill'

export default {
    title: 'Example/StatusPill',
    component: StatusPill,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <StatusPill {...args} label='Online' status='online'>
            Tag text
        </StatusPill>
        <br />
        <br />
        <StatusPill {...args} label='Offline' status='offline'>
            Tag text
        </StatusPill>
        <br />
        <br />
        <StatusPill
            {...args}
            label='Online'
            pending={{
                onClick: () => console.log('on click'),
                text: '3 pending commands',
            }}
            status='online'
        >
            Tag text
        </StatusPill>
        <br />
        <br />
        <StatusPill
            {...args}
            label='Offline'
            pending={{
                onClick: () => console.log('on click'),
                text: '3 pending commands',
            }}
            status='offline'
        >
            Tag text
        </StatusPill>
    </div>
)

export const Default = Template.bind({})
Default.args = {}
