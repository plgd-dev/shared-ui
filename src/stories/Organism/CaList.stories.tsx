import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import CaList from '../../components/Organisms/CaList'

export default {
    title: 'Organism/CaList',
    component: CaList,
    argTypes: {},
} as Meta<typeof CaList>

type Story = StoryObj<typeof CaList>

export const Default: Story = {
    args: {},
    parameters: {
        layout: 'fullscreen',
    },
    render: (args) => (
        <div
            style={{
                margin: '50px',
            }}
        >
            <CaList
                {...args}
                data={[
                    { id: 0, name: 'ca-item-0', data: {}, dataChain: '' },
                    { id: 1, name: 'ca-item-1', data: {}, dataChain: '' },
                    { id: 2, name: 'ca-item-2', data: {}, dataChain: '' },
                    { id: 3, name: 'ca-item-3', data: {}, dataChain: '' },
                    { id: 4, name: 'ca-item-4', data: {}, dataChain: '' },
                ]}
                i18n={{ download: 'Download', delete: 'Delete', view: 'View' }}
                largePadding={false}
            />
        </div>
    ),
}
