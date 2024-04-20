import { render } from '@testing-library/react'
import Spacer from './Spacer'

describe('<Spacer>', () => {
    it('renders children when type prop matches the regex', () => {
        const { getByText, asFragment } = render(<Spacer type='mt-5'>Content</Spacer>)
        expect(getByText('Content')).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })
})
