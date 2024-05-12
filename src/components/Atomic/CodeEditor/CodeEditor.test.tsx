import { render } from '../../../../test/jest-wrapper'
import CodeEditor from './CodeEditor'

describe('<CodeEditor>', () => {
    it('renders without crashing', () => {
        const { container, asFragment } = render(<CodeEditor value='' />)
        expect(container).toBeInTheDocument()

        expect(asFragment()).toMatchSnapshot()
    })
})
