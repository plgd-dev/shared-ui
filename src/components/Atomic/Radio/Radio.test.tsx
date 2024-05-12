import React from 'react'
import { render } from '../../../../test/jest-wrapper'
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
                    name='radio1'
                    onChange={() => {}}
                />
                <Radio
                    defaultValue='2'
                    items={[
                        { value: '1', label: '1' },
                        { value: '2', label: '2' },
                    ]}
                    name='radio1'
                    onChange={() => {}}
                />
                <Radio
                    error={true}
                    items={[
                        { value: '1', label: '1' },
                        { value: '2', label: '2' },
                    ]}
                    name='radio1'
                    onChange={() => {}}
                />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
