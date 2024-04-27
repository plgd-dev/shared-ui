import React from 'react'
import FullPageWizard from '../../components/Templates/FullPageWizard'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Layout/FullPageWizard',
    component: FullPageWizard,
    argTypes: {},
} as Meta<typeof FullPageWizard>

type Story = StoryObj<typeof FullPageWizard>

const Template = (args: any) => (
    <FullPageWizard
        {...args}
        onStepChange={() => {}}
        steps={[
            { name: 'Step 1', description: 'Description 1' },
            { name: 'Step 2', description: 'Description 2' },
            { name: 'Step 3', description: 'Description 3' },
        ]}
        title='Test Title'
    />
)

export const Default: Story = {
    args: {},
    parameters: {
        layout: 'fullscreen',
    },
    render: (args) => <Template {...args} activeStep={0} />,
}

export const ActiveStep: Story = {
    args: {},
    parameters: {
        layout: 'fullscreen',
    },
    render: (args) => <Template {...args} activeStep={1} />,
}
