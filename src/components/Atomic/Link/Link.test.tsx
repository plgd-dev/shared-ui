import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Link from './Link'
import { forEach } from 'lodash'

describe('<Headline>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <Link>Link no href</Link>
                <Link href='//www.plgd.dev'>Link with href</Link>
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    it('onCLick', async () => {
        const callback1 = jest.fn()
        const callback2 = jest.fn()

        const { container } = render(
            <div>
                <Link dataTestId='link-test' href='//www.plgd.dev' onClick={callback1}>
                    Link with href
                </Link>
                <Link dataTestId='link-test' disabled={true} href='//www.plgd.dev' onClick={callback2}>
                    disabled
                </Link>
            </div>
        )

        const links = container.querySelectorAll('[data-test-id="link-test"]')
        forEach(links, (button) => {
            fireEvent.click(button)
        })

        expect(callback1).toHaveBeenCalled()
        expect(callback2).not.toHaveBeenCalled()
    })
})
