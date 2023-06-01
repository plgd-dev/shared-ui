import React from 'react'
import { render } from '@testing-library/react'
import Radio from './Radio'

describe('<Radio>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <Radio items={[{ value: '1' }, { value: '2' }]} name='radio1' onChange={() => {}} />
                <Radio
                    items={[
                        { value: '1', label: '1' },
                        { value: '2', label: '2' },
                    ]}
                    onChange={() => {}}
                    name='radio1'
                />
                <Radio
                    defaultValue='2'
                    onChange={() => {}}
                    items={[
                        { value: '1', label: '1' },
                        { value: '2', label: '2' },
                    ]}
                    name='radio1'
                />
                <Radio
                    error={true}
                    onChange={() => {}}
                    items={[
                        { value: '1', label: '1' },
                        { value: '2', label: '2' },
                    ]}
                    name='radio1'
                />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
