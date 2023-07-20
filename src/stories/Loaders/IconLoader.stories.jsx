import React from 'react'
import '../global.css'
import IconLoader from '../../components/Atomic/Loader/IconLoader'

export default {
    title: 'Loader/IconLoader',
    component: IconLoader,
    argTypes: {},
}

const Template = (args) => (
    <div
        style={{
            background: '#ccc',
        }}
    >
        <IconLoader {...args} type='primary' />
        <br />
        <IconLoader {...args} type='secondary' />
        <br />
        <IconLoader {...args} type='tertiary' />
    </div>
)

export const Default = Template.bind({})
Default.args = {}
