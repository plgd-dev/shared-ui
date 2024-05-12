import { render } from '../../../../test/jest-wrapper'
import ValidationMessage from './ValidationMessage'

describe('ValidationMessage Component', () => {
    it('renders children correctly', () => {
        const { getByText, asFragment } = render(<ValidationMessage>Test Message</ValidationMessage>)
        expect(getByText('Test Message')).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })

    it('does not render when no children are provided', () => {
        const { container } = render(<ValidationMessage />)
        expect(container.firstChild).toBeNull()
    })
})
