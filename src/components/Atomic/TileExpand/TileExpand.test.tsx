import { render } from '../../../../test/jest-wrapper'
import TileExpand from './TileExpand'

describe('<TileExpand>', () => {
    it('renders title and status tag when provided', () => {
        const { getByText, asFragment } = render(<TileExpand i18n={{ copy: 'copy' }} statusTag='Test Status' title='Test Title' />)

        expect(getByText('Test Title')).toBeInTheDocument()
        expect(getByText('Test Status')).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })

    it('renders time when provided', () => {
        const { getByText } = render(<TileExpand i18n={{ copy: 'copy' }} time='Test Time' title='Title' />)
        expect(getByText('Test Time')).toBeInTheDocument()
    })
})
