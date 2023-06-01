import React from 'react'
import { render } from '@testing-library/react'
import SimpleStripTable from './SimpleStripTable'

describe('<SimpleStripTable>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <SimpleStripTable
                rows={[
                    { attribute: 'attribute1', value: 'value1' },
                    { attribute: 'attribute2', value: 'value2' },
                    { attribute: 'attribute3', value: 'value3' },
                ]}
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
