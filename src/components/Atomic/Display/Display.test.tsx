import { render } from '@testing-library/react'
import Display from './Display'

describe('<ConditionalWrapper>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <Display children='children' when={true} />
                <Display children='children' when={false} />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
