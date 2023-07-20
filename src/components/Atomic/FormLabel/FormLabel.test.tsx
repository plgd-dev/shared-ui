import { render } from '@testing-library/react'
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
