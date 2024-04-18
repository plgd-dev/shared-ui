import React from 'react'
import { StoryFn } from '@storybook/react'
import CopyIcon from '../../components/Atomic/CopyIcon'

export default {
    title: 'Assets/CopyIcon',
    component: CopyIcon,
    argTypes: {},
}

const Template = (args: any) => (
    <div>
        <CopyIcon {...args} i18n={{ content: 'Copy' }} value='Test value' />
    </div>
)

export const Default: StoryFn = Template.bind({})
Default.args = {}
