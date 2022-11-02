import React, { useRef } from 'react'
import Table from '../../components/new/TableNew'
import TableActions from '../../components/new/TableNew/TableActions'
import Button from '../../components/new/Button'
import Tag from '../../components/new/Tag'
import StatusPill from '../../components/new/StatusPill'
import sample from 'lodash/sample'
import '../global.css'

export default {
    title: 'Table/Table',
    component: Table,
    argTypes: {},
}

var randomWords = require('random-words')

const columns = [
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
]

const data = Array.from(Array(100).keys()).map((item) => ({
    col1: randomWords({ exactly: 3 }).join(' '),
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
}))

const Template = (args) => {
    const ref = useRef()
    return (
        <div>
            <Table
                autoFillEmptyRows
                bottomControls={
                    <Button disabled={false} icon='fa-trash-alt' variant='secondary'>
                        Button
                    </Button>
                }
                className='with-selectable-rows'
                columns={columns}
                data={data}
                defaultPageSize={10}
                // getRowProps={(row) => ({
                //     className: classNames({
                //         'grayed-out': row.original?.status === UNOWNED,
                //     }),
                // })}
                defaultSortBy={[
                    {
                        id: 'name',
                        desc: false,
                    },
                ]}
                getColumnProps={(column) => {
                    if (column.id === 'actions') {
                        return { style: { textAlign: 'center' } }
                    }

                    return {}
                }}
                onRowsSelect={() => console.log('onRowsSelect')}
                paginationPortalTarget={ref}
                primaryAttribute='id'
                unselectRowsToken={() => console.log('unselectRowsToken')}
            />
            <div id='paginationPortalTarget' ref={ref} style={{ border: '1px solid red', marginTop: '20px' }}></div>
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {}
