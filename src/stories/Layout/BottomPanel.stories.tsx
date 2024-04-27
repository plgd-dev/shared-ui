import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import BottomPanel from '../../components/Layout/BottomPanel/BottomPanel'
import Button from '../../components/Atomic/Button'

export default {
    title: 'Layout/BottomPanel',
    component: BottomPanel,
    argTypes: {},
} as Meta<typeof BottomPanel>

type Story = StoryObj<typeof BottomPanel>

const Template = (args: any) => (
    <BottomPanel
        {...args}
        show
        actionPrimary={<Button variant='primary'>Primary action</Button>}
        actionSecondary={<Button>Secondary action</Button>}
        attribute='Test Attribute'
        leftPanelCollapsed={true}
        value='Test Value'
    />
)

export const Default: Story = {
    args: {},
    parameters: {
        layout: 'fullscreen',
    },
    render: (args) => <Template {...args} activeStep={0} />,
}
