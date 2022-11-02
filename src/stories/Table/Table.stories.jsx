import React from 'react'
import Table from '../../components/new/TableNew'
import Button from '../../components/new/Button'

export default {
    title: 'Table/Table',
    component: Table,
    argTypes: {},
}

const columns = [
    {
        Header: 'Name',
        accessor: 'col1',
        Cell: ({ value, row }) => {
            return <span className='no-wrap-text'>{value}</span>
        },
        style: { width: '100%' },
    },
    {
        Header: 'ID',
        accessor: 'col2',
        style: { maxWidth: '350px', width: '100%' },
        Cell: ({ value }) => {
            return <span className='no-wrap-text'>{value}</span>
        },
    },
    {
        Header: 'Status',
        accessor: 'col3',
        style: { maxWidth: '350px', width: '100%' },
        Cell: ({ value }) => {
            return <span className='no-wrap-text'>{value}</span>
        },
    },
    {
        Header: 'Protocol',
        accessor: 'col4',
        style: { width: '250px' },
        Cell: ({ value }) => {
            return <span className='no-wrap-text'>{value}</span>
        },
    },
    {
        Header: 'Shared',
        accessor: 'col5',
        Cell: ({ value }) => {
            return <span className='no-wrap-text'>{value}</span>
        },
    },
    {
        Header: 'Actions',
        accessor: 'col6',
        disableSortBy: true,
        Cell: ({ row }) => {
            console.log(row)
            return <span className='no-wrap-text'>A</span>
        },
        className: 'actions',
    },
]

const data = [
    {
        col1: 'Hello',
        col2: 'World',
        col3: 'World',
        col4: 'World',
        col5: 'World',
    },
    {
        col1: 'Hello',
        col2: 'World',
        col3: 'World',
        col4: 'World',
        col5: 'World',
    },
    {
        col1: 'Hello',
        col2: 'World',
        col3: 'World',
        col4: 'World',
        col5: 'World',
    },
    {
        col1: 'Hello',
        col2: 'World',
        col3: 'World',
        col4: 'World',
        col5: 'World',
    },
    {
        col1: 'Hello',
        col2: 'World',
        col3: 'World',
        col4: 'World',
        col5: 'World',
    },
]

const Template = (args) => (
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
        primaryAttribute='id'
        unselectRowsToken={() => console.log('unselectRowsToken')}
    />
)

export const Default = Template.bind({})
Default.args = {}
