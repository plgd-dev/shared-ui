import React from 'react'
import CodeEditor from '../components/Atomic/CodeEditor'

export default {
    title: 'Example/CodeEditor',
    component: CodeEditor,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <CodeEditor value='' />
    </div>
)

export const Default = Template.bind({})
Default.args = {}
