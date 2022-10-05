import React from 'react'
import FormGroup from '../components/new/FormGroup'
import FormInput from '../components/new/FormInput'
import FormLabel from '../components/new/FormLabel'

export default {
    title: 'Example/FormGroup',
    component: FormGroup,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <FormGroup {...args} id='form-group-1'>
            <FormLabel text='Placeholder text' />
            <FormInput placeholder='Placeholder text' />
        </FormGroup>
        <FormGroup {...args} id='form-group-2'>
            <FormLabel text='Placeholder text' />
            <FormInput defaultValue='Default value text' />
        </FormGroup>
        <FormGroup {...args} id='form-group-3'>
            <FormLabel text='Disabled text' />
            <FormInput defaultValue='Disabled text' disabled={true} />
        </FormGroup>
        <FormGroup {...args} error='Error message' id='form-group-4'>
            <FormLabel text='Error text' />
            <FormInput defaultValue='Error text' />
        </FormGroup>
        <FormGroup {...args} id='form-group-5'>
            <FormLabel text='Password' />
            <FormInput defaultValue='Text' type='password' />
        </FormGroup>
    </div>
)

export const Default = Template.bind({})
Default.args = {}
