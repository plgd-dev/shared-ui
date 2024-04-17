import React, { useMemo, useState } from 'react'
import { useTheme } from '@emotion/react'
import { AnimatePresence, motion } from 'framer-motion'

import Layout from '../../components/Layout'
import LeftPanel from '../../components/Layout/LeftPanel'
import Header from '../../components/Layout/Header'
import VersionMark from '../../components/Atomic/VersionMark'
import Footer from '../../components/Layout/Footer'
import TableActions from '../../components/Atomic/TableNew/TableActions'
import Table from '../../components/Atomic/TableNew'
import { IconTrash } from '../../components/Atomic/Icon'
import { leftPanelMenu } from '../data'
import PageLayout from '../../components/Atomic/PageLayout'
import { severities } from '../../components/Atomic/VersionMark/constants'
import Logo from '../../components/Atomic/Logo'

export default {
    title: 'Layout/PageLayout',
    component: PageLayout,
    argTypes: {},
}

const TemplateDashboard = (args) => {
    const menu = useMemo(() => leftPanelMenu, [])
    const [footerExpanded, setFooterExpanded] = useState(false)

    const tasksColumns = useMemo(
        () => [
            {
                Header: 'Created',
                accessor: 'col1',
                Cell: ({ value, row }) => <span className='no-wrap-text'>{value}</span>,
            },
            {
                Header: 'Type',
                accessor: 'col2',
                Cell: ({ value }) => <span className='no-wrap-text'>{value}</span>,
            },
            {
                Header: 'Resource href',
                accessor: 'col3',
                style: { width: '300px' },
                Cell: ({ value }) => <span className='no-wrap-text'>{value}</span>,
            },
            {
                Header: 'Status',
                accessor: 'col4',
                style: { width: '250px' },
                Cell: ({ value }) => <span className='no-wrap-text'>{value}</span>,
            },
            {
                Header: 'Valid until',
                accessor: 'col5',
                Cell: ({ value }) => <span className='no-wrap-text'>{value}</span>,
            },
            {
                Header: 'Actions',
                accessor: 'col6',
                disableSortBy: true,
                Cell: ({ row }) => (
                    <TableActions items={[{ icon: <IconTrash />, onClick: console.log, id: `delete-row-${row.index}`, tooltipText: 'Delete' }]} />
                ),
                className: 'actions',
            },
        ],
        []
    )

    const tasksData = useMemo(
        () =>
            Array.from(Array(5).keys()).map((item) => ({
                col1: 'Jan 17, 2023 8:50 AM',
                col2: 'Update resource',
                col3: '/light/1',
                col4: 'tcp',
                col5: 'pending',
                col6: 'Jan 17, 2023 8:51 AM',
            })),
        []
    )

    const [collapsed, setCollapsed] = useState(false)

    const theme = useTheme()

    return (
        <Layout
            {...args}
            collapsed={collapsed}
            content={
                <PageLayout
                    collapsed={collapsed}
                    footer={
                        <Footer
                            footerExpanded={footerExpanded}
                            paginationComponent={<div id='paginationPortalTarget'></div>}
                            recentTasksPortal={
                                <div id='recentTasksPortalTarget'>
                                    <AnimatePresence mode='wait'>
                                        {footerExpanded && (
                                            <motion.div
                                                layout
                                                animate={{ opacity: 1, paddingTop: 12 }}
                                                exit={{
                                                    opacity: 0,
                                                    paddingTop: 0,
                                                }}
                                                initial={{ opacity: 0, paddingTop: 0 }}
                                                transition={{
                                                    duration: 0.3,
                                                }}
                                            >
                                                <Table
                                                    columns={tasksColumns}
                                                    data={tasksData}
                                                    defaultPageSize={10}
                                                    globalSearch={false}
                                                    i18n={{
                                                        search: 'Search',
                                                    }}
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            }
                            recentTasksPortalTitle='Recent tasks'
                            setFooterExpanded={setFooterExpanded}
                        />
                    }
                    title='PageLayout title'
                >
                    Layout + Page layout / custom content
                </PageLayout>
            }
            header={<Header breadcrumbs={<div id='breadcrumbsPortalTarget'></div>} />}
            leftPanel={
                <LeftPanel
                    collapsed={collapsed}
                    logo={theme.logo && <Logo logo={theme.logo} onClick={() => console.log()} />}
                    menu={menu}
                    setCollapsed={setCollapsed}
                    versionMark={
                        <VersionMark {...args} severity={severities.SUCCESS} versionText='Version 2.02'>
                            Tag text
                        </VersionMark>
                    }
                />
            }
        />
    )
}

export const Default = TemplateDashboard.bind({})
Default.args = {}
Default.parameters = {
    layout: 'fullscreen',
}
