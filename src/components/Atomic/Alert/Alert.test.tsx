import React from 'react'
import { screen } from '@testing-library/react'

import { render } from '../../../../test/jest-wrapper'
import Alert from './Alert'

describe('<Alert>', () => {
    it('snapshot', () => {
        const { asFragment } = render(<Alert>Alert component</Alert>)

        expect(asFragment()).toMatchSnapshot()
    })

    it('renders alert message when provided', () => {
        render(<Alert>Test Alert Message</Alert>)

        const alertElement = screen.getByText(/Test Alert Message/i)
        expect(alertElement).toBeInTheDocument()
    })
})
