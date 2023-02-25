export const leftPanelMenu = [
    {
        title: 'Main menu',
        items: [
            {
                icon: 'dashboard',
                id: '1',
                title: 'Dashboard',
            },
            {
                icon: 'devices',
                id: '2',
                title: 'Devices',
            },
            {
                icon: 'integrations',
                id: '3',
                title: 'Integrations',
            },
            {
                icon: 'remote-clients',
                id: '4',
                title: 'Remote clients',
            },
            {
                icon: 'pending-commands',
                id: '5',
                title: 'Pending commands',
            },
        ],
    },
    {
        title: 'Other',
        icon: 'search',
        items: [
            {
                icon: 'network',
                id: '10',
                title: 'Device provisioning',
                children: [
                    { icon: 'search', id: '101', title: 'Quickstart', tag: { variant: 'success', text: 'New' } },
                    { icon: 'search', id: '102', title: 'Manage enrollments' },
                    { icon: 'search', id: '103', title: 'Linked hubs' },
                    { icon: 'search', id: '104', title: 'Certificates', tag: { variant: 'info', text: 'Soon!' } },
                    { icon: 'search', id: '105', title: 'Registration records' },
                ],
            },
            {
                icon: 'device-update',
                id: '11',
                title: 'Device firmware update',
                children: [
                    { icon: 'search', id: '111', title: 'Quickstart 2', tag: { variant: 'success', text: 'New 2' } },
                    { icon: 'search', id: '112', title: 'Manage enrollments 2' },
                    { icon: 'search', id: '113', title: 'Linked hubs 2' },
                    { icon: 'search', id: '114', title: 'Certificates 2', tag: { variant: 'info', text: 'Soon!' } },
                    { icon: 'search', id: '115', title: 'Registration records 2' },
                ],
            },
            {
                icon: 'log',
                id: '12',
                title: 'Device logs',
            },
            {
                icon: 'lock',
                id: '13',
                title: 'API tokens',
            },
            {
                icon: 'net',
                id: '14',
                title: 'Schema hub',
            },
        ],
    },
    {
        title: 'Support',
        items: [
            {
                icon: 'docs',
                id: '20',
                title: 'Docs',
            },
            {
                icon: 'chat',
                id: '21',
                title: 'Chat room',
            },
        ],
    },
]
