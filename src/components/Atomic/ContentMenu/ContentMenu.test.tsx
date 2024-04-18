import { render, fireEvent } from '@testing-library/react'
import ContentMenu from './ContentMenu'

describe('<ContentMenu>', () => {
    const mockHandleItemClick = jest.fn()
    const mockHandleSubItemClick = jest.fn()

    const defaultProps = {
        activeItem: 'item1',
        handleItemClick: mockHandleItemClick,
        handleSubItemClick: mockHandleSubItemClick,
        id: 'test-menu',
        menu: [
            {
                id: 'item1',
                link: 'item1',
                title: 'Item 1',
                children: [
                    {
                        id: 'subitem1',
                        title: 'Subitem 1',
                    },
                ],
            },
            {
                id: 'item2',
                link: 'item2',
                title: 'Item 2',
            },
        ],
    }

    it('renders without crashing', () => {
        const { asFragment } = render(<ContentMenu {...defaultProps} />)
        expect(asFragment()).toMatchSnapshot()
    })

    it('calls handleItemClick when an item is clicked', () => {
        const { getByText } = render(<ContentMenu {...defaultProps} />)
        fireEvent.click(getByText('Item 1'))
        expect(mockHandleItemClick).toHaveBeenCalled()
    })

    it('calls handleSubItemClick when a subitem is clicked', () => {
        const { getByText } = render(<ContentMenu {...defaultProps} />)
        fireEvent.click(getByText('Subitem 1'))
        expect(mockHandleSubItemClick).toHaveBeenCalled()
    })

    it('does not call handleSubItemClick when a subitem is clicked but handleSubItemClick is not provided', () => {
        const { getByText } = render(<ContentMenu {...defaultProps} handleSubItemClick={undefined} />)
        fireEvent.click(getByText('Subitem 1'))
        expect(mockHandleSubItemClick).not.toHaveBeenCalled()
    })

    it('filters menu items based on search input', () => {
        const { getByText, getByRole } = render(<ContentMenu {...defaultProps} menuSearch />)
        fireEvent.change(getByRole('search'), { target: { value: 'Item 2' } })
        expect(getByText('Item 2')).toBeInTheDocument()
        expect(() => getByText('Item 1')).toThrow()
    })
})
