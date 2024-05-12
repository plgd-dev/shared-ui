import { render } from '../../../../../test/jest-wrapper'
import IconLoader from './IconLoader'
import { types } from './constants'

describe('<IconLoader>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <IconLoader />
                <IconLoader type={types.PRIMARY} />
                <IconLoader type={types.SECONDARY} />
                <IconLoader type={types.TERTIARY} />
                <IconLoader type={types.Filter} />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
