import React from 'react'
import TileExpand from '../components/Atomic/TileExpand/TileExpand'
import StatusTag from '../components/Atomic/StatusTag'
import Row from '../components/Atomic/Grid/Row'
import Column from '../components/Atomic/Grid/Column'

export default {
    title: 'Example/TileExpand',
    component: TileExpand,
    argTypes: {},
}

const Template = (args) => (
    <div style={{ padding: '0 20px' }}>
        <Row>
            <Column size={4}>
                <TileExpand
                    {...args}
                    error={{
                        groupTitle: 'Error message',
                        title: 'Cannot update resource',
                        message: 'rpc error: code = Permission Denied decs = error response from device.',
                    }}
                    i18n={{
                        copy: 'copy',
                    }}
                    information={{
                        groupTitle: 'Information',
                        rows: [
                            { attribute: 'Subject ID', value: '738d9afc-a457-4f2d-9393-ca09c118b656' },
                            { attribute: 'Identity Certificate', value: '738d9afc-a457-4f2d-9393-ca09c118b656' },
                            { attribute: 'Key', value: '**** ****', copyValue: '738d9afc-a457-4f2d-9393-ca09c118b656' },
                        ],
                    }}
                    statusTag={
                        <StatusTag {...args} variant='success'>
                            status
                        </StatusTag>
                    }
                    time='10:28:36'
                    title='Title'
                />
            </Column>
            <Column size={4}>
                <TileExpand
                    {...args}
                    defaultOpen={true}
                    error={{
                        groupTitle: 'Error message',
                        title: 'Cannot update resource',
                        message: 'rpc error: code = Permission Denied decs = error response from device.',
                    }}
                    i18n={{
                        copy: 'copy',
                    }}
                    information={{
                        groupTitle: 'Information',
                        rows: [
                            { attribute: 'Subject ID', value: '738d9afc-a457-4f2d-9393-ca09c118b656' },
                            { attribute: 'Identity Certificate', value: '738d9afc-a457-4f2d-9393-ca09c118b656' },
                            { attribute: 'Key', value: '**** ****', copyValue: '738d9afc-a457-4f2d-9393-ca09c118b656' },
                        ],
                    }}
                    statusTag={
                        <StatusTag {...args} variant='success'>
                            status
                        </StatusTag>
                    }
                    time='10:28:36'
                    title='Title'
                />
            </Column>
        </Row>
    </div>
)

export const Default = Template.bind({})
Default.args = {}
