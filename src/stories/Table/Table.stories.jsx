import React, { useMemo, useRef, useState } from 'react'
import Table from '../../components/Atomic/TableNew'
import TableActions from '../../components/Atomic/TableNew/TableActions'
import Button from '../../components/Atomic/Button'
import Tag from '../../components/Atomic/Tag'
import StatusPill from '../../components/Atomic/StatusPill'
import sample from 'lodash/sample'
import '../global.css'
import TableSelectionPanel from '../../components/Atomic/TableNew/TableSelectionPanel/TableSelectionPanel'
import { IconEdit, IconLink, IconShowPassword, IconTrash } from '../../components/Atomic/IntlProvider'
import { generate } from 'random-words'

export default {
    title: 'Table/Table',
    component: Table,
    argTypes: {},
}

const Template = (args) => {
    const ref = useRef()
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
                    <Tag icon={<IconLink />} onClick={console.log}>
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
                            { icon: <IconTrash />, onClick: console.log, id: `delete-row-${row.index}`, tooltipText: 'Delete' },
                            { icon: <IconShowPassword />, onClick: console.log, id: `detail-row-${row.index}`, tooltipText: 'Detail' },
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
                col1: generate({ exactly: 3 }).join(' '),
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

    const [selected, setSelected] = useState({ 94: true })
    const [isAllSelected, setIsAllSelected] = useState(false)
    const selectedCount = Object.keys(selected).length

    return (
        <div>
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
                    search: 'search',
                }}
                onRowsSelect={(isAllRowsSelected, selection) => {
                    isAllRowsSelected !== isAllSelected && setIsAllSelected(isAllRowsSelected)
                    setSelected(selection)
                }}
                paginationPortalTarget={ref}
            />
            <div id='paginationPortalTarget' ref={ref} style={{ border: '1px solid red', marginTop: '20px' }}></div>
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
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {}

const TemplateSmall = (args) => {
    const ref = useRef()
    const columns = useMemo(
        () => [
            {
                Header: 'Href',
                accessor: 'col1',
                style: { width: '300px', minWidth: '200px' },
                Cell: ({ value, row }) => (
                    <span className='no-wrap-text' onClick={() => console.log('click')} style={{ color: '#2261AE', cursor: 'pointer' }}>
                        {value}
                        {row.id}
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
                            { icon: <IconTrash />, onClick: console.log, id: `delete-row-${row.index}`, tooltipText: 'Delete' },
                            { icon: <IconEdit />, onClick: console.log, id: `edit-row-${row.index}`, tooltipText: 'Edit' },
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
                col1: '/light/',
                col2: 'core.light',
            })),
        []
    )

    return (
        <div>
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
                i18n={{
                    search: 'search',
                }}
                paginationPortalTarget={ref}
            />
            <div id='paginationPortalTarget' ref={ref} style={{ border: '1px solid red', marginTop: '20px' }}></div>
        </div>
    )
}

export const Small = TemplateSmall.bind({})
Small.args = {}
