import React from 'react'
import { StoryFn } from '@storybook/react'
import NotFoundPage from '../../components/Templates/NotFoundPage'

export default {
    title: 'Pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {},
}

const Template = (args: any) => (
    <div>
        <NotFoundPage {...args} message='Page not found message' title='Page not found' />
    </div>
)

export const Default: StoryFn = Template.bind({})

Default.args = {}
Default.parameters = {
    layout: 'fullscreen',
}
