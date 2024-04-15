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

    it('renders children directly when condition is false', () => {
        const { getByText } = render(
            <ConditionalWrapper condition={false} wrapper={(e) => <div>{e}</div>}>
                <div>inner content</div>
            </ConditionalWrapper>
        )
        expect(getByText('inner content')).toBeInTheDocument()
    })

    it('renders children within wrapper when condition is true', () => {
        const { container } = render(
            <ConditionalWrapper condition={true} wrapper={(e) => <div className='wrapper'>{e}</div>}>
                <div>inner content</div>
            </ConditionalWrapper>
        )
        expect(container.querySelector('.wrapper')).toBeInTheDocument()
    })
})
