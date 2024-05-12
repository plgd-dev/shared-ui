import { render } from '../../../../test/jest-wrapper'
import FormSelect from './FormSelect'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
]

describe('<FormSelect>', () => {
    it('render correctly - snapshot', () => {
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
