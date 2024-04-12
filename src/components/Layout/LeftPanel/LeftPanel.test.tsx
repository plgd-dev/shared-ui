import React from 'react'
import { render, waitFor } from '@testing-library/react'
import LeftPanel from './LeftPanel'
import VersionMark from '../../Atomic/VersionMark'
import {
    IconChat,
    IconDashboard,
    IconDevices,
    IconDeviceUpdate,
    IconDocs,
    IconIntegrations,
    IconLock,
    IconLog,
    IconNet,
    IconNetwork,
    IconPendingCommands,
    IconRemoteClients,
    IconSearch,
} from '../../Atomic/Icon'
import { severities } from '../../Atomic/VersionMark/constants'
import { Logo } from './components'

export const leftPanelMenu = [
    {
        title: 'Main menu',
        items: [
            {
                icon: <IconDashboard />,
                id: '1',
                title: 'Dashboard',
                link: '/dashboard',
            },
            {
                icon: <IconDevices />,
                id: '2',
                title: 'Devices',
                link: '/devices',
            },
            {
                icon: <IconIntegrations />,
                id: '3',
                title: 'Integrations',
                link: '/integrations',
            },
            {
                icon: <IconRemoteClients />,
                id: '4',
                title: 'Remote clients',
                link: '/remote-clients',
            },
            {
                icon: <IconPendingCommands />,
                id: '5',
                title: 'Pending commands',
                link: '/pending-commands',
            },
        ],
    },
    {
        title: 'Other',
        icon: <IconSearch />,
        items: [
            {
                icon: <IconNetwork />,
                id: '10',
                title: 'Device provisioning',
                children: [
                    { icon: <IconSearch />, id: '101', title: 'Quickstart', tag: { variant: 'success', text: 'New' } },
                    { icon: <IconSearch />, id: '102', title: 'Manage enrollments' },
                    { icon: <IconSearch />, id: '103', title: 'Linked hubs' },
                    { icon: <IconSearch />, id: '104', title: 'Certificates', tag: { variant: 'info', text: 'Soon!' } },
                    { icon: <IconSearch />, id: '105', title: 'Registration records' },
                ],
                link: '/device-provisioning',
            },
            {
                icon: <IconDeviceUpdate />,
                id: '11',
                title: 'Device firmware update',
                children: [
                    { icon: <IconSearch />, id: '111', title: 'Quickstart 2', tag: { variant: 'success', text: 'New 2' } },
                    { icon: <IconSearch />, id: '112', title: 'Manage enrollments 2' },
                    { icon: <IconSearch />, id: '113', title: 'Linked hubs 2' },
                    { icon: <IconSearch />, id: '114', title: 'Certificates 2', tag: { variant: 'info', text: 'Soon!' } },
                    { icon: <IconSearch />, id: '115', title: 'Registration records 2' },
                ],
                link: '/device-update',
            },
            {
                icon: <IconLog />,
                id: '12',
                title: 'Device logs',
                link: 'device-logs',
            },
            {
                icon: <IconLock />,
                id: '13',
                title: 'API tokens',
                link: 'api-tokens',
            },
            {
                icon: <IconNet />,
                id: '14',
                title: 'Schema hub',
                link: '/schema-hub',
            },
        ],
    },
    {
        title: 'Support',
        items: [
            {
                icon: <IconDocs />,
                id: '20',
                title: 'Docs',
                link: '/docs',
            },
            {
                icon: <IconChat />,
                id: '21',
                title: 'Chat room',
                link: '/chart-room',
            },
        ],
    },
]

describe('<LeftPanel>', () => {
    it('render correctly - snapshot', async () => {
        const { asFragment } = render(
            <LeftPanel
                activeId='1'
                collapsed={false}
                logo={<Logo height={32} width={147} />}
                menu={leftPanelMenu}
                versionMark={<VersionMark severity={severities.SUCCESS} versionText='Version 2.02' />}
            />
        )

        await waitFor(() => {
            expect(asFragment()).toMatchSnapshot()
        })
    })

    it('render correctly - snapshot', async () => {
        const { asFragment } = render(
            <LeftPanel
                activeId='1'
                collapsed={false}
                logo={<Logo height={32} width={147} />}
                menu={leftPanelMenu}
                versionMark={<VersionMark severity={severities.WARNING} versionText='Version 2.02' />}
            />
        )

        await waitFor(() => {
            expect(asFragment()).toMatchSnapshot()
        })
    })

    it('render correctly - snapshot', async () => {
        const { asFragment } = render(
            <LeftPanel
                activeId='1'
                collapsed={false}
                logo={<Logo height={32} width={147} />}
                menu={leftPanelMenu}
                versionMark={<VersionMark severity={severities.ERROR} versionText='Version 2.02' />}
            />
        )

        await waitFor(() => {
            expect(asFragment()).toMatchSnapshot()
        })
    })

    it('render correctly - snapshot', async () => {
        const { asFragment } = render(
            <LeftPanel
                activeId='4'
                collapsed={true}
                logo={<Logo height={32} width={147} />}
                menu={leftPanelMenu}
                newFeature={{
                    i18n: {
                        headline: 'headline',
                        description: 'description',
                    },
                    onClick: () => console.log('click'),
                    onClose: () => console.log('close'),
                }}
                versionMark={<VersionMark severity={severities.SUCCESS} versionText='Version 2.02' />}
            />
        )

        await waitFor(() => {
            expect(asFragment()).toMatchSnapshot()
        })
    })
})
