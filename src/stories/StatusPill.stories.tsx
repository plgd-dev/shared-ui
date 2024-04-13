import React from 'react'
import StatusPill from '../components/Atomic/StatusPill'
import { StoryFn } from '@storybook/react'

export default {
    title: 'Example/StatusPill',
    component: StatusPill,
    argTypes: {},
}

const Template = (args: any) => (
    <div>
        <StatusPill {...args} label='Online' status='online' tooltipText='Connected at: xxxxx'>
            Tag text
        </StatusPill>
        <br />
        <br />
        <StatusPill
            {...args}
            label='Offline'
            status='offline'
            tooltipText={
                <span>
                    Last time online: <strong>31.9.2022 - 16:32</strong>
                </span>
            }
        >
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
            tooltipText='Connected at: xxxxx'
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
            tooltipText={
                <span>
                    Last time online: <strong>31.9.2022 - 16:32</strong>
                </span>
            }
        >
            Tag text
        </StatusPill>
    </div>
)

export const Default: StoryFn = Template.bind({})
Default.args = {}
