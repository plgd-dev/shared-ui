import React from 'react'
import { waitFor } from '@testing-library/react'

import { render } from '../../../../test/jest-wrapper'
import ResourceToggleCreatorSnip from './ResourceToggleCreator.snip'

describe('<ResourceToggleCreator>', () => {
    it('render correctly - snapshot', async () => {
        const { asFragment } = render(<ResourceToggleCreatorSnip />)

        await waitFor(() => {
            expect(asFragment()).toMatchSnapshot()
        })
    })
})
