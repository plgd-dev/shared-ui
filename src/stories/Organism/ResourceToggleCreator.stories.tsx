import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ResourceToggleCreator from '../../components/Organisms/ResourceToggleCreator'
import ResourceToggleCreatorSnip from '../../components/Organisms/ResourceToggleCreator/ResourceToggleCreator.snip'

export default {
    title: 'Organism/ResourceToggleCreator',
    component: ResourceToggleCreator,
    argTypes: {},
} as Meta<typeof ResourceToggleCreator>

type Story = StoryObj<typeof ResourceToggleCreator>

export const Default: Story = {
    args: {},
    parameters: {
        layout: 'fullscreen',
    },
    render: (args) => <ResourceToggleCreatorSnip />,
}
