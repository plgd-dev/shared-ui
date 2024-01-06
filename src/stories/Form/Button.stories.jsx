import React from 'react'
import Button from '../../components/Atomic/Button'
import { ReactComponent as IconPlus } from '../assets/icon-plus.svg'
import '../global.css'
import Example, { LoadingTemplate } from './Button.snip'

export default {
    title: 'Form/Button',
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

export const Variants = Example.bind({})
Variants.args = {
    variant: 'primary',
}

export const Disabled = Example.bind({})
Disabled.args = {
    disabled: true,
}

export const Icon = Example.bind({})
Icon.args = {
    icon: <IconPlus />,
}

export const Loading = LoadingTemplate.bind({})
Loading.args = {
    loading: true,
}
