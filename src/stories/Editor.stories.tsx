import React from 'react'
import Editor from '../components/Atomic/Editor'
import { StoryFn } from '@storybook/react'

export default {
    title: 'Example/Editor',
    component: Editor,
    argTypes: {},
}

const Template = (args: any) => (
    <div>
        <Editor json={{ state: false, power: 0, name: 'Light' }} />
    </div>
)

export const Default: StoryFn = Template.bind({})
Default.args = {}
