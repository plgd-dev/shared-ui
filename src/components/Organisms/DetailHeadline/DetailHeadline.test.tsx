import { render } from '@testing-library/react'
import DetailHeadline from './DetailHeadline'

describe('DetailHeadline component', () => {
    it('renders without crashing', () => {
        const { container, asFragment } = render(<DetailHeadline type='h1'>Headline</DetailHeadline>)
        expect(container).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })

    it('renders correct headline type', () => {
        const { getByRole } = render(<DetailHeadline type='h1'>Test Headline</DetailHeadline>)
        expect(getByRole('heading', { level: 1 })).toBeInTheDocument()
    })

    it('applies custom class name', () => {
        const { container } = render(
            <DetailHeadline className='custom-class' type='h1'>
                Test Headline
            </DetailHeadline>
        )
        expect(container.firstChild).toHaveClass('custom-class')
    })

    it('renders children correctly', () => {
        const { getByText } = render(<DetailHeadline type='h1'>Test Headline</DetailHeadline>)
        expect(getByText('Test Headline')).toBeInTheDocument()
    })

    it('applies data-test-id correctly', () => {
        const { getByTestId } = render(
            <DetailHeadline dataTestId='test-id' type='h1'>
                Test Headline
            </DetailHeadline>
        )
        // container.querySelectorAll('[data-test-id="button-test"]')
        expect(getByTestId('test-id')).toBeInTheDocument()
    })
})
