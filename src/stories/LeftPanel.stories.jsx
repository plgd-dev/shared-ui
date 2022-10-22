import React from 'react'
import LeftPanel from '../components/new/Templates/LeftPanel'

export default {
    title: 'Templates/LeftPanel',
    component: LeftPanel,
    argTypes: {},
}

const menu = [
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
                children: [
                    { icon: '123', id: '31', title: 'Quickstart', tag: { variant: 'success', text: 'New' } },
                    { icon: '123', id: '32', title: 'Manage enrollments' },
                    { icon: '123', id: '33', title: 'Linked hubs' },
                    { icon: '123', id: '34', title: 'Certificates', tag: { variant: 'info', text: 'Soon!' } },
                    { icon: '123', id: '35', title: 'Registration records' },
                ],
            },
            {
                icon: '123',
                id: '4',
                title: 'Devices 2',
                children: [
                    { icon: '123', id: '41', title: 'Quickstart', tag: { variant: 'success', text: 'New' } },
                    { icon: '123', id: '42', title: 'Manage enrollments' },
                    { icon: '123', id: '43', title: 'Linked hubs' },
                    { icon: '123', id: '44', title: 'Certificates', tag: { variant: 'info', text: 'Soon!' } },
                    { icon: '123', id: '45', title: 'Registration records' },
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
    {
        title: 'Other 3',
        items: [
            {
                icon: '123',
                id: '10',
                title: 'Dashboard 3',
            },
            {
                icon: '123',
                id: '11',
                title: 'Devices 3',
            },
        ],
    },
]

const Template = (args) => (
    <div>
        <LeftPanel {...args} menu={menu} />
    </div>
)

export const Default = Template.bind({})
Default.args = {}

const TemplateActive = (args) => (
    <div style={{ display: 'flex' }}>
        <div style={{ padding: 10 }}>
            <LeftPanel {...args} activeId='1' menu={menu} />
        </div>
        <div style={{ padding: 10 }}>
            <LeftPanel {...args} activeId='41' menu={menu} />
        </div>
    </div>
)

export const ActiveItem = TemplateActive.bind({})
Default.args = {}

const TemplateFeature = (args) => (
    <div>
        <LeftPanel
            {...args}
            menu={menu}
            newFeature={{
                onClick: () => console.log('click'),
                onClose: () => console.log('close'),
            }}
        />
    </div>
)

export const NewFeature = TemplateFeature.bind({})
Default.args = {}
