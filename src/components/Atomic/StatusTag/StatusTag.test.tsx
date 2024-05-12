import React from 'react'
import { render } from '../../../../test/jest-wrapper'
import StatusTag from './StatusTag'

describe('<StatusTag>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <StatusTag variant='success'>status</StatusTag>
                <br />
                <br />
                <StatusTag variant='warning'>status</StatusTag>
                <br />
                <br />
                <StatusTag variant='error'>status</StatusTag>
                <br />
                <br />
                <StatusTag variant='normal'>status</StatusTag>
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
