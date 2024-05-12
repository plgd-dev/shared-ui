import { render } from '../../../../test/jest-wrapper'
import ColorPicker from './ColorPicker'

describe('<ColorPicker>', () => {
    it('renders without crashing', () => {
        const { container, asFragment } = render(<ColorPicker />)
        expect(container).toBeInTheDocument()

        expect(asFragment()).toMatchSnapshot()
    })
})
