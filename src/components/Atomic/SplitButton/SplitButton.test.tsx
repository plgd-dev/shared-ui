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
                <SplitButton children='Primary' variant='primary' items={items} />
                <SplitButton children='Secondary' variant='secondary' items={items} />
                <SplitButton children='Primary' variant='primary' items={items} disabled={true} />
                <SplitButton children='Secondary' variant='secondary' items={items} disabled={true} />
                <SplitButton children='Primary' variant='primary' items={items} icon={<IconPlus />} />
                <SplitButton children='Secondary' variant='secondary' items={items} icon={<IconPlus />} />
                <SplitButton children='Primary' variant='primary' items={items} loading={true} />
                <SplitButton children='Secondary' variant='secondary' items={items} loading={true} />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
