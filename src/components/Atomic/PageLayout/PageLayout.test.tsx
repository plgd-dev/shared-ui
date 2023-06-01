import React from 'react'
import { render } from '@testing-library/react'
import PageLayout from './PageLayout'
import Footer from 'src/components/Layout/Footer'

describe('<PageLayout>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <PageLayout
                breadcrumbs={[
                    {
                        label: 'Breadcrumb label',
                    },
                ]}
                footer={
                    <Footer
                        footerExpanded={false}
                        paginationComponent={<div id='paginationPortalTarget'></div>}
                        recentTasksPortal={<div id='recentTasksPortalTarget'></div>}
                        recentTasksPortalTitle={<span>recentTasksPortalTitle</span>}
                    />
                }
                header={<div>Custom Header</div>}
                loading={false}
                title='PageLayoutTitle'
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
