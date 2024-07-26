import React from 'react'
import DatePicker from '../../components/Atomic/DatePicker'
import '../global.css'
import Example from './DatePicker.snip'

export default {
    title: 'Form/DatePicker',
    component: DatePicker,
}

const Template = (args) => (
    <div
        style={{
            margin: 100,
            width: 300,
            display: 'inline-block',
        }}
    >
        <Example {...args} />
    </div>
)

export const Variants = Template.bind({})
Variants.args = {}
