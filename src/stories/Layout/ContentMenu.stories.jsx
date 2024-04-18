import React from 'react'
import ContentMenu from '../../components/Atomic/ContentMenu'

export default {
    title: 'Layout/ContentMenu',
    component: ContentMenu,
    argTypes: {},
}

const Template = (args) => {
    const [activeItem, setActiveItem] = React.useState('item1')
    return (
        <div style={{ width: '300px', margin: 50 }}>
            <ContentMenu
                {...args}
                activeItem={activeItem}
                handleItemClick={(item) => setActiveItem(item.id)}
                menu={[
                    {
                        id: 'item1',
                        link: 'item1',
                        title: 'Item 1',
                        children: [
                            {
                                id: 'subitem11',
                                title: 'Subitem 1',
                            },
                            {
                                id: 'subitem12',
                                title: 'Subitem 2',
                            },
                            {
                                id: 'subitem13',
                                title: 'Subitem 3',
                            },
                        ],
                    },
                    {
                        id: 'item2',
                        link: 'item2',
                        title: 'Item 2',
                        children: [
                            {
                                id: 'subitem21',
                                title: 'Subitem 1',
                            },
                            {
                                id: 'subitem22',
                                title: 'Subitem 2',
                            },
                            {
                                id: 'subitem23',
                                title: 'Subitem 3',
                            },
                        ],
                    },
                    {
                        id: 'item3',
                        link: 'item3',
                        title: 'Item 3',
                    },
                ]}
            />
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {}
