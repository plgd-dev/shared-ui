import React from 'react'
import Headline from '../components/Atomic/Headline'

export default {
    title: 'Example/Headline',
    component: Headline,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <Headline {...args}>Headline 01</Headline>
        <Headline {...args} type='h2'>
            Headline 02
        </Headline>
        <Headline {...args} type='h3'>
            Headline 03
        </Headline>
        <Headline {...args} type='h4'>
            Headline 04
        </Headline>
        <Headline {...args} type='h5'>
            Headline 05
        </Headline>
    </div>
)

export const Default = Template.bind({})
Default.args = {}
