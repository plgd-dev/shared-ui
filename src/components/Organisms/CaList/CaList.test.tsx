import { render } from '../../../../test/jest-wrapper'
import CaList from './CaList'

describe('<CaList>', () => {
    it('renders without crashing when data is empty', () => {
        const props = {
            actions: {},
            data: [],
            formGroupProps: {},
            i18n: { download: 'Download', delete: 'Delete', view: 'View' },
            largePadding: false,
        }
        const { container, asFragment } = render(<CaList {...props} />)
        expect(container).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })
})
