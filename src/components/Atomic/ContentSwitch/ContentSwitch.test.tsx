import { act, waitFor } from '@testing-library/react'

import { render } from '../../../../test/jest-wrapper'
import ContentSwitch from './ContentSwitch'

describe('<ContentSwitch>', () => {
    it('renders without crashing', () => {
        const { asFragment } = render(
            <ContentSwitch activeItem={0}>
                <div>Item 1</div>
                <div>Item 2</div>
            </ContentSwitch>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    it('renders the active item', () => {
        const { getByText } = render(
            <ContentSwitch activeItem={0}>
                <div>Item 1</div>
                <div>Item 2</div>
            </ContentSwitch>
        )
        expect(getByText('Item 1')).toBeInTheDocument()
    })

    it('does not render inactive items', () => {
        const { queryByText } = render(
            <ContentSwitch activeItem={0}>
                <div>Item 1</div>
                <div>Item 2</div>
            </ContentSwitch>
        )
        expect(queryByText('Item 2')).toBeNull()
    })

    it('calls onAnimationComplete when animation completes', async () => {
        const onAnimationComplete = jest.fn()
        const { rerender } = render(
            <ContentSwitch activeItem={0} onAnimationComplete={onAnimationComplete}>
                <div>Item 1</div>
                <div>Item 2</div>
            </ContentSwitch>
        )

        rerender(
            <ContentSwitch activeItem={1} onAnimationComplete={onAnimationComplete}>
                <div>Item 1</div>
                <div>Item 2</div>
            </ContentSwitch>
        )

        act(() => {
            jest.runAllTimers()
        })

        await waitFor(() => {
            expect(onAnimationComplete).toHaveBeenCalled()
        })
    })
})
