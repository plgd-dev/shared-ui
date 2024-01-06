import React from 'react'
import ActionButton from '../../components/Atomic/ActionButton'
import '../global.css'
import Example from './ActionButton.snip'

export default {
    title: 'Form/ActionButton',
    component: ActionButton,
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

export const Variants = Template.bind({})
Variants.args = {}
