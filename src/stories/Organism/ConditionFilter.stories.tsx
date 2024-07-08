import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import ConditionFilter from '../../components/Organisms/ConditionFilter'
import {
    FormInputConditionFilter,
    FormInputSingleConditionFilter,
    FormSelectConditionFilter,
} from '../../components/Organisms/ConditionFilter/ConditionFilter.snip'

export default {
    argTypes: {},
    component: ConditionFilter,
    title: 'Organism/ConditionFilter',
} as Meta<typeof ConditionFilter>

type Story = StoryObj<typeof ConditionFilter>

export const Default: Story = {
    args: {},
    parameters: {
        layout: 'fullscreen',
    },
    render: (args) => (
        <div
            style={{
                margin: '50px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            }}
        >
            <FormSelectConditionFilter />
            <FormInputConditionFilter />
            <FormInputSingleConditionFilter />
        </div>
    ),
}
