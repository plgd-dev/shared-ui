import React from 'react'
import SimpleStripTable from '../../components/new/SimpleStripTable'
import TagGroup from '../../components/new/TagGroup'
import Tag from '../../components/new/Tag'
import { Icon } from '../../components/new/Icon'

export default {
    title: 'Table/SimpleStripTable',
    component: SimpleStripTable,
    argTypes: {},
}

const Template = (args) => {
    return (
        <div>
            <SimpleStripTable
                rows={[
                    { attribute: 'ID', value: '738d9afc-a457-4f2d-9393-ca09c118b656' },
                    { attribute: 'Model', value: 'doorbell-2020-11-03' },
                    {
                        attribute: 'Types',
                        value: (
                            <TagGroup>
                                <Tag {...args}>oic.d.clouddevice</Tag>
                                <Tag {...args}>oic.d.clouddevice</Tag>
                                <Tag {...args}>oic.d.clouddevice</Tag>
                                <Tag {...args}>oic.d.clouddevice</Tag>
                            </TagGroup>
                        ),
                    },
                    {
                        attribute: 'Firmware',
                        value: (
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span style={{ marginRight: 6 }}>0.22.1</span> <Icon icon='cloud-success' size={24} />
                            </div>
                        ),
                    },
                    { attribute: 'Status', value: '3 pending commands' },
                ]}
            />
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {}
