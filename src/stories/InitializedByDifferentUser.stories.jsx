import React from 'react'
import InitializedByDifferentUser from '../components/Organisms/InitializedByDifferentUser'

export default {
    title: 'Pages/InitializedByDifferentUser',
    component: InitializedByDifferentUser,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <InitializedByDifferentUser {...args}>Tag text</InitializedByDifferentUser>
    </div>
)

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
    layout: 'fullscreen',
}
