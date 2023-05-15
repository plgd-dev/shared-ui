import React from 'react'
import VersionMark from '../components/Atomic/VersionMark'
import { severities } from '../components/Atomic/VersionMark/constants'

export default {
    title: 'Example/VersionMark',
    component: VersionMark,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <VersionMark {...args} severity={severities.SUCCESS} versionText='Version 2.02'>
            Tag text
        </VersionMark>
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
        >
            Tag text
        </VersionMark>
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
        >
            Tag text
        </VersionMark>
    </div>
)

export const Default = Template.bind({})
Default.args = {}
