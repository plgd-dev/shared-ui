import { render } from '@testing-library/react'
import Editor from './Editor'

describe('<ConditionalWrapper>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <Editor json={{}} />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
