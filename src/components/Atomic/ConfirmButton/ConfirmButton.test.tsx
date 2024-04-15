import { render, fireEvent, waitFor } from '@testing-library/react'
import ConfirmButton from './ConfirmButton'

describe('<ConfirmButton>', () => {
    it('renders without crashing', () => {
        const { container, asFragment } = render(
            <ConfirmButton body={<div>body</div>} cancelButtonText='Cancel' confirmButtonText='Confirm' onConfirm={() => {}} title='Title'>
                Action
            </ConfirmButton>
        )
        expect(container).toBeInTheDocument()

        expect(asFragment()).toMatchSnapshot()
    })

    it('opens ConfirmModal when clicked', () => {
        const { getByRole, queryByRole } = render(
            <ConfirmButton body={<div>body</div>} cancelButtonText='Cancel' confirmButtonText='Confirm' onConfirm={() => {}} title='Title'>
                Action
            </ConfirmButton>
        )
        const button = getByRole('button')
        fireEvent.click(button)
        const modal = queryByRole('dialog')
        expect(modal).toBeInTheDocument()
    })

    it('calls onConfirm when confirm button in modal is clicked', () => {
        const mockOnConfirm = jest.fn()
        const { getByRole, getByText } = render(
            <ConfirmButton body={<div>body</div>} cancelButtonText='Cancel' confirmButtonText='Confirm' onConfirm={mockOnConfirm} title='Title'>
                Action
            </ConfirmButton>
        )
        const button = getByRole('button')
        fireEvent.click(button)
        const confirmButton = getByText('Confirm')
        fireEvent.click(confirmButton)
        expect(mockOnConfirm).toHaveBeenCalled()
    })

    it('closes ConfirmModal when closeOnConfirm is true', async () => {
        const { getByRole, queryByRole } = render(
            <ConfirmButton closeOnConfirm body={<div>body</div>} cancelButtonText='Cancel' confirmButtonText='Confirm' onConfirm={() => {}} title='Title'>
                Action
            </ConfirmButton>
        )
        const button = getByRole('button')
        fireEvent.click(button)
        const confirmButton = getByRole('button', { name: /Confirm/i })
        fireEvent.click(confirmButton)
        const modal = queryByRole('dialog')

        await waitFor(() => {
            expect(modal).not.toBeInTheDocument()
        })
    })

    it('does not close ConfirmModal when closeOnConfirm is false', () => {
        const { getByRole, queryByRole } = render(
            <ConfirmButton
                body={<div>body</div>}
                cancelButtonText='Cancel'
                closeOnConfirm={false}
                confirmButtonText='Confirm'
                onConfirm={() => {}}
                title='Title'
            >
                Action
            </ConfirmButton>
        )
        const button = getByRole('button')
        fireEvent.click(button)
        const confirmButton = getByRole('button', { name: /Confirm/i })
        fireEvent.click(confirmButton)
        const modal = queryByRole('dialog')
        expect(modal).toBeInTheDocument()
    })
})
