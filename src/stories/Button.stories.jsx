import React from 'react'

import Button from '../components/new/Button'
import { ReactComponent as IconPlus } from './assets/icon-plus.svg'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
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
        <Button {...args} variant='primary' size='normal' children='Primary big' />
        <Button {...args} variant='primary' size='small' children='Primary big' />
        <br />
        <br />
        <Button {...args} variant='secondary' size='big' children='Secondary big' />
        <Button {...args} variant='secondary' size='normal' children='Secondary big' />
        <Button {...args} variant='secondary' size='small' children='Secondary big' />
        <br />
        <br />
        <Button {...args} variant='tertiary' size='big' children='Tertiary big' />
        <Button {...args} variant='tertiary' size='normal' children='Tertiary big' />
        <Button {...args} variant='tertiary' size='small' children='Tertiary big' />
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
