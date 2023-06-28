import React from 'react'
import { render } from '@testing-library/react'
import Tabs from './Tabs'

describe('<Tabs>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <Tabs
                    onItemChange={(activeItem) => console.log(`Active item: ${activeItem}`)}
                    tabs={[
                        { name: 'Device information', id: 0, content: <div style={{ height: 300, background: '#e5e5e5' }}>Device information content</div> },
                        { name: 'Resources', id: 1, content: <div style={{ height: 300, background: '#e5e5e5' }}>Resources content</div> },
                    ]}
                />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
