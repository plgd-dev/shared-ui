import React, { useMemo, useRef, useState } from 'react'
import Layout from '../../components/new/Layout'
import LeftPanel from '../../components/new/Layout/LeftPanel'
import Header from '../../components/new/Layout/Header'
import UserWidget from '../../components/new/Layout/Header/UserWidget'
import Content from '../../components/new/Layout/Content'
import Button from '../../components/new/Button'
import VersionMark from '../../components/new/VersionMark'
import Footer from '../../components/new/Layout/Footer'
import roman from '../assets/roman.png'
import StatusPill from '../../components/new/StatusPill'
import Tag from '../../components/new/Tag'
import TableActions from '../../components/new/TableNew/TableActions'
import sample from 'lodash/sample'
import Table from '../../components/new/TableNew'
import TableSelectionPanel from '../../components/new/TableNew/TableSelectionPanel'
import Breadcrumbs from '../../components/new/Layout/Header/Breadcrumbs'
import StatusTag from '../../components/new/StatusTag'
import Tile from '../../components/new/Tile'
import Switch from '../../components/new/Switch'
import TileRow from '../../components/new/Tile/TileRow'
import Headline from '../../components/new/Headline'

export default {
    title: 'Layout/Layout',
    component: Layout,
    argTypes: {},
}

const TemplateDashboard = (args) => {
    const menu = useMemo(
        () => [
            {
                title: 'Main menu',
                items: [
                    {
                        icon: 'dashboard',
                        id: '1',
                        title: 'Dashboard',
                    },
                    {
                        icon: 'devices',
                        id: '2',
                        title: 'Devices',
                    },
                    {
                        icon: 'integrations',
                        id: '3',
                        title: 'Integrations',
                    },
                    {
                        icon: 'remote-clients',
                        id: '4',
                        title: 'Remote clients',
                    },
                    {
                        icon: 'pending-commands',
                        id: '5',
                        title: 'Pending commands',
                    },
                ],
            },
            {
                title: 'Other',
                icon: 'search',
                items: [
                    {
                        icon: 'network',
                        id: '10',
                        title: 'Device provisioning',
                        children: [
                            { icon: 'search', id: '101', title: 'Quickstart', tag: { variant: 'success', text: 'New' } },
                            { icon: 'search', id: '102', title: 'Manage enrollments' },
                            { icon: 'search', id: '103', title: 'Linked hubs' },
                            { icon: 'search', id: '104', title: 'Certificates', tag: { variant: 'info', text: 'Soon!' } },
                            { icon: 'search', id: '105', title: 'Registration records' },
                        ],
                    },
                    {
                        icon: 'device-update',
                        id: '11',
                        title: 'Device firmware update',
                        children: [
                            { icon: 'search', id: '111', title: 'Quickstart 2', tag: { variant: 'success', text: 'New 2' } },
                            { icon: 'search', id: '112', title: 'Manage enrollments 2' },
                            { icon: 'search', id: '113', title: 'Linked hubs 2' },
                            { icon: 'search', id: '114', title: 'Certificates 2', tag: { variant: 'info', text: 'Soon!' } },
                            { icon: 'search', id: '115', title: 'Registration records 2' },
                        ],
                    },
                    {
                        icon: 'log',
                        id: '12',
                        title: 'Device logs',
                    },
                    {
                        icon: 'lock',
                        id: '13',
                        title: 'API tokens',
                    },
                    {
                        icon: 'net',
                        id: '14',
                        title: 'Schema hub',
                    },
                ],
            },
            {
                title: 'Support',
                items: [
                    {
                        icon: 'docs',
                        id: '20',
                        title: 'Docs',
                    },
                    {
                        icon: 'chat',
                        id: '21',
                        title: 'Chat room',
                    },
                ],
            },
        ],
        []
    )

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

    const [selected, setSelected] = useState({})
    const [isAllSelected, setIsAllSelected] = useState(false)
    const selectedCount = useMemo(() => Object.keys(selected).length, [selected])
    const [collapsed, setCollapsed] = useState(false)

    const ref = useRef(null)

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
                        onRowsSelect={(isAllRowsSelected, selection) => {
                            isAllRowsSelected !== isAllSelected && setIsAllSelected(isAllRowsSelected)
                            setSelected(selection)
                        }}
                        paginationPortalTarget={ref}
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
                    paginationComponent={<div id='paginationPortalTarget' ref={ref}></div>}
                    versionComponent={<VersionMark severity='success' versionText='Version 2.02' />}
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
    const menu = useMemo(
        () => [
            {
                title: 'Main menu',
                items: [
                    {
                        icon: 'dashboard',
                        id: '1',
                        title: 'Dashboard',
                    },
                    {
                        icon: 'devices',
                        id: '2',
                        title: 'Devices',
                    },
                    {
                        icon: 'integrations',
                        id: '3',
                        title: 'Integrations',
                    },
                    {
                        icon: 'remote-clients',
                        id: '4',
                        title: 'Remote clients',
                    },
                    {
                        icon: 'pending-commands',
                        id: '5',
                        title: 'Pending commands',
                    },
                ],
            },
            {
                title: 'Other',
                icon: 'search',
                items: [
                    {
                        icon: 'network',
                        id: '10',
                        title: 'Device provisioning',
                        children: [
                            { icon: 'search', id: '101', title: 'Quickstart', tag: { variant: 'success', text: 'New' } },
                            { icon: 'search', id: '102', title: 'Manage enrollments' },
                            { icon: 'search', id: '103', title: 'Linked hubs' },
                            { icon: 'search', id: '104', title: 'Certificates', tag: { variant: 'info', text: 'Soon!' } },
                            { icon: 'search', id: '105', title: 'Registration records' },
                        ],
                    },
                    {
                        icon: 'device-update',
                        id: '11',
                        title: 'Device firmware update',
                        children: [
                            { icon: 'search', id: '111', title: 'Quickstart 2', tag: { variant: 'success', text: 'New 2' } },
                            { icon: 'search', id: '112', title: 'Manage enrollments 2' },
                            { icon: 'search', id: '113', title: 'Linked hubs 2' },
                            { icon: 'search', id: '114', title: 'Certificates 2', tag: { variant: 'info', text: 'Soon!' } },
                            { icon: 'search', id: '115', title: 'Registration records 2' },
                        ],
                    },
                    {
                        icon: 'log',
                        id: '12',
                        title: 'Device logs',
                    },
                    {
                        icon: 'lock',
                        id: '13',
                        title: 'API tokens',
                    },
                    {
                        icon: 'net',
                        id: '14',
                        title: 'Schema hub',
                    },
                ],
            },
            {
                title: 'Support',
                items: [
                    {
                        icon: 'docs',
                        id: '20',
                        title: 'Docs',
                    },
                    {
                        icon: 'chat',
                        id: '21',
                        title: 'Chat room',
                    },
                ],
            },
        ],
        []
    )

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
    const ref = useRef(null)

    return (
        <Layout
            {...args}
            collapsedMenu={collapsed}
            content={
                <Content
                    actions={[
                        {
                            icon: 'trash',
                            text: 'Delete',
                            onClick: () => console.log('secondary'),
                        },
                        {
                            icon: 'plus',
                            text: 'Notification',
                            variant: 'primary',
                            onClick: () => console.log('primary'),
                        },
                    ]}
                    headline='August Doorbell Cam'
                    headlineStatusTag={<StatusTag variant='error'>offline</StatusTag>}
                >
                    <div
                        style={{
                            paddingTop: 8,
                        }}
                    >
                        <TileRow>
                            <Tile {...args} headline='ID'>
                                c486781e-f342-46c9-72fd-b740b7e864af
                            </Tile>
                            <Tile {...args} headline='Types' tags={[<Tag key={1}>oic.d.clouddevice</Tag>, <Tag key={2}>oic.wk.d</Tag>]}></Tile>
                            <Tile {...args} headline='Shadow synchronization' right={<Switch {...args} defaultChecked={true} size='big' />}>
                                Text here
                            </Tile>
                        </TileRow>
                    </div>
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
                        globalSearch={false}
                        paginationPortalTarget={ref}
                    />
                </Content>
            }
            footer={
                <Footer
                    paginationComponent={<div id='paginationPortalTarget' ref={ref}></div>}
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
