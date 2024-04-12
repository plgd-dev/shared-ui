import React from 'react'
import { render } from '@testing-library/react'
import SplitButton from './SplitButton'
import { IconPlus } from '../Icon'

describe('<SimpleStripTable>', () => {
    it('render correctly - snapshot', () => {
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
        const { asFragment } = render(
            <div>
                <SplitButton children='Primary' items={items} variant='primary' />
                <SplitButton children='Secondary' items={items} variant='secondary' />
                <SplitButton children='Primary' disabled={true} items={items} variant='primary' />
                <SplitButton children='Secondary' disabled={true} items={items} variant='secondary' />
                <SplitButton children='Primary' icon={<IconPlus />} items={items} variant='primary' />
                <SplitButton children='Secondary' icon={<IconPlus />} items={items} variant='secondary' />
                <SplitButton children='Primary' items={items} loading={true} variant='primary' />
                <SplitButton children='Secondary' items={items} loading={true} variant='secondary' />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
