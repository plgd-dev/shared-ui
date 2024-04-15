import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ConfirmModal from './ConfirmModal'

describe('<ConfirmModal>', () => {
    it('renders without crashing', () => {
        const { getByText, asFragment } = render(
            <ConfirmModal
                body={<div>ConfirmModal</div>}
                cancelButtonText='Cancel'
                confirmButtonText='Confirm'
                onClose={() => {}}
                onConfirm={() => {}}
                show={true}
                title='Title'
            />
        )
        expect(getByText('ConfirmModal')).toBeInTheDocument()

        expect(asFragment()).toMatchSnapshot()
    })

    it('calls onClose when cancel button is clicked', () => {
        const onClose = jest.fn()
        const { getByText } = render(
            <ConfirmModal
                body={<div>Body</div>}
                cancelButtonText='Cancel'
                confirmButtonText='Confirm'
                onClose={onClose}
                onConfirm={() => {}}
                show={true}
                title='Title'
            />
        )
        fireEvent.click(getByText('Cancel'))
        expect(onClose).toHaveBeenCalled()
    })

    it('calls onConfirm when confirm button is clicked', () => {
        const onConfirm = jest.fn()
        const { getByText } = render(
            <ConfirmModal
                body={<div>Body</div>}
                cancelButtonText='Cancel'
                confirmButtonText='Confirm'
                onClose={() => {}}
                onConfirm={onConfirm}
                show={true}
                title='Title'
            />
        )
        fireEvent.click(getByText('Confirm'))
        expect(onConfirm).toHaveBeenCalled()
    })

    it('does not call onClose when loading', () => {
        const onClose = jest.fn()
        const { getByText } = render(
            <ConfirmModal
                body={<div>Body</div>}
                cancelButtonText='Cancel'
                confirmButtonText='Confirm'
                loading={true}
                onClose={onClose}
                onConfirm={() => {}}
                show={true}
                title='Title'
            />
        )
        fireEvent.click(getByText('Cancel'))
        expect(onClose).not.toHaveBeenCalled()
    })

    it('does not call onConfirm when loading', () => {
        const onConfirm = jest.fn()
        const { getByText } = render(
            <ConfirmModal
                body={<div>Body</div>}
                cancelButtonText='Cancel'
                confirmButtonText='Confirm'
                loading={true}
                onClose={() => {}}
                onConfirm={onConfirm}
                show={true}
                title='Title'
            />
        )
        fireEvent.click(getByText('Confirm'))
        expect(onConfirm).not.toHaveBeenCalled()
    })

    it('does not call onConfirm when confirmDisabled', () => {
        const onConfirm = jest.fn()
        const { getByText } = render(
            <ConfirmModal
                body={<div>Body</div>}
                cancelButtonText='Cancel'
                confirmButtonText='Confirm'
                confirmDisabled={true}
                onClose={() => {}}
                onConfirm={onConfirm}
                show={true}
                title='Title'
            />
        )
        fireEvent.click(getByText('Confirm'))
        expect(onConfirm).not.toHaveBeenCalled()
    })
})
