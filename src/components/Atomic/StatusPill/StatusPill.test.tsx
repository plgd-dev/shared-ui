import React from 'react'
import { render } from '@testing-library/react'
import StatusPill from './StatusPill'

describe('<StatusPill>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <StatusPill label='Online' status='online' tooltipText='Connected at: xxxxx' />
                <StatusPill
                    label='Offline'
                    status='offline'
                    tooltipText={
                        <span>
                            Last time online: <strong>31.9.2022 - 16:32</strong>
                        </span>
                    }
                />
                <StatusPill
                    label='Online'
                    pending={{
                        onClick: () => console.log('on click'),
                        text: '3 pending commands',
                    }}
                    status='online'
                    tooltipText='Connected at: xxxxx'
                />
                <StatusPill
                    label='Offline'
                    pending={{
                        onClick: () => console.log('on click'),
                        text: '3 pending commands',
                    }}
                    status='offline'
                    tooltipText={
                        <span>
                            Last time online: <strong>31.9.2022 - 16:32</strong>
                        </span>
                    }
                />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
