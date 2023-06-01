import React from 'react'
import { render } from '@testing-library/react'
import Switch from './Switch'

describe('<Switch>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <Switch size='small' />
                <Switch size='big' />
                <Switch defaultChecked={true} size='small' />
                <Switch defaultChecked={true} size='big' />
                <Switch defaultChecked={true} label='Label text' size='big' />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
