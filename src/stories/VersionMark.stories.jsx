import React from 'react'
import VersionMark from '../components/new/VersionMark'

export default {
    title: 'Example/VersionMark',
    component: VersionMark,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <VersionMark {...args} severity='success' versionText='Version 2.02'>
            Tag text
        </VersionMark>
        <br />
        <br />
        <VersionMark
            {...args}
            severity='warning'
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
            severity='error'
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
