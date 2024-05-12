import React from 'react'
import { render } from '../../../../test/jest-wrapper'
import PageLoader from './PageLoader'

describe('<PageLoader>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <PageLoader loading={true} />
                <PageLoader loading={false} />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
