import React from 'react'
import Radio from '../../components/Atomic/Radio'

export default (args?: any) => (
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
