import { render } from '@testing-library/react'
import Dropzone from './Dropzone'

describe('<ConditionalWrapper>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <Dropzone title='Title' />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
