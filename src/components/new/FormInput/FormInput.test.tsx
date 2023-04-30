import { render, waitFor } from '@testing-library/react'
import FormInput from './FormInput'
import React from 'react'
import { ReactComponent as IconSlovakia } from '../assets/Slovakia.svg'

describe('<FormInput>', () => {
    it('render correctly - snapshot', async () => {
        const { asFragment } = render(
            <div>
                <FormInput placeholder='Placeholder text' />
                <FormInput defaultValue='Default value text' />
                <FormInput defaultValue='Default value text' disabled={true} />
                <FormInput defaultValue='Default value text' error={true} />
                <FormInput defaultValue='Text' name='new-password' type='password' />
                <FormInput defaultValue='Text' icon={<IconSlovakia />} telPattern='[0-9]{3}-[0-9]{2}-[0-9]{3}' telPrefix='+421' type='tel' />
                <FormInput defaultValue='Normal size' size='normal' />
            </div>
        )

        await waitFor(() => {
            expect(asFragment()).toMatchSnapshot()
        })
    })
})
