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
                icon: 'search',
                id: '1',
                title: 'Dashboard',
            },
            {
                icon: 'search',
                id: '2',
                title: 'Devices',
            },
        ],
    },
    {
        title: 'Other',
        icon: 'search',
        items: [
            {
                icon: 'search',
                id: '31',
                title: 'Dashboard',
                children: [
                    { icon: 'search', id: '31', title: 'Quickstart', tag: { variant: 'success', text: 'New' } },
                    { icon: 'search', id: '32', title: 'Manage enrollments' },
                    { icon: 'search', id: '33', title: 'Linked hubs' },
                    { icon: 'search', id: '34', title: 'Certificates', tag: { variant: 'info', text: 'Soon!' } },
                    { icon: 'search', id: '35', title: 'Registration records' },
                ],
            },
            {
                icon: 'search',
                id: '4',
                title: 'Devices 2',
                children: [
                    { icon: 'search', id: '41', title: 'Quickstart 2', tag: { variant: 'success', text: 'New 2' } },
                    { icon: 'search', id: '42', title: 'Manage enrollments 2' },
                    { icon: 'search', id: '43', title: 'Linked hubs 2' },
                    { icon: 'search', id: '44', title: 'Certificates 2', tag: { variant: 'info', text: 'Soon!' } },
                    { icon: 'search', id: '45', title: 'Registration records 2' },
                ],
            },
        ],
    },
    {
        title: 'Other 2',
        items: [
            {
                icon: 'search',
                id: '10',
                title: 'Dashboard 2',
            },
            {
                icon: 'search',
                id: '11',
                title: 'Devices 2',
            },
        ],
    },
    {
        title: 'Other 3',
        items: [
            {
                icon: 'search',
                id: '10',
                title: 'Dashboard 3',
            },
            {
                icon: 'search',
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

const TemplateCollapsed = (args) => (
    <div style={{ display: 'flex' }}>
        <div style={{ padding: '10px 120px' }}>
            <LeftPanel {...args} collapsed={true} menu={menu} />
        </div>
        <div style={{ padding: '10px 120px' }}>
            <LeftPanel {...args} activeId='1' collapsed={true} menu={menu} />
        </div>
        <div style={{ padding: '10px 120px' }}>
            <LeftPanel {...args} activeId='41' collapsed={true} menu={menu} />
        </div>
    </div>
)

export const Collapsed = TemplateCollapsed.bind({})
Default.args = {}
