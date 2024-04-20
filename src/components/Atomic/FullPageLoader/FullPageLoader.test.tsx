import { render } from '@testing-library/react'
import FullPageLoader from './FullPageLoader'

describe('<FullPageLoader>', () => {
    it('renders without crashing', () => {
        const { container } = render(<FullPageLoader i18n={{ loading: 'Loading' }} />)
        expect(container).toBeInTheDocument()
    })

    it('displays loading text', () => {
        const { getByText } = render(<FullPageLoader i18n={{ loading: 'Loading' }} />)
        expect(getByText('Loading...')).toBeInTheDocument()
    })

    it('applies auth-loader class to PageLoader', () => {
        const { container } = render(<FullPageLoader i18n={{ loading: 'Loading' }} />)
        const pageLoader = container.querySelector('.auth-loader')
        expect(pageLoader).not.toBeNull()
    })
})
