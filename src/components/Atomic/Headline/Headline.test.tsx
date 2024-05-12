import { render } from '../../../../test/jest-wrapper'
import Headline from './Headline'

describe('<Headline>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <Headline type='h1'>Headline 1</Headline>
                <Headline type='h2'>Headline 2</Headline>
                <Headline type='h3'>Headline 3</Headline>
                <Headline type='h4'>Headline 4</Headline>
                <Headline type='h5'>Headline 5</Headline>
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    it('renders correct text', () => {
        const { getByText } = render(<Headline type='h1'>Test</Headline>)
        expect(getByText('Test')).toBeInTheDocument()
    })

    it('applies correct class based on type', () => {
        const { container } = render(<Headline type='h1'>Test</Headline>)
        const headline = container.querySelector('h1')
        expect(headline).toHaveClass('h1')
    })

    it('applies h6 style when type is h6', () => {
        const { container } = render(<Headline type='h2'>Test</Headline>)
        const headline = container.querySelector('h2')
        expect(headline).toHaveClass('h2')
    })
})
