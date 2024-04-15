import React from 'react'
import Tag from '../components/Atomic/Tag'
import TagGroup from '../components/Atomic/TagGroup'
import { tagVariants } from '../components/Atomic/Tag/constants'
import { StoryFn } from '@storybook/react'

export default {
    title: 'Example/Tag',
    component: Tag,
    argTypes: {},
}

const Template = (args: any) => (
    <div>
        <Tag {...args}>status</Tag>
        <br />
        <br />
        <Tag {...args} icon='link'>
            status
        </Tag>
        <br />
        <br />
        <div style={{ background: '#ccc', padding: 5 }}>
            <Tag {...args} variant={tagVariants.WHITE}>
                white
            </Tag>
        </div>
    </div>
)

export const Default: StoryFn = Template.bind({})
Default.args = {}

const TemplateGroup = (args: any) => (
    <TagGroup i18n={{ more: 'more', modalHeadline: 'Headine' }}>
        <Tag {...args}>oic.d.clouddevice</Tag>
        <Tag {...args}>oic.wk.d</Tag>
        <Tag {...args}>oic.wk.e</Tag>
        <Tag {...args}>oic.wk.f</Tag>
        <Tag {...args}>oic.wk.g</Tag>
    </TagGroup>
)

export const Group: StoryFn = TemplateGroup.bind({})
Group.args = {}
