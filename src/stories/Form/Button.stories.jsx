import React from 'react'
import Button from '../../components/new/Button'
import { ReactComponent as IconPlus } from '../assets/icon-plus.svg'
import '../global.css'

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

const Template = (args) => (
    <div>
        <div className='custom-row'>
            <div className='custom-cell'>
                <Button {...args} children='Primary big' size='big' variant='primary' />
            </div>
            <div className='custom-cell'>
                <Button {...args} children='Primary normal' size='normal' variant='primary' />
            </div>
            <div className='custom-cell'>
                <Button {...args} children='Primary small' size='small' variant='primary' />
            </div>
        </div>

        <br />
        <br />

        <div className='custom-row'>
            <div className='custom-cell'>
                <Button {...args} children='Secondary big' size='big' variant='secondary' />
            </div>
            <div className='custom-cell'>
                <Button {...args} children='Secondary normal' size='normal' variant='secondary' />
            </div>
            <div className='custom-cell'>
                <Button {...args} children='Secondary small' size='small' variant='secondary' />
            </div>
        </div>

        <br />
        <br />

        <div className='custom-row'>
            <div className='custom-cell'>
                <Button {...args} children='Tertiary big' size='big' variant='tertiary' />
            </div>
            <div className='custom-cell'>
                <Button {...args} children='Tertiary normal' size='normal' variant='tertiary' />
            </div>
            <div className='custom-cell'>
                <Button {...args} children='Tertiary small' size='small' variant='tertiary' />
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
