import { render } from '@testing-library/react'
import Show from './Show'

describe('Show Component', () => {
    it('renders the "when" child when condition is true', () => {
        const { getByText, asFragment } = render(
            <Show>
                <Show.When isTrue={true}>When Content</Show.When>
                <Show.Else>Else Content</Show.Else>
            </Show>
        )
        expect(getByText('When Content')).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
        expect(() => getByText('Else Content')).toThrow()
    })

    it('renders the "else" child when condition is false', () => {
        const { getByText } = render(
            <Show>
                <Show.When isTrue={false}>When Content</Show.When>
                <Show.Else>Else Content</Show.Else>
            </Show>
        )
        expect(getByText('Else Content')).toBeInTheDocument()
        expect(() => getByText('When Content')).toThrow()
    })
})
