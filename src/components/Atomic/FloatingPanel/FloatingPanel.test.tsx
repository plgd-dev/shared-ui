import { render } from '@testing-library/react'
import FloatingPanel from './FloatingPanel'

describe('<FloatingPanel>', () => {
    it('renders without crashing', () => {
        const { container, asFragment } = render(<FloatingPanel reference={<div>Reference</div>}>Test</FloatingPanel>)
        expect(container).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })
})
