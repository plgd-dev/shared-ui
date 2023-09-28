import React, { useState } from 'react'
import Tabs from '../components/Atomic/Tabs'

export default {
    title: 'Example/Tabs',
    component: Tabs,
    argTypes: {},
}

const Template = (args) => {
    const [activeItem, setActiveItem] = useState(0)
    return (
        <div>
            <Tabs
                {...args}
                activeItem={activeItem}
                onItemChange={(activeItem) => setActiveItem(activeItem)}
                tabs={[
                    { id: 0, name: 'Device information', content: <div style={{ height: 300, background: '#e5e5e5' }}>Device information content</div> },
                    { id: 1, name: 'Resources', content: <div style={{ height: 300, background: '#e5e5e5' }}>Resources content</div> },
                ]}
            />
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {}
