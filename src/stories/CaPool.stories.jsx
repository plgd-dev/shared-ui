import React from 'react'
import CaPool from '../components/Organisms/CaPool'

export default {
    title: 'Example/CaPool',
    component: CaPool,
    argTypes: {},
}

const Template = (args) => (
    <div style={{ width: '700px' }}>
        <CaPool
            {...args}
            headline='CA Pool'
            i18n={{
                delete: 'delete',
                search: 'search',
                view: 'view',
            }}
        />
    </div>
)

export const Default = Template.bind({})
Default.args = {}
