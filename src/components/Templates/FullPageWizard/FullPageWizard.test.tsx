import React from 'react'
import { fireEvent } from '@testing-library/react'

import { render } from '../../../../test/jest-wrapper'
import FullPageWizard from './FullPageWizard'

describe('FullPageWizard', () => {
    const props = {
        activeStep: 0,
        steps: [
            { name: 'Step 1', description: 'Description 1' },
            { name: 'Step 2', description: 'Description 2' },
            { name: 'Step 3', description: 'Description 3' },
        ],
        onStepChange: () => {},
        title: 'Test Title',
    }

    it('renders without crashing', () => {
        const { container, asFragment } = render(<FullPageWizard {...props} />)
        expect(container.firstChild).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })

    it('renders the correct number of steps', () => {
        const { getAllByRole } = render(<FullPageWizard {...props} />)
        const steps = getAllByRole('listitem')
        expect(steps.length).toBe(props.steps.length)
    })

    it('calls onStepChange when a step is clicked', () => {
        const mockOnStepChange = jest.fn()
        const { getAllByRole } = render(<FullPageWizard {...props} activeStep={1} onStepChange={mockOnStepChange} visitedStep={0} />)
        const steps = getAllByRole('link')
        fireEvent.click(steps[0])
        expect(mockOnStepChange).toHaveBeenCalledWith(0)
    })

    it('does not call onStepChange when a non-visited step is clicked', () => {
        const mockOnStepChange = jest.fn()
        const { getAllByRole } = render(<FullPageWizard {...props} onStepChange={mockOnStepChange} visitedStep={0} />)
        const steps = getAllByRole('link')
        fireEvent.click(steps[1])
        expect(mockOnStepChange).not.toHaveBeenCalled()
    })

    it('calls onClose when close button is clicked', () => {
        const mockOnClose = jest.fn()
        const { getByRole } = render(<FullPageWizard {...props} onClose={mockOnClose} />)
        const closeButton = getByRole('button')
        fireEvent.click(closeButton)
        expect(mockOnClose).toHaveBeenCalled()
    })
})
