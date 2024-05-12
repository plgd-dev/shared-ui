import { fireEvent } from '@testing-library/react'
import { forEach } from 'lodash'

import { render } from '../../../../test/jest-wrapper'
import CopyIcon from './CopyIcon'

describe('CopyIcon', () => {
    it('renders without crashing', () => {
        const { asFragment } = render(<CopyIcon i18n={{ content: 'Copy' }} value='Test value' />)
        expect(asFragment()).toMatchSnapshot()
    })

    it('calls copyToClipboard function on click', () => {
        const copyToClipboardMock = jest.spyOn(require('../../../common/utils/copy-to-clipboard'), 'copyToClipboard')

        const { container } = render(<CopyIcon dataTestId='test-icon' i18n={{ content: 'Copy' }} value='Test value' />)
        const buttons = container.querySelectorAll('[data-test-id="test-icon"]')

        forEach(buttons, (button) => {
            fireEvent.click(button)
        })

        expect(copyToClipboardMock).toHaveBeenCalledWith('Test value')
    })
})
