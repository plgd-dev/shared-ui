import React from 'react'
import { render } from '@testing-library/react'
import FormSelect from '../FormSelect'

describe('<Select>', () => {
    it('render correctly - snapshot', () => {
        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
        ]
        const { asFragment } = render(
            <div>
                <FormSelect name='form-select-1' options={options} />
                <br />
                <FormSelect defaultValue={options[1]} menuIsOpen={true} name='form-select-2' options={options} />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
