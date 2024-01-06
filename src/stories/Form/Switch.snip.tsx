import React from 'react'
import Switch from '../../components/Atomic/Switch'

export default (args?: any) => (
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
