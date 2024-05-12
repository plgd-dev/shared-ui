import { render } from '../../../../test/jest-wrapper'
import Loadable from './Loadable'

describe('<Loadable>', () => {
    it('renders children when condition is true', () => {
        const { container, asFragment } = render(
            <Loadable condition={true}>
                <div>Test</div>
            </Loadable>
        )
        expect(asFragment()).toMatchSnapshot()
        expect(container).toHaveTextContent('Test')
    })

    it('renders IconLoader when condition is false', () => {
        const { container } = render(
            <Loadable condition={false}>
                <div>Test</div>
            </Loadable>
        )

        const iconLoader = container.querySelector('.loader-icon')
        expect(iconLoader).toBeInTheDocument()
    })
})
