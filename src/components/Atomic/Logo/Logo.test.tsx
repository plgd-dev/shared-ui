import { render, fireEvent } from '@testing-library/react'
import Logo from './Logo'

describe('Logo', () => {
    it('renders without crashing', () => {
        const { container, asFragment } = render(<Logo logo={{ height: '50px', width: '50px', source: 'logo.png' }} />)
        expect(container).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })

    it('renders with correct source', () => {
        const { getByAltText } = render(<Logo logo={{ height: '50px', width: '50px', source: 'logo.png' }} />)
        expect(getByAltText('')).toHaveAttribute('src', 'logo.png')
    })

    it('renders with correct dimensions', () => {
        const { getByAltText } = render(<Logo logo={{ height: '50px', width: '50px', source: 'logo.png' }} />)
        const logo = getByAltText('')
        expect(logo).toHaveAttribute('height', '50px')
        expect(logo).toHaveAttribute('width', '50px')
    })

    it('calls onClick when clicked', () => {
        const onClick = jest.fn()
        const { getByAltText } = render(<Logo logo={{ height: '50px', width: '50px', source: 'logo.png' }} onClick={onClick} />)
        fireEvent.click(getByAltText(''))
        expect(onClick).toHaveBeenCalled()
    })

    it('does not call onResized when collapsed', () => {
        const onResized = jest.fn()
        const { getByAltText } = render(<Logo collapsed={true} logo={{ height: '50px', width: '50px', source: 'logo.png' }} onResized={onResized} />)
        fireEvent.click(getByAltText(''))
        expect(onResized).not.toHaveBeenCalled()
    })
})
