import { render } from '../../../../test/jest-wrapper'
import Modal from './Modal'

describe('<Modal>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <Modal renderBody={<div>Modal Content</div>} renderFooter={<div>Modal Footer</div>} show={true} />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
