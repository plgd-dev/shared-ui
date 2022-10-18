import React from 'react'
import LeftPanel from '../components/new/Templates/LeftPanel'

export default {
    title: 'Templates/LeftPanel',
    component: LeftPanel,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <LeftPanel
            {...args}
            activeId='4'
            menu={[
                {
                    title: 'Main menu',
                    items: [
                        {
                            icon: '123',
                            id: '1',
                            title: 'Dashboard',
                        },
                        {
                            icon: '123',
                            id: '2',
                            title: 'Devices',
                        },
                    ],
                },
                {
                    title: 'Other',
                    items: [
                        {
                            icon: '123',
                            id: '3',
                            title: 'Dashboard',
                        },
                        {
                            icon: '123',
                            id: '4',
                            title: 'Devices 2',
                            children: [
                                { icon: '123', id: '5', title: 'Quickstart', tag: { variant: 'success', text: 'New' } },
                                { icon: '123', id: '6', title: 'Manage enrollments' },
                                { icon: '123', id: '7', title: 'Linked hubs' },
                                { icon: '123', id: '8', title: 'Certificates', tag: { variant: 'info', text: 'Soon!' } },
                                { icon: '123', id: '9', title: 'Registration records' },
                            ],
                        },
                    ],
                },
                {
                    title: 'Other 2',
                    items: [
                        {
                            icon: '123',
                            id: '10',
                            title: 'Dashboard 2',
                        },
                        {
                            icon: '123',
                            id: '11',
                            title: 'Devices 2',
                        },
                    ],
                },
            ]}
        />
    </div>
)

export const Default = Template.bind({})
Default.args = {}
