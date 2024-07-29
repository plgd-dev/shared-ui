import React, { useState } from 'react'
import Tabs, { TabItem } from '../components/Atomic/Tabs/Tabs'
import { StoryFn } from '@storybook/react'

export default {
    title: 'Example/Tabs',
    component: Tabs,
    argTypes: {},
}

const Content = (props: any) => <div style={{ height: 300, background: '#e5e5e5' }}>Content {props.id}</div>

const Template = (args: any) => {
    const [activeItem, setActiveItem] = useState(0)

    return (
        <div>
            <Tabs {...args} activeItem={activeItem} onItemChange={(activeItem: number) => setActiveItem(activeItem)} testujeme={<Content />}>
                <TabItem content={<Content id={0} />} id={0} name='Device information' />
                <TabItem content={<Content id={1} />} id={1} name='Resources' />
            </Tabs>
        </div>
    )
}

export const Default: StoryFn = Template.bind({})
Default.args = {}
