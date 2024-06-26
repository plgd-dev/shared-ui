import React from 'react'
import { forEach } from 'lodash'
import { fireEvent, waitFor } from '@testing-library/react'

import Button from './Button'
import { render } from '../../../../test/jest-wrapper'
import { buttonVariants, buttonSizes } from './constants'

describe('<Button>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                {Object.values(buttonVariants).map((v) => (
                    <React.Fragment key={v}>
                        {Object.values(buttonSizes).map((s) => (
                            <Button children={`${v} ${s}`} key={`${v}-${s}`} size={s} variant={v} />
                        ))}

                        <Button children={`${v} normal disabled`} disabled={true} key={`${v}-disabled`} size='normal' variant={v} />
                    </React.Fragment>
                ))}
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    it('render correctly - loading', async () => {
        const { asFragment } = render(
            <div>
                {Object.values(buttonVariants).map((v) => (
                    <Button children={`Loading button ${v}`} key={v} loading={true} loadingText={`loadingText ${v}`} size='normal' variant={v} />
                ))}
            </div>
        )

        await waitFor(() => {
            expect(asFragment()).toMatchSnapshot()
        })
    })

    it('onCLick', async () => {
        const callback1 = jest.fn()
        const callback2 = jest.fn()

        const { container } = render(
            <div>
                <Button dataTestId='button-test' onClick={callback1}>
                    Button
                </Button>
                <Button dataTestId='button-test' disabled={true} onClick={callback2}>
                    Button
                </Button>
            </div>
        )

        const buttons = container.querySelectorAll('[data-test-id="button-test"]')
        forEach(buttons, (button) => {
            fireEvent.click(button)
        })

        expect(callback1).toHaveBeenCalled()
        expect(callback2).not.toHaveBeenCalled()
    })
})
