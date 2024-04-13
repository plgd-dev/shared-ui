import React from 'react'
import VersionMark from '../components/Atomic/VersionMark'
import { severities } from '../components/Atomic/VersionMark/constants'
import { StoryFn } from '@storybook/react'

export default {
    title: 'Example/VersionMark',
    component: VersionMark,
    argTypes: {},
}

const Template = (args: any) => (
    <div>
        <VersionMark {...args} severity={severities.SUCCESS} versionText='Version 2.02' />
        <br />
        <br />
        <VersionMark
            {...args}
            severity={severities.WARNING}
            update={{
                text: 'Click here!',
                onClick: () => console.log('update click'),
            }}
            versionText='Version 2.02 • New update is available.'
        />
        <br />
        <br />
        <VersionMark
            {...args}
            severity={severities.ERROR}
            update={{
                text: 'Click here!',
                onClick: () => console.log('update click'),
            }}
            versionText='Version 2.02 • New update is available.'
        />
    </div>
)

export const Default: StoryFn = Template.bind({})
Default.args = {}
