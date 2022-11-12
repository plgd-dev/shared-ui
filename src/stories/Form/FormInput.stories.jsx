import React from 'react'
import FormInput from '../../components/new/FormInput'
import { ReactComponent as IconSlovakia } from '../assets/Slovakia.svg'

export default {
    title: 'Form/FormInput',
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
        <br />
        <h3>Copy</h3>
        <FormInput {...args} copy={true} defaultValue='Text' />
        <br />
        <h3>Copy secreet</h3>
        <FormInput {...args} copy={true} defaultValue='Text' type='password' />
        <br />
        <h3>Phone</h3>
        <FormInput {...args} defaultValue='Text' icon={<IconSlovakia />} pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}' telPrefix='+421' type='tel' />
        <br />
        <h3>Normal size</h3>
        <FormInput {...args} defaultValue='Normal size' size='normal' />
    </div>
)

export const Default = Template.bind({})
Default.args = {}
