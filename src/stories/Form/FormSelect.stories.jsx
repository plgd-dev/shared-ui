import React from 'react'
import FormSelect from '../../components/new/FormSelect'
import '../global.css'

export default {
    title: 'Form/FormSelect',
    component: FormSelect,
}

const Template = (args) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ]
    return (
        <div style={{ width: 400 }}>
            <FormSelect name='form-select-1' options={options} />
            <br />
            <FormSelect defaultValue={options[1]} menuIsOpen={true} name='form-select-2' options={options} />
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {}
