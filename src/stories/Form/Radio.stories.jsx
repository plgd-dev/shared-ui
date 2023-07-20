import React from 'react'
import Radio from '../../components/Atomic/Radio'

export default {
    title: 'Form/Radio',
    component: Radio,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <Radio {...args} items={[{ value: '1' }, { value: '2' }]} name='radio1' />
        <br />
        <Radio
            {...args}
            items={[
                { value: '1', label: '1' },
                { value: '2', label: '2' },
            ]}
            name='radio1'
        />
        <br />
        <Radio
            {...args}
            defaultValue='2'
            items={[
                { value: '1', label: '1' },
                { value: '2', label: '2' },
            ]}
            name='radio1'
        />
        <br />
        <Radio
            {...args}
            error={true}
            items={[
                { value: '1', label: '1' },
                { value: '2', label: '2' },
            ]}
            name='radio1'
        />
    </div>
)

export const Default = Template.bind({})
Default.args = {}
