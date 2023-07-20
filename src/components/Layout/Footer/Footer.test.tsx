import React from 'react'
import { render } from '@testing-library/react'
import Footer from './Footer'

describe('<Footer>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <Footer
                paginationComponent={<div id='paginationPortalTarget'></div>}
                recentTasksPortal={<div id='recentTasksPortalTarget'></div>}
                recentTasksPortalTitle={<span id='recentTasksPortalTitleTarget'>Recent tasks</span>}
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
