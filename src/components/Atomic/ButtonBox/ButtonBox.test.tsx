import React from 'react'
import { render, screen } from '@testing-library/react'
import ButtonBox from './ButtonBox'

describe('<ButtonBox>', () => {
    it('snapshot', () => {
        const { asFragment } = render(<ButtonBox>Test Button</ButtonBox>)

        expect(asFragment()).toMatchSnapshot()
    })

    it('renders button with provided props', () => {
        render(<ButtonBox>Test Button</ButtonBox>)
        const buttonElement = screen.getByRole('button', { name: /Test Button/i })
        expect(buttonElement).toBeInTheDocument()
    })
})
