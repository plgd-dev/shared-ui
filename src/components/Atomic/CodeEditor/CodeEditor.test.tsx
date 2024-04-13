import { render } from '@testing-library/react'
import CodeEditor from './CodeEditor'

describe('<CodeEditor>', () => {
    it('renders without crashing', () => {
        const { container, asFragment } = render(<CodeEditor value='' />)
        expect(container).toBeInTheDocument()

        expect(asFragment()).toMatchSnapshot()
    })

    it('displays placeholder text when value is empty', () => {
        const { getByText, asFragment } = render(<CodeEditor placeholderText='Placeholder' value='' />)
        expect(getByText('Placeholder')).toBeInTheDocument()

        expect(asFragment()).toMatchSnapshot()
    })

    it('does not display placeholder text when value is not empty', () => {
        const { queryByText } = render(<CodeEditor placeholderText='Placeholder' value='Some value' />)
        expect(queryByText('Placeholder')).not.toBeInTheDocument()
    })
})
