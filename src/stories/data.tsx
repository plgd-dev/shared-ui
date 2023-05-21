import {
    IconChat,
    IconDashboard,
    IconDevices,
    IconDocs,
    IconIntegrations,
    IconLock,
    IconLog,
    IconNet,
    IconNetwork,
    IconPendingCommands,
    IconRemoteClients,
    IconSearch,
} from '../components/Atomic/Icon'

export const leftPanelMenu = [
    {
        title: 'Main menu',
        items: [
            {
                icon: <IconDashboard />,
                id: '1',
                title: 'Dashboard',
            },
            {
                icon: <IconDevices />,
                id: '2',
                title: 'Devices',
            },
            {
                icon: <IconIntegrations />,
                id: '3',
                title: 'Integrations',
            },
            {
                icon: <IconRemoteClients />,
                id: '4',
                title: 'Remote clients',
            },
            {
                icon: <IconPendingCommands />,
                id: '5',
                title: 'Pending commands',
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
            },
            {
                icon: 'device-update',
                id: '11',
                title: 'Device firmware update',
                children: [
                    { icon: <IconSearch />, id: '111', title: 'Quickstart 2', tag: { variant: 'success', text: 'New 2' } },
                    { icon: <IconSearch />, id: '112', title: 'Manage enrollments 2' },
                    { icon: <IconSearch />, id: '113', title: 'Linked hubs 2' },
                    { icon: <IconSearch />, id: '114', title: 'Certificates 2', tag: { variant: 'info', text: 'Soon!' } },
                    { icon: <IconSearch />, id: '115', title: 'Registration records 2' },
                ],
            },
            {
                icon: <IconLog />,
                id: '12',
                title: 'Device logs',
            },
            {
                icon: <IconLock />,
                id: '13',
                title: 'API tokens',
            },
            {
                icon: <IconNet />,
                id: '14',
                title: 'Schema hub',
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
            },
            {
                icon: <IconChat />,
                id: '21',
                title: 'Chat room',
            },
        ],
    },
]
