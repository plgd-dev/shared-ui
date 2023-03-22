import React from 'react'
import Switch from '../../components/new/Switch'

export default {
    title: 'Form/Switch',
    component: Switch,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <Switch {...args} size='small' />
        <br />
        <Switch {...args} size='big' />
        <br />
        <Switch {...args} defaultChecked={true} size='small' />
        <br />
        <Switch {...args} defaultChecked={true} size='big' />
        <br />
        <Switch {...args} defaultChecked={true} label='Label text' size='big' />
    </div>
)

export const Default = Template.bind({})
Default.args = {}

export const Loading = Template.bind({})
Loading.args = {
    loading: true,
}
