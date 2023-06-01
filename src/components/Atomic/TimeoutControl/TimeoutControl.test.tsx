import React from 'react'
import { render } from '@testing-library/react'
import TimeoutControl from './TimeoutControl'

describe('<TimeoutControl>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <TimeoutControl
                    defaultTtlValue={10000000000}
                    defaultValue={10000000000}
                    i18n={{
                        default: 'default',
                        duration: 'duration',
                        placeholder: 'placeholder',
                        unit: 'unit',
                    }}
                    onChange={() => {}}
                />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
