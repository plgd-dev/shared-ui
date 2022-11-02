import React from 'react'
import Footer from '../../components/new/Layout/Footer'
import Pagination from '../../components/new/Layout/Footer/Pagination'
import VersionMark from '../../components/new/VersionMark'

export default {
    title: 'Layout/Footer',
    component: Footer,
    argTypes: {},
}

const Template = (args) => (
    <div style={{ background: '#ccc', height: '100%', paddingTop: '200px', boxSizing: 'border-box' }}>
        <Footer
            paginationComponent={
                <Pagination
                    canNextPage={true}
                    canPreviousPage={true}
                    gotoPage={console.log}
                    nextPage={console.log}
                    pageCount={10}
                    pageIndex={3}
                    pageLength={10}
                    pageSize={10}
                    pages={5}
                    previousPage={console.log}
                    setPageSize={console.log}
                />
            }
            versionComponent={<VersionMark severity='success' versionText='Version 2.02' />}
        />
    </div>
)

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
    layout: 'fullscreen',
}
