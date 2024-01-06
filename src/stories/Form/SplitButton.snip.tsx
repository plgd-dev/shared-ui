import React from 'react'
import SplitButton from '../../components/Atomic/SplitButton'

const items = [
    {
        onClick: () => console.log('onItemClick'),
        label: 'Item 1',
        icon: 'lock',
    },
    {
        onClick: () => console.log('onItemClick'),
        label: 'Item 2',
        icon: 'log',
    },
    {
        onClick: () => console.log('onItemClick'),
        label: 'Item 3',
        icon: 'net',
    },
]

export default (args?: any) => (
    <div>
        <div className='custom-row'>
            <div className='custom-cell'>
                <SplitButton {...args} children='Primary' items={items} variant='primary' />
            </div>
            <div className='custom-cell'>
                <SplitButton {...args} children='Secondary' items={items} variant='secondary' />
            </div>
        </div>
    </div>
)
