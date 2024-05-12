import { render } from '../../../../test/jest-wrapper'
import Content from './Content'

describe('Content Component', () => {
    it('renders headline correctly', () => {
        const { getByText, asFragment } = render(<Content headline='Test Headline' />)
        expect(getByText('Test Headline')).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })

    it('renders headline status tag when provided', () => {
        const { getByText } = render(<Content headline='Test Headline' headlineStatusTag='Test Status' />)
        expect(getByText('Test Status')).toBeInTheDocument()
    })

    it('renders children correctly', () => {
        const { getByText } = render(
            <Content headline='Test Headline'>
                <div>Test Child</div>
            </Content>
        )
        expect(getByText('Test Child')).toBeInTheDocument()
    })
})
