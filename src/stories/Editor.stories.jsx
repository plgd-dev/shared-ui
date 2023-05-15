import React from 'react'
import Editor from '../components/Atomic/Editor'

export default {
    title: 'Example/Editor',
    component: Editor,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <Editor json={{ state: false, power: 0, name: 'Light' }} />
    </div>
)

export const Default = Template.bind({})
Default.args = {}
