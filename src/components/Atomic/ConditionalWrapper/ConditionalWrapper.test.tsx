import { render } from '@testing-library/react'
import ConditionalWrapper from './ConditionalWrapper'

describe('<ConditionalWrapper>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <ConditionalWrapper children={<div>inner content</div>} condition={false} wrapper={(e) => <div>{e}</div>} />
                <ConditionalWrapper children={<div>inner content</div>} condition={true} wrapper={(e) => <div>{e}</div>} />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
