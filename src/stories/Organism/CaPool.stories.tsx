import React, { useCallback, useState } from 'react'
import cloneDeep from 'lodash/cloneDeep'
import { StoryFn } from '@storybook/react'
import CaPool from '../../components/Organisms/CaPool'

export default {
    title: 'Organism/CaPool',
    component: CaPool,
    argTypes: {},
}

const i18n = {
    title: 'title',
    download: 'download',
    edit: 'edit',
    delete: 'delete',
    search: 'search',
    view: 'view',
    showMore: 'showMore',
    update: 'update',
}

const Template = (args: any) => {
    const [data, setData] = useState([
        { id: 0, name: 'ca-item-0', data: {} },
        { id: 1, name: 'ca-item-1', data: {} },
        { id: 2, name: 'ca-item-2', data: {} },
        { id: 3, name: 'ca-item-3', data: {} },
        { id: 4, name: 'ca-item-4', data: {} },
    ])

    const handleDeleteCaItem = useCallback(
        (id: string) => {
            const newData = cloneDeep(data)
            newData.splice(parseInt(id, 10), 1)
            setData(newData)
        },
        [data]
    )

    return (
        <div style={{ width: '700px' }}>
            <CaPool
                {...args}
                data={data}
                headline='CA Pool'
                i18n={i18n}
                onAdd={() => {
                    alert('handle add modal')
                    setData([...data, { id: data.length, name: `ca-item-${data.length}`, data: {} }])
                }}
                onDelete={handleDeleteCaItem}
                onDownload={() => alert('handle download')}
                onEdit={() => alert('handle edit')}
                onView={() => alert('handle view')}
            />
        </div>
    )
}

export const Default: StoryFn = Template.bind({})
Default.args = {}
