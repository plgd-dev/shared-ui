import React from 'react'
import Button from '../components/new/Button'
import { ReactComponent as IconPlus } from './assets/icon-plus.svg'
import './global.css'

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        variant: {
            control: false,
        },
        size: {
            control: false,
        },
    },
}

const Template = (args) => (
    <div>
        <Button {...args} variant='primary' size='big' children='Primary big' />
        <Button {...args} variant='primary' size='normal' children='Primary normal' />
        <Button {...args} variant='primary' size='small' children='Primary small' />
        <br />
        <br />
        <Button {...args} variant='secondary' size='big' children='Secondary big' />
        <Button {...args} variant='secondary' size='normal' children='Secondary normal' />
        <Button {...args} variant='secondary' size='small' children='Secondary small' />
        <br />
        <br />
        <Button {...args} variant='tertiary' size='big' children='Tertiary big' />
        <Button {...args} variant='tertiary' size='normal' children='Tertiary normal' />
        <Button {...args} variant='tertiary' size='small' children='Tertiary small' />
    </div>
)

export const Variants = Template.bind({})
Variants.args = {
    variant: 'primary',
}

export const Disabled = Template.bind({})
Disabled.args = {
    disabled: true,
}

export const Icon = Template.bind({})
Icon.args = {
    icon: <IconPlus />,
}
