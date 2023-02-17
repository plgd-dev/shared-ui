import React from 'react'
import SplitButton from '../../components/new/SplitButton'
import { ReactComponent as IconPlus } from '../assets/icon-plus.svg'
import '../global.css'

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

const items = [
    {
        onClick: () => console.log('onItemClick'),
        label: 'Item 1',
        icon: 'lock',
    },
    {
        onClick: () => console.log('onItemClick'),
        label: 'Item 2',
        icon: 'log',
    },
    {
        onClick: () => console.log('onItemClick'),
        label: 'Item 3',
        icon: 'net',
    },
]

const Template = (args) => (
    <div>
        <div className='custom-row'>
            <div className='custom-cell'>
                <SplitButton {...args} children='Primary' variant='primary' items={items} />
            </div>
            <div className='custom-cell'>
                <SplitButton {...args} children='Secondary' variant='secondary' items={items} />
            </div>
        </div>
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

export const Loading = Template.bind({})
Loading.args = {
    loading: true,
}
