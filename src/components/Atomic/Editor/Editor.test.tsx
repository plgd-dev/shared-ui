import { render } from '../../../../test/jest-wrapper'
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
