import { fireEvent } from '@testing-library/react'
import { render } from '../../../../test/jest-wrapper'
import TreeTable from './TreeTable'

describe('TreeTable Component', () => {
    it('renders table headers correctly', () => {
        const columns = [
            { Header: 'Header 1', accessor: 'accessor1' },
            { Header: 'Header 2', accessor: 'accessor2' },
        ]
        const { getByText } = render(<TreeTable columns={columns} data={[]} />)
        expect(getByText('Header 1')).toBeInTheDocument()
        expect(getByText('Header 2')).toBeInTheDocument()
    })

    it('renders table rows correctly', () => {
        const columns = [{ Header: 'Header', accessor: 'accessor' }]
        const data = [{ accessor: 'Row 1' }, { accessor: 'Row 2' }]
        const { getByText } = render(<TreeTable columns={columns} data={data} />)
        expect(getByText('Row 1')).toBeInTheDocument()
        expect(getByText('Row 2')).toBeInTheDocument()
    })

    it('sorts rows when header is clicked', () => {
        const columns = [{ Header: 'Header', accessor: 'accessor' }]
        const data = [{ accessor: 'Row 2' }, { accessor: 'Row 1' }]
        const { getByText, getAllByRole } = render(<TreeTable columns={columns} data={data} />)
        const header = getByText('Header')
        fireEvent.click(header)
        const rows = getAllByRole('row')
        expect(rows[1].textContent).toBe('Row 1')
        expect(rows[2].textContent).toBe('Row 2')
    })
})
