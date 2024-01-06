import React from 'react'
import FormGroup from '../../components/Atomic/FormGroup'
import FormLabel from '../../components/Atomic/FormLabel'
import FormInput from '../../components/Atomic/FormInput'

export default (args?: any) => (
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
