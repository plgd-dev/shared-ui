import React from 'react'
import Table from '../../components/new/Table'
import Button from '../../components/new/Button'

export default {
    title: 'Table/Table',
    component: Table,
    argTypes: {},
}

const columns = [
    {
        Header: '1',
        accessor: 'data.content.n',
        Cell: ({ value, row }) => {
            return <span className='no-wrap-text'>{value}</span>
        },
        style: { width: '100%' },
    },
    {
        Header: '2',
        accessor: 'types',
        style: { maxWidth: '350px', width: '100%' },
        Cell: ({ value }) => {
            return <span className='no-wrap-text'>{value}</span>
        },
    },
    {
        Header: '3',
        accessor: 'id',
        style: { maxWidth: '350px', width: '100%' },
        Cell: ({ value }) => {
            return <span className='no-wrap-text'>{value}</span>
        },
    },
    {
        Header: '4',
        accessor: 'ownershipStatus',
        style: { width: '250px' },
        Cell: ({ value }) => {
            return <span className='no-wrap-text'>{value}</span>
        },
    },
    {
        Header: _(t.actions),
        accessor: 'actions',
        disableSortBy: true,
        Cell: ({ value }) => {
            return <span className='no-wrap-text'>{value}</span>
        },
        className: 'actions',
    },
]

const data = []

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
