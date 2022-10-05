import React from 'react'
import FormInput from '../components/new/FormInput'

export default {
    title: 'Example/FormInput',
    component: FormInput,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <h3>Placeholder</h3>
        <FormInput {...args} placeholder='Placeholder text' />
        <br />
        <h3>Default text</h3>
        <FormInput {...args} defaultValue='Default value text' />
        <br />
        <h3>Disabled</h3>
        <FormInput {...args} defaultValue='Default value text' disabled={true} />
        <br />
        <h3>Error</h3>
        <FormInput {...args} defaultValue='Default value text' error={true} />
        <br />
        <h3>Password</h3>
        <FormInput {...args} defaultValue='Text' type='password' />
    </div>
)

export const Default = Template.bind({})
Default.args = {}
