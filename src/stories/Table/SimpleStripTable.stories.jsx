import React from 'react'
import SimpleStripTable from '../../components/Atomic/SimpleStripTable'
import TagGroup from '../../components/Atomic/TagGroup'
import Tag from '../../components/Atomic/Tag'
import IconCloudSuccess from '../../components/Atomic/Icon/components/IconCloudSuccess'

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
                            <TagGroup
                                i18n={{
                                    modalHeadline: 'Tags',
                                    more: 'more',
                                }}
                            >
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
                                <span style={{ marginRight: 6 }}>0.22.1</span> <IconCloudSuccess />
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
