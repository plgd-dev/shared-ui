import CaPool from './CaPool'
import { render } from '../../../../test/jest-wrapper'

describe('<CaPool>', () => {
    const props = {
        customComponent: null,
        data: [],
        headline: '',
        i18n: {
            delete: 'Delete',
            download: 'Download',
            edit: 'Edit',
            search: 'Search',
            showMore: 'showMore',
            update: 'update',
            view: 'view',
        },
        onAdd: jest.fn(),
        onDelete: jest.fn(),
        onEdit: jest.fn(),
        onDownload: jest.fn(),
        onUpdate: jest.fn(),
        onView: jest.fn(),
        tableSearch: true,
    }

    it('renders without crashing when data is empty', () => {
        const { container, asFragment } = render(<CaPool {...props} />)
        expect(container).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })
})
