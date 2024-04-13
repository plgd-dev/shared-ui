import React from 'react'
import Link from '../components/Atomic/Link'
import { StoryFn } from '@storybook/react'

export default {
    title: 'Example/Link',
    component: Link,
    argTypes: {},
}

const Template = (args: any) => <Link {...args}>Link text</Link>

export const Default: StoryFn = Template.bind({})
Default.args = {}
