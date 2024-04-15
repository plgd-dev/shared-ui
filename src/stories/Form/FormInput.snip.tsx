import React from 'react'
import FormInput, { inputAligns } from '../../components/Atomic/FormInput'
import IconSlovakia from '../assets/IconSlovakia'

export default (args?: any) => (
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
        <form action=''>
            <FormInput {...args} defaultValue='Text' name='new-password' type='password' />
        </form>
        <br />
        <h3>Copy</h3>
        <FormInput {...args} copy={true} defaultValue='Text' />
        <br />
        <h3>Copy secret</h3>
        <form action=''>
            <FormInput {...args} copy={true} defaultValue='Text' name='new-password' type='password' />
        </form>
        <br />
        <h3>Phone</h3>
        <FormInput {...args} defaultValue='Text' icon={<IconSlovakia />} telPattern='[0-9]{3}-[0-9]{2}-[0-9]{3}' telPrefix='+421' type='tel' />
        <br />
        <h3>Normal size</h3>
        <FormInput {...args} defaultValue='Normal size' size='normal' />
        <br />
        <h3>inlineStyle</h3>
        <FormInput {...args} inlineStyle defaultValue='Inline style' size='normal' />
        <br />
        <h3>align right</h3>
        <FormInput {...args} align={inputAligns.RIGHT} defaultValue='Align right' size='normal' />
    </div>
)
