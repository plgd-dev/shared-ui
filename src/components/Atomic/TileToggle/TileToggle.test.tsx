import React from 'react'
import { render } from '@testing-library/react'
import TileToggle from './TileToggle'

describe('<TileToggle>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <TileToggle checked={true} name='Checked' onChange={() => {}} />
                <TileToggle checked={false} name='UnChecked' onChange={() => {}} />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
