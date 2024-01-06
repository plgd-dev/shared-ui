import React from 'react'
import SplitButton from '../../components/Atomic/SplitButton'
import '../global.css'
import Example from './SplitButton.snip'
import IconPlus from '../../components/Atomic/Icon/components/IconPlus'

export default {
    title: 'Form/SplitButton',
    component: SplitButton,
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

export const Loading = Example.bind({})
Loading.args = {
    loading: true,
}
