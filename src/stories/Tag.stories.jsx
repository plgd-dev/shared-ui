import React from 'react'
import Tag from '../components/Atomic/Tag'
import TagGroup from '../components/Atomic/TagGroup'

export default {
    title: 'Example/Tag',
    component: Tag,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <Tag {...args}>status</Tag>
        <br />
        <br />
        <Tag {...args} icon='link'>
            status
        </Tag>
    </div>
)

export const Default = Template.bind({})
Default.args = {}

const TemplateGroup = (args) => (
    <TagGroup>
        <Tag {...args}>oic.d.clouddevice</Tag>
        <Tag {...args}>oic.wk.d</Tag>
        <Tag {...args}>oic.wk.e</Tag>
        <Tag {...args}>oic.wk.f</Tag>
        <Tag {...args}>oic.wk.g</Tag>
    </TagGroup>
)

export const Group = TemplateGroup.bind({})
Group.args = {}
