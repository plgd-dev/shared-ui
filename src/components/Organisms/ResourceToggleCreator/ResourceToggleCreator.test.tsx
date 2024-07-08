import React from 'react'
import { fireEvent, waitFor } from '@testing-library/react'
import { forEach } from 'lodash'

import { render } from '../../../../test/jest-wrapper'
import ResourceToggleCreatorSnip, { i18n } from './ResourceToggleCreator.snip'
import ResourceToggleCreator, { getResourceStatusTag } from './ResourceToggleCreator'
import { ResourceType } from './ResourceToggleCreator.types'

describe('<ResourceToggleCreator>', () => {
    it('render correctly - snapshot', async () => {
        const { asFragment } = render(<ResourceToggleCreatorSnip />)

        await waitFor(() => {
            expect(asFragment()).toMatchSnapshot()
        })
    })

    it('header', async () => {
        const cancelCallback = jest.fn()
        const { getByTestId } = render(<ResourceToggleCreatorSnip customProps={{ onCancelPending: cancelCallback }} limit={1} />)

        expect(getByTestId('resource-toggle-creator-0-title')).toBeInTheDocument()
        expect(getByTestId('resource-toggle-creator-0-status-tag')).toBeInTheDocument()
        expect(getByTestId('resource-toggle-creator-0-action-expand')).toBeInTheDocument()
        // expect(getByTestId('resource-toggle-creator-0-action-cancel-pending')).toBeInTheDocument()
    })

    it('expand', async () => {
        const resource: ResourceType = {
            content: '',
            href: 'resource-01',
            status: 'DONE',
            timeToLive: '0',
            resourceUpdated: {
                auditContext: {
                    correlationId: 'correlationId',
                    owner: 'owner',
                },
                content: 'Content',

                status: 'OK',
                resourceId: {
                    deviceId: 'deviceId',
                    href: 'resource-01',
                },
            },
        }

        const { container } = render(
            <ResourceToggleCreator
                isTest
                readOnly
                dataTestId='resource-toggle-creator'
                i18n={i18n}
                resourceData={resource}
                statusTag={getResourceStatusTag(resource)}
            />
        )

        const buttons = container.querySelectorAll('[data-test-id="resource-toggle-creator-action-expand"]')
        forEach(buttons, (button) => {
            fireEvent.click(button)
        })

        expect(container.querySelector('[data-test-id="resource-toggle-creator-action-expand"]')).toBeInTheDocument()

        await waitFor(() => {
            expect(container.querySelector('[data-test-id="resource-toggle-creator-content"]')).toBeInTheDocument()
            expect(container.querySelector('[data-test-id="resource-toggle-creator-content"]')).toBeVisible()
        })
    })
})
