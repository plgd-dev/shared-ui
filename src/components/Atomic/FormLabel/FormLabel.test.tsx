import { render } from '../../../../test/jest-wrapper'
import FormLabel from '../FormLabel'

describe('<FormLabel>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <FormLabel text='Placeholder text' />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
