import { render } from '@testing-library/react'
import LinkExpander from './LinkExpander'

describe('<LinkExpander>', () => {
    it('renders without crashing', () => {
        const { container, asFragment } = render(
            <LinkExpander i18n={{ show: 'Show', hide: 'Hide', name: 'Name' }} show={false} toggleView={() => {}}>
                Test
            </LinkExpander>
        )
        expect(container).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })

    it('displays show text when not expanded', () => {
        const { getByText } = render(
            <LinkExpander i18n={{ show: 'Show', hide: 'Hide', name: 'Name' }} show={false} toggleView={() => {}}>
                Test
            </LinkExpander>
        )
        expect(getByText('Show Name')).toBeInTheDocument()
    })
})
