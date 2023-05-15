import { render, waitFor } from '@testing-library/react'
import ActionButton from './ActionButton'

describe('<ActionButton>', () => {
    it('render correctly - snapshot', async () => {
        const { asFragment } = render(
            <ActionButton
                defaultOpen={true}
                items={[
                    {
                        onClick: () => console.log('Create'),
                        label: 'Create',
                        icon: 'plus',
                    },
                    {
                        onClick: () => console.log('Update'),
                        label: 'Update',
                        icon: 'edit',
                    },
                    {
                        onClick: () => console.log('Delete'),
                        label: 'Delete',
                        icon: 'trash',
                    },
                ]}
            />
        )

        await waitFor(() => {
            expect(asFragment()).toMatchSnapshot()
        })
    })
})
