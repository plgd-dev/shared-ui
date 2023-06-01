import { render } from '@testing-library/react'
import ConditionalWrapper from './ConditionalWrapper'

describe('<ConditionalWrapper>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <ConditionalWrapper condition={false} wrapper={(e) => <div>{e}</div>} children={<div>inner content</div>} />
                <ConditionalWrapper condition={true} wrapper={(e) => <div>{e}</div>} children={<div>inner content</div>} />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
