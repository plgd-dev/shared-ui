import { render } from '@testing-library/react'
import Headline from './Headline'

describe('<Headline>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <Headline type='h1'>Headline 1</Headline>
                <Headline type='h2'>Headline 2</Headline>
                <Headline type='h3'>Headline 3</Headline>
                <Headline type='h4'>Headline 4</Headline>
                <Headline type='h5'>Headline 5</Headline>
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
