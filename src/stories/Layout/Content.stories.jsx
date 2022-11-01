import React from 'react'
import Content from '../../components/new/Layout/Content'
import Button from '../../components/new/Button'
import Icon from '../../components/new/Icon'
import StatusTag from '../../components/new/StatusTag'

export default {
    title: 'Layout/Content',
    component: Content,
    argTypes: {},
}

const Template = (args) => (
    <div style={{ background: '#ccc', height: '100%', paddingTop: '200px', boxSizing: 'border-box' }}>
        <Content
            actions={[
                <Button icon={<Icon icon='refresh' />}>Secondary</Button>,
                <Button icon={<Icon icon='plus' />} variant='primary'>
                    Primary
                </Button>,
            ]}
            headline='August Doorbell Cam'
        />
    </div>
)

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
    layout: 'fullscreen',
}

const TemplateStatusTag = (args) => (
    <div style={{ background: '#ccc', height: '100%', paddingTop: '200px', boxSizing: 'border-box' }}>
        <Content
            actions={[
                <Button icon={<Icon icon='refresh' />}>Secondary</Button>,
                <Button icon={<Icon icon='plus' />} variant='primary'>
                    Primary
                </Button>,
            ]}
            headline='August Doorbell Cam'
            headlineStatusTag={<StatusTag variant='error'>offline</StatusTag>}
        />
    </div>
)

export const HeadlineStatusTag = TemplateStatusTag.bind({})
HeadlineStatusTag.args = {}
HeadlineStatusTag.parameters = {
    layout: 'fullscreen',
}
