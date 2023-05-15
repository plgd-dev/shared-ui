import React, { useMemo, useRef, useState } from 'react'
import Layout from '../../components/Layout'
import LeftPanel from '../../components/Layout/LeftPanel'
import Header from '../../components/Layout/Header'
import UserWidget from '../../components/Layout/Header/UserWidget'
import Content from '../../components/Layout/Content'
import Button from '../../components/Atomic/Button'
import VersionMark from '../../components/Atomic/VersionMark'
import Footer from '../../components/Layout/Footer'
import roman from '../assets/roman.png'
import StatusPill from '../../components/Atomic/StatusPill'
import Tag from '../../components/Atomic/Tag'
import TableActions from '../../components/Atomic/TableNew/TableActions'
import sample from 'lodash/sample'
import Table from '../../components/Atomic/TableNew'
import TableSelectionPanel from '../../components/Atomic/TableNew/TableSelectionPanel'
import Breadcrumbs from '../../components/Layout/Header/Breadcrumbs'
import StatusTag from '../../components/Atomic/StatusTag'
import TileToggle from '../../components/Atomic/TileToggle'
import TileToggleRow from '../../components/Atomic/TileToggle/TileToggleRow'
import Headline from '../../components/Atomic/Headline'
import Tabs from '../../components/Atomic/Tabs'
import TagGroup from '../../components/Atomic/TagGroup'
import { Icon } from '../../components/Atomic/Icon'
import SimpleStripTable from '../../components/Atomic/SimpleStripTable'
import { leftPanelMenu } from '../data'
import { severities } from '../../components/Atomic/VersionMark/constants'

export default {
    title: 'Layout/Layout',
    component: Layout,
    argTypes: {},
}

const TemplateDashboard = (args) => {
    const menu = useMemo(() => leftPanelMenu, [])
    const [footerExpanded, setFooterExpanded] = useState(false)

    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'col1',
                Cell: ({ value, row }) => (
                    <span className='no-wrap-text' style={{ color: '#252626' }}>
                        {value}
                    </span>
                ),
                style: { width: '100%' },
            },
            {
                Header: 'ID',
                accessor: 'col2',
                style: { maxWidth: '350px', width: '100%' },
                Cell: ({ value }) => <span className='no-wrap-text'>{value}</span>,
            },
            {
                Header: 'Status',
                accessor: 'col3',
                style: { width: '300px' },
                Cell: ({ value }) => (
                    <StatusPill
                        label={value.state === 'online' ? 'Online' : 'Offline'}
                        pending={value.pending.show ? { text: `${value.pending.number} pending commands`, onClick: console.log } : undefined}
                        status={value.state}
                        tooltipText={
                            value.state === 'online' ? (
                                'Connected at: xxxxx'
                            ) : (
                                <span>
                                    Last time online: <strong>31.9.2022 - 16:32</strong>
                                </span>
                            )
                        }
                    />
                ),
            },
            {
                Header: 'Protocol',
                accessor: 'col4',
                style: { width: '250px' },
                Cell: ({ value }) => <span className='no-wrap-text'>{value}</span>,
            },
            {
                Header: 'Shared',
                accessor: 'col5',
                Cell: ({ value }) => (
                    <Tag icon='link' onClick={console.log}>
                        {value}
                    </Tag>
                ),
            },
            {
                Header: 'Actions',
                accessor: 'col6',
                disableSortBy: true,
                Cell: ({ row }) => (
                    <TableActions
                        items={[
                            { icon: 'trash', onClick: console.log, id: `delete-row-${row.index}`, tooltipText: 'Delete' },
                            { icon: 'icon-show-password', onClick: console.log, id: `detail-row-${row.index}`, tooltipText: 'Detail' },
                        ]}
                    />
                ),
                className: 'actions',
            },
        ],
        []
    )
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
                Cell: ({ row }) => <TableActions items={[{ icon: 'trash', onClick: console.log, id: `delete-row-${row.index}`, tooltipText: 'Delete' }]} />,
                className: 'actions',
            },
        ],
        []
    )
    const data = useMemo(
        () =>
            Array.from(Array(100).keys()).map((item) => ({
                col1: 'Name field value',
                col2: '376ee947-4801-5cfe-3a8f-49103697f7d1',
                col3: {
                    state: sample(['online', 'offline']),
                    pending: {
                        show: sample([0, 0, 0, 1]),
                        number: Math.floor(Math.random() * 8) + 1,
                    },
                },
                col4: 'tcp',
                col5: 'tag',
            })),
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

    const [selected, setSelected] = useState({})
    const [isAllSelected, setIsAllSelected] = useState(false)
    const selectedCount = useMemo(() => Object.keys(selected).length, [selected])
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Layout
            {...args}
            collapsedMenu={collapsed}
            content={
                <Content
                    actions={[
                        {
                            icon: 'refresh',
                            text: 'Secondary',
                            onClick: () => console.log('secondary'),
                        },
                        {
                            icon: 'plus',
                            text: 'Primary',
                            variant: 'primary',
                            onClick: () => console.log('primary'),
                        },
                    ]}
                    headline='August Doorbell Cam'
                >
                    <Table
                        columns={columns}
                        data={data}
                        defaultPageSize={10}
                        defaultSelectedRowIds={selected}
                        defaultSortBy={[
                            {
                                id: 'name',
                                desc: false,
                            },
                        ]}
                        i18n={{
                            search: 'Search',
                        }}
                        onRowsSelect={(isAllRowsSelected, selection) => {
                            isAllRowsSelected !== isAllSelected && setIsAllSelected(isAllRowsSelected)
                            setSelected(selection)
                        }}
                        paginationPortalTargetId='paginationPortalTarget'
                    />
                    <TableSelectionPanel
                        actionPrimary={<Button variant='primary'>Main Action</Button>}
                        actionSecondary={
                            <Button htmlType='button' key={1}>
                                Secondary Action
                            </Button>
                        }
                        selectionInfo={`${selectedCount} device${selectedCount > 1 ? 's' : ''} `}
                        show={selectedCount > 0}
                    />
                </Content>
            }
            footer={
                <Footer
                    footerExpanded={footerExpanded}
                    paginationComponent={<div id='paginationPortalTarget'></div>}
                    recentTasks={
                        <Table
                            columns={tasksColumns}
                            data={tasksData}
                            defaultPageSize={10}
                            globalSearch={false}
                            i18n={{
                                search: 'Search',
                            }}
                        />
                    }
                    recentTasksPortal={<div id='recentTasksPortalTarget'></div>}
                    recentTasksPortalTitle={<span id='recentTasksPortalTitleTarget'></span>}
                    recentTasksTitle='Recent tasks'
                    setFooterExpanded={setFooterExpanded}
                />
            }
            header={
                <Header
                    onCollapseToggle={() => setCollapsed(!collapsed)}
                    userWidget={<UserWidget description='2nd line' image={<img alt='roman' src={roman} />} name='Janko Hraško' />}
                />
            }
            leftPanel={
                <LeftPanel
                    collapsed={collapsed}
                    menu={menu}
                    newFeature={{
                        onClick: () => console.log('click'),
                        onClose: () => console.log('close'),
                    }}
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

export const Devices = TemplateDashboard.bind({})
Devices.args = {}
Devices.parameters = {
    layout: 'fullscreen',
}

const TemplateDeviceDetail = (args) => {
    const menu = useMemo(() => leftPanelMenu, [])

    const columns = useMemo(
        () => [
            {
                Header: 'Href',
                accessor: 'col1',
                style: { width: '300px', minWidth: '200px' },
                Cell: ({ value, row }) => (
                    <span className='no-wrap-text' onClick={() => console.log('click')} style={{ color: '#2261AE', cursor: 'pointer' }}>
                        {value}
                        {parseInt(row.id, 10) + 1}
                    </span>
                ),
            },
            {
                Header: 'Types',
                accessor: 'col2',
                Cell: ({ value }) => <span className='no-wrap-text'>{value}</span>,
                style: { width: '100%' },
            },
            {
                Header: 'Actions',
                accessor: 'col3',
                disableSortBy: true,
                Cell: ({ row }) => (
                    <TableActions
                        items={[
                            { icon: 'trash', onClick: console.log, id: `delete-row-${row.index}`, tooltipText: 'Delete' },
                            { icon: 'edit', onClick: console.log, id: `edit-row-${row.index}`, tooltipText: 'Edit' },
                        ]}
                    />
                ),
                className: 'actions',
            },
        ],
        []
    )
    const data = useMemo(
        () =>
            Array.from(Array(50).keys()).map((item) => ({
                col1: '/light/',
                col2: 'core.light',
            })),
        []
    )

    const [collapsed, setCollapsed] = useState(false)
    const [footerExpanded, setFooterExpanded] = useState(false)

    const Tab1 = () => {
        const [state, setState] = useState({
            tile1: false,
            tile2: false,
            tile3: false,
        })
        return (
            <div
                style={{
                    paddingTop: 8,
                }}
            >
                <TileToggleRow>
                    <TileToggle checked={state.tile1} name='Twin state' onChange={() => setState({ ...state, tile1: !state.tile1 })} />
                    <TileToggle checked={state.tile2} name='Subscribe & notify' onChange={() => setState({ ...state, tile2: !state.tile2 })} />
                    <TileToggle checked={state.tile3} name='Logging' onChange={() => setState({ ...state, tile3: !state.tile3 })} />
                </TileToggleRow>
                <div style={{ paddingTop: 16 }}>
                    <SimpleStripTable
                        rows={[
                            { attribute: 'ID', value: '738d9afc-a457-4f2d-9393-ca09c118b656' },
                            { attribute: 'Model', value: 'doorbell-2020-11-03' },
                            {
                                attribute: 'Types',
                                value: (
                                    <TagGroup>
                                        <Tag {...args}>oic.d.clouddevice</Tag>
                                        <Tag {...args}>oic.d.clouddevice</Tag>
                                        <Tag {...args}>oic.d.clouddevice</Tag>
                                        <Tag {...args}>oic.d.clouddevice</Tag>
                                        <Tag {...args}>oic.d.clouddevice</Tag>
                                    </TagGroup>
                                ),
                            },
                            {
                                attribute: 'Firmware',
                                value: (
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <span style={{ marginRight: 6 }}>0.22.1</span> <Icon icon='cloud-success' size={24} />
                                    </div>
                                ),
                            },
                            { attribute: 'Status', value: '3 pending commands' },
                        ]}
                    />
                </div>
            </div>
        )
    }

    const Tab2 = () => (
        <>
            <div
                style={{
                    padding: '24px 0',
                }}
            >
                <Headline type='h5'>Resources</Headline>
            </div>
            <Table
                columns={columns}
                data={data}
                defaultPageSize={10}
                defaultSortBy={[
                    {
                        id: 'name',
                        desc: false,
                    },
                ]}
                i18n={{
                    search: 'Search',
                }}
                paginationPortalTargetId='paginationPortalTarget'
            />
        </>
    )

    return (
        <Layout
            {...args}
            collapsedMenu={collapsed}
            content={
                <Content headline='August Doorbell Cam' headlineStatusTag={<StatusTag variant='error'>offline</StatusTag>}>
                    <div
                        style={{
                            marginTop: '-16px',
                        }}
                    >
                        <Tabs
                            {...args}
                            onItemChange={(activeItem) => console.log(`Active item: ${activeItem}`)}
                            tabs={[
                                { name: 'Device information', content: <Tab1 /> },
                                { name: 'Resources', content: <Tab2 /> },
                            ]}
                        />
                    </div>
                </Content>
            }
            footer={
                <Footer
                    footerExpanded={footerExpanded}
                    paginationComponent={<div id='paginationPortalTarget'></div>}
                    recentTasksPortal={<div id='recentTasksPortalTarget'></div>}
                    recentTasksPortalTitle={<span id='recentTasksPortalTitleTarget'></span>}
                    setFooterExpanded={setFooterExpanded}
                    versionComponent={<VersionMark severity='success' versionText='Version 2.02' />}
                />
            }
            header={
                <Header
                    breadcrumbs={<Breadcrumbs items={[{ label: 'Devices', link: 'devices' }, { label: ' August Doorbell Cam' }]} />}
                    onCollapseToggle={() => setCollapsed(!collapsed)}
                    userWidget={<UserWidget description='2nd line' image={<img alt='roman' src={roman} />} name='Janko Hraško' />}
                />
            }
            leftPanel={
                <LeftPanel
                    collapsed={collapsed}
                    menu={menu}
                    newFeature={{
                        onClick: () => console.log('click'),
                        onClose: () => console.log('close'),
                    }}
                    versionMark={<VersionMark severity={severities.SUCCESS} versionText='Version 2.02' />}
                />
            }
        />
    )
}

export const DeviceDetail = TemplateDeviceDetail.bind({})
DeviceDetail.args = {}
DeviceDetail.parameters = {
    layout: 'fullscreen',
}
