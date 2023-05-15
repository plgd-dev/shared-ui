import { render } from '@testing-library/react'
import Badge from './Badge'

describe('<Badge>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(<Badge>Badge test</Badge>)

        expect(asFragment()).toMatchSnapshot()
    })
})
