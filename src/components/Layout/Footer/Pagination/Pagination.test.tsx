import { render, fireEvent } from '@testing-library/react'
import Pagination from './Pagination'

describe('Pagination Component', () => {
    const defaultProps = {
        canNextPage: true,
        canPreviousPage: true,
        gotoPage: jest.fn(),
        nextPage: jest.fn(),
        pageCount: 3,
        pageIndex: 1,
        pageLength: 10,
        pageSize: 10,
        previousPage: jest.fn(),
        setPageSize: jest.fn(),
    }

    it('renders previous and next buttons', () => {
        const { getByRole } = render(<Pagination {...defaultProps} />)
        expect(getByRole('button', { name: /1/i })).toBeInTheDocument()
        expect(getByRole('button', { name: /2/i })).toBeInTheDocument()
    })

    it('disables previous button on first page', () => {
        const { container } = render(<Pagination {...defaultProps} canPreviousPage={false} pageCount={3} pageIndex={0} />)
        expect(container.querySelector('.arrow-left')).toHaveClass('disabled')
    })

    it('disables next button on last page', () => {
        const { container } = render(<Pagination {...defaultProps} canNextPage={false} pageCount={3} pageIndex={2} />)
        expect(container.querySelector('.arrow-right')).toHaveClass('disabled')
    })

    it('calls previousPage when previous button is clicked', () => {
        const previousPage = jest.fn()
        const { container } = render(<Pagination {...defaultProps} canPreviousPage={true} pageCount={3} pageIndex={1} previousPage={previousPage} />)
        fireEvent.click(container.querySelector('.arrow-left')!)
        expect(previousPage).toHaveBeenCalled()
    })

    it('calls nextPage when next button is clicked', () => {
        const nextPage = jest.fn()
        const { container } = render(<Pagination {...defaultProps} canNextPage={true} nextPage={nextPage} pageCount={3} pageIndex={1} />)
        fireEvent.click(container.querySelector('.arrow-right')!)
        expect(nextPage).toHaveBeenCalled()
    })

    it('renders correct number of page buttons', () => {
        const { getAllByRole } = render(<Pagination {...defaultProps} pageCount={3} pageIndex={1} />)
        expect(getAllByRole('button')).toHaveLength(5) // 3 page buttons + next + previous
    })

    it('calls gotoPage with correct index when page button is clicked', () => {
        const gotoPage = jest.fn()
        const { getAllByRole } = render(<Pagination {...defaultProps} gotoPage={gotoPage} pageCount={3} pageIndex={1} />)
        fireEvent.click(getAllByRole('button')[2]) // Click on the second page button
        expect(gotoPage).toHaveBeenCalledWith(1) // Index is 0-based
    })
})
