import React from 'react'
import InitializedByDifferentUser from '../../components/Organisms/InitializedByDifferentUser'
import { StoryFn } from '@storybook/react'

export default {
    title: 'Pages/InitializedByDifferentUser',
    component: InitializedByDifferentUser,
    argTypes: {},
}

const Template = (args: any) => (
    <div>
        <InitializedByDifferentUser {...args}>Tag text</InitializedByDifferentUser>
    </div>
)

export const Default: StoryFn = Template.bind({})
Default.args = {}
Default.parameters = {
    layout: 'fullscreen',
}
