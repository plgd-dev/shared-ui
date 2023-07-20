import React from 'react'
import { render } from '@testing-library/react'
import VersionMark from './VersionMark'
import { severities } from './constants'

describe('<VersionMark>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <VersionMark severity={severities.SUCCESS} versionText='Version 2.02' />
                <VersionMark
                    severity={severities.WARNING}
                    update={{
                        text: 'Click here!',
                        onClick: () => console.log('update click'),
                    }}
                    versionText='Version 2.02 • New update is available.'
                />
                <VersionMark
                    severity={severities.ERROR}
                    update={{
                        text: 'Click here!',
                        onClick: () => console.log('update click'),
                    }}
                    versionText='Version 2.02 • New update is available.'
                />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
