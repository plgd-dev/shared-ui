import React from 'react'
import FormSelect, { selectAligns } from '../../components/Atomic/FormSelect'

export default (args?: any) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ]
    return (
        <div style={{ width: 400 }}>
            <FormSelect {...args} name='form-select-1' options={options} />
            <br />
            <FormSelect {...args} defaultValue={options[1]} menuIsOpen={true} name='form-select-2' options={options} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <FormSelect {...args} inlineStyle={true} name='form-select-3' options={options} />
            <br />
            <FormSelect {...args} align={selectAligns.RIGHT} name='form-select-4' options={options} />
            <br />
            <FormSelect
                {...args}
                autoWidth
                defaultValue={{ value: 's', label: 's' }}
                name='form-select-4'
                options={[
                    { value: 'ms', label: 'ms' },
                    { value: 's', label: 's' },
                    { value: 'min', label: 'min' },
                    { value: 'h', label: 'h' },
                ]}
            />
            <br />
            <FormSelect
                {...args}
                autoWidth
                align={selectAligns.RIGHT}
                defaultValue={{ value: 's', label: 's' }}
                name='form-select-4'
                options={[
                    { value: 'ms', label: 'ms' },
                    { value: 's', label: 's' },
                    { value: 'min', label: 'min' },
                    { value: 'h', label: 'h' },
                ]}
            />
        </div>
    )
}
