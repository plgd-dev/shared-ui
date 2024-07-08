import React from 'react'
import { fireEvent, waitFor } from '@testing-library/react'

import { render } from '../../../../test/jest-wrapper'
import { FormInputConditionFilter, FormInputSingleConditionFilter, FormSelectConditionFilter } from './ConditionFilter.snip'
import { forEach } from 'lodash'

describe('<ConditionFilter>', () => {
    it('render correctly - snapshot', async () => {
        const { asFragment } = render(
            <>
                <FormSelectConditionFilter />
                <FormInputConditionFilter />
                <FormInputSingleConditionFilter />
            </>
        )

        await waitFor(() => {
            expect(asFragment()).toMatchSnapshot()
        })
    })

    it('toggle content', async () => {
        const { container } = render(
            <>
                <FormSelectConditionFilter isTest dataTestId='condition-filter' />
            </>
        )

        const buttons = container.querySelectorAll('[data-test-id="condition-filter-header"]')
        forEach(buttons, (button) => {
            fireEvent.click(button)
        })

        await waitFor(() => {
            expect(container.querySelector('[data-test-id="condition-filter-content"]')).toBeInTheDocument()
            expect(container.querySelector('[data-test-id="condition-filter-content"]')).toBeVisible()
        })
    })
})
