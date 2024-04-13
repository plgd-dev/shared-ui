import React from 'react'
import CodeEditor from '../components/Atomic/CodeEditor'
import { StoryFn } from '@storybook/react'

export default {
    title: 'Example/CodeEditor',
    component: CodeEditor,
    argTypes: {},
}

const Template = (args: any) => (
    <div>
        <CodeEditor placeholderText='' value='' />
    </div>
)

export const Default: StoryFn = Template.bind({})
Default.args = {}
