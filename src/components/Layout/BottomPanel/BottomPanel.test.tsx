import { render } from '../../../../test/jest-wrapper'
import BottomPanel from './BottomPanel'

describe('<BottomPanel>', () => {
    it('renders attribute and value when provided', () => {
        const { getByText, asFragment } = render(<BottomPanel show attribute='Test Attribute' value='Test Value' />)
        expect(getByText('Test Attribute:')).toBeInTheDocument()
        expect(getByText('Test Value')).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })

    it('does not render attribute and value when not provided', () => {
        const { queryByText } = render(<BottomPanel show />)
        expect(queryByText('Test Attribute:')).toBeNull()
        expect(queryByText('Test Value')).toBeNull()
    })

    it('renders actionPrimary and actionSecondary when provided', () => {
        const actionPrimary = <button>Primary Action</button>
        const actionSecondary = <button>Secondary Action</button>
        const { getByText } = render(<BottomPanel show actionPrimary={actionPrimary} actionSecondary={actionSecondary} />)
        expect(getByText('Primary Action')).toBeInTheDocument()
        expect(getByText('Secondary Action')).toBeInTheDocument()
    })
})
