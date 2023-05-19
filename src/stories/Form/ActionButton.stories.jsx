import React from 'react'
import ActionButton from '../../components/Atomic/ActionButton'
import '../global.css'
import { IconEdit, IconPlus, IconTrash } from '../../components/Atomic'

export default {
    title: 'Form/ActionButton',
    component: ActionButton,
}

const Template = (args) => (
    <div
        style={{
            margin: 100,
            border: '1px solid #ccc',
            display: 'inline-block',
        }}
    >
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
    </div>
)

export const Variants = Template.bind({})
Variants.args = {}
