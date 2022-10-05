import React from 'react'
import Link from '../components/new/Link'

export default {
    title: 'Example/Link',
    component: Link,
    argTypes: {},
}

const Template = (args) => <Link {...args}>Link text</Link>

export const Default = Template.bind({})
Default.args = {}
