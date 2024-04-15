import React from 'react'
import ConfirmButton from '../../components/Atomic/ConfirmButton'
import '../global.css'
import Example from './ConfirmButton.snip'

export default {
    title: 'Form/ConfirmButton',
    component: ConfirmButton,
}

const Template = (args) => (
    <div
        style={{
            margin: 100,
            border: '1px solid #ccc',
            display: 'inline-block',
        }}
    >
        <Example {...args} />
    </div>
)

export const Default = Template.bind({})
Default.args = {}
