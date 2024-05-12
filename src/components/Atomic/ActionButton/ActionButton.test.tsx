import { waitFor } from '@testing-library/react'

import { render } from '../../../../test/jest-wrapper'
import ActionButton from './ActionButton'
import { IconEdit, IconPlus, IconTrash } from '../Icon'

describe('<ActionButton>', () => {
    it('render correctly - snapshot', async () => {
        const { asFragment } = render(
            <ActionButton
                defaultOpen={true}
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
            />
        )

        await waitFor(() => {
            expect(asFragment()).toMatchSnapshot()
        })
    })
})
