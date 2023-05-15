import React from 'react'
import Tabs from '../components/Atomic/Tabs'

export default {
    title: 'Example/Tabs',
    component: Tabs,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <Tabs
            {...args}
            onItemChange={(activeItem) => console.log(`Active item: ${activeItem}`)}
            tabs={[
                { name: 'Device information', content: <div style={{ height: 300, background: '#e5e5e5' }}>Device information content</div> },
                { name: 'Resources', content: <div style={{ height: 300, background: '#e5e5e5' }}>Resources content</div> },
            ]}
        />
    </div>
)

export const Default = Template.bind({})
Default.args = {}
