import React from 'react'
import { IconEdit, IconPlus, IconTrash } from '../../components/Atomic/Icon'
import ActionButton from '../../components/Atomic/ActionButton'

export default (args?: any) => (
    <ActionButton
        {...args}
        items={[
            {
                onClick: () => console.log('Create'),
                label: 'Create',
                icon: <IconPlus />,
            },
            {
                onClick: () => console.log('Update'),
                label: 'Update',
                icon: <IconEdit />,
            },
            {
                onClick: () => console.log('Delete'),
                label: 'Delete',
                icon: <IconTrash />,
            },
        ]}
        menuProps={{
            placement: 'bottom-end',
        }}
    />
)
