import { render } from '@testing-library/react'
import CodeEditor from './CodeEditor'

describe('<CodeEditor>', () => {
    it('renders without crashing', () => {
        const { container, asFragment } = render(<CodeEditor value='' />)
        expect(container).toBeInTheDocument()

        expect(asFragment()).toMatchSnapshot()
    })
})
