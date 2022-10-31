import React from 'react'
import Checkbox from '../../components/new/Checkbox'
import FormGroup from '../../components/new/FormGroup'

export default {
    title: 'Form/Checkbox',
    component: Checkbox,
    argTypes: {},
}

const Template = (args) => (
    <div style={{ maxWidth: 400, border: '1px dashed #ccc' }}>
        <FormGroup id='group-1'>
            <Checkbox {...args} defaultChecked={false} />
        </FormGroup>
        <FormGroup id='group-2'>
            <Checkbox {...args} defaultChecked={true} />
        </FormGroup>
        <FormGroup id='group-3'>
            <Checkbox
                {...args}
                defaultChecked={false}
                label='Sure, send me insightful product news, and occasional offers by email. I know I can unsubscribe at any time.'
            />
        </FormGroup>
        <FormGroup id='group-4'>
            <Checkbox
                {...args}
                defaultChecked={true}
                label='Sure, send me insightful product news, and occasional offers by email. I know I can unsubscribe at any time.'
            />
        </FormGroup>
    </div>
)

export const Default = Template.bind({})
Default.args = {}
