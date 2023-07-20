import React, { useMemo } from 'react'
import TreeTable from '../../components/Atomic/TreeTable'
import TreeExpander from '../../components/Atomic/TreeExpander'
import Badge from '../../components/Atomic/Badge'
import TableActionButton from '../../components/Organisms/TableActionButton'
import { IconEdit, IconPlus, IconTrash } from '../../components/Atomic'

const RESOURCE_TREE_DEPTH_SIZE = 15

export default {
    title: 'Table/TreeTable',
    component: TreeTable,
    argTypes: {},
}

const Template = (args) => {
    const getLastPartOfAResourceHref = (href) => {
        if (!href) {
            return ''
        }
        const values = href.split('/').filter((_t) => _t)
        return values[values.length - 1]
    }

    const isOwned = true

    const canBeResourceEdited = (endpoints) => endpoints && endpoints.some((e) => e.endpoint.indexOf('coap://') > -1 || e.endpoint.indexOf('coap+tcp://') > -1)

    const columns = useMemo(
        () => [
            {
                Header: 'Href',
                accessor: 'href',
                Cell: ({ value, row }) => {
                    const {
                        original: { href, endpointInformations },
                    } = row

                    const lastValue = getLastPartOfAResourceHref(value)
                    const onLinkClick = null

                    const edit = canBeResourceEdited(endpointInformations) || isOwned

                    if (!edit) {
                        return <span>{lastValue}</span>
                    }

                    if (row.canExpand) {
                        return (
                            <div className='tree-expander-container'>
                                <TreeExpander
                                    {...row.getToggleRowExpandedProps({ title: null })}
                                    expanded={row.isExpanded}
                                    style={{
                                        marginLeft: `${row.depth * RESOURCE_TREE_DEPTH_SIZE}px`,
                                    }}
                                />
                                <span className={!row.canExpand ? 'link reveal-icon-on-hover' : ''} onClick={() => onLinkClick}>
                                    {`/${lastValue}/`}
                                </span>
                                {!row.canExpand && <i className='fas fa-pen' />}
                            </div>
                        )
                    }

                    return (
                        <div
                            className='tree-expander-container'
                            style={{
                                marginLeft: `${row.depth === 0 ? 0 : (row.depth + 1) * RESOURCE_TREE_DEPTH_SIZE}px`,
                            }}
                        >
                            <span className='link reveal-icon-on-hover' onClick={() => onLinkClick}>
                                {`/${lastValue}`}
                            </span>
                            <i className='fas fa-pen' />
                        </div>
                    )
                },
                style: { width: '100%' },
            },
            {
                Header: 'Types',
                accessor: 'resourceTypes',
                Cell: ({ value }) => {
                    return (
                        <div className='badges-box-horizontal'>
                            {value?.map?.((type) => (
                                <Badge key={type}>{type}</Badge>
                            ))}
                        </div>
                    )
                },
            },
            {
                Header: 'Actions',
                accessor: 'actions',
                disableSortBy: true,
                Cell: ({ row }) => {
                    if (row.canExpand) {
                        return null
                    }

                    return (
                        <TableActionButton
                            items={[
                                {
                                    onClick: () => {},
                                    label: 'Create',
                                    icon: <IconPlus />,
                                },
                                {
                                    onClick: () => {},
                                    label: 'Update',
                                    icon: <IconEdit />,
                                },
                                {
                                    onClick: () => {},
                                    label: 'Delete',
                                    icon: <IconTrash />,
                                },
                            ]}
                        />
                    )
                },
            },
        ],
        [] //eslint-disable-line
    )

    const data = useMemo(
        () => [
            {
                resourceTypes: ['oic.r.coapcloudconf'],
                interfaces: ['oic.if.rw', 'oic.if.baseline'],
                validUntil: '0',
                anchor: 'ocf://3fd5d9f4-ef2b-48b9-6b30-86a0e553c96d',
                policy: {
                    bitFlags: 3,
                },
                endpointInformations: [
                    {
                        endpoint: 'coaps://192.168.1.179:49245',
                        priority: '0',
                    },
                    {
                        endpoint: 'coaps+tcp://192.168.1.179:39685',
                        priority: '0',
                    },
                ],
                href: '/CoapCloudConfResURI/',
            },
            {
                href: '/light/',
                subRows: [
                    {
                        endpointInformations: [
                            {
                                endpoint: 'coaps://192.168.1.179:49245',
                                priority: '0',
                            },
                            {
                                endpoint: 'coaps+tcp://192.168.1.179:39685',
                                priority: '0',
                            },
                        ],
                        anchor: 'ocf://3fd5d9f4-ef2b-48b9-6b30-86a0e553c96d',
                        interfaces: ['oic.if.rw', 'oic.if.baseline'],
                        validUntil: '0',
                        policy: {
                            bitFlags: 3,
                        },
                        resourceTypes: ['core.light'],
                        href: '/light/1/',
                    },
                ],
            },
            {
                href: '/oc/',
                subRows: [
                    {
                        policy: {
                            bitFlags: 3,
                        },
                        endpointInformations: [
                            {
                                endpoint: 'coaps://192.168.1.179:49245',
                                priority: '0',
                            },
                            {
                                endpoint: 'coaps+tcp://192.168.1.179:39685',
                                priority: '0',
                            },
                        ],
                        resourceTypes: ['oic.wk.con'],
                        interfaces: ['oic.if.rw', 'oic.if.baseline'],
                        anchor: 'ocf://3fd5d9f4-ef2b-48b9-6b30-86a0e553c96d',
                        validUntil: '0',
                        href: '/oc/con/',
                    },
                    {
                        href: '/oc/wk/',
                        subRows: [
                            {
                                resourceTypes: ['oic.wk.introspection'],
                                anchor: 'ocf://3fd5d9f4-ef2b-48b9-6b30-86a0e553c96d',
                                interfaces: ['oic.if.r', 'oic.if.baseline'],
                                validUntil: '0',
                                policy: {
                                    bitFlags: 1,
                                },
                                endpointInformations: [
                                    {
                                        endpoint: 'coaps://192.168.1.179:49245',
                                        priority: '0',
                                    },
                                    {
                                        endpoint: 'coaps+tcp://192.168.1.179:39685',
                                        priority: '0',
                                    },
                                ],
                                href: '/oc/wk/introspection/',
                            },
                        ],
                    },
                ],
            },
            {
                href: '/oic/',
                subRows: [
                    {
                        validUntil: '0',
                        endpointInformations: [
                            {
                                endpoint: 'coap://192.168.1.179:54940',
                                priority: '0',
                            },
                            {
                                endpoint: 'coaps://192.168.1.179:49245',
                                priority: '0',
                            },
                            {
                                priority: '0',
                                endpoint: 'coap+tcp://192.168.1.179:55037',
                            },
                            {
                                priority: '0',
                                endpoint: 'coaps+tcp://192.168.1.179:39685',
                            },
                        ],
                        interfaces: ['oic.if.r', 'oic.if.baseline'],
                        anchor: 'ocf://3fd5d9f4-ef2b-48b9-6b30-86a0e553c96d',
                        resourceTypes: ['oic.d.cloudDevice', 'oic.wk.d'],
                        policy: {
                            bitFlags: 3,
                        },
                        href: '/oic/d/',
                    },
                    {
                        interfaces: ['oic.if.rw', 'oic.if.baseline'],
                        anchor: 'ocf://3fd5d9f4-ef2b-48b9-6b30-86a0e553c96d',
                        validUntil: '0',
                        policy: {
                            bitFlags: 1,
                        },
                        endpointInformations: [
                            {
                                endpoint: 'coaps://192.168.1.179:49245',
                                priority: '0',
                            },
                            {
                                endpoint: 'coaps+tcp://192.168.1.179:39685',
                                priority: '0',
                            },
                        ],
                        resourceTypes: ['oic.wk.mnt'],
                        href: '/oic/mnt/',
                    },
                    {
                        resourceTypes: ['oic.wk.p'],
                        interfaces: ['oic.if.r', 'oic.if.baseline'],
                        endpointInformations: [
                            {
                                endpoint: 'coap://192.168.1.179:54940',
                                priority: '0',
                            },
                            {
                                endpoint: 'coaps://192.168.1.179:49245',
                                priority: '0',
                            },
                            {
                                priority: '0',
                                endpoint: 'coap+tcp://192.168.1.179:55037',
                            },
                            {
                                endpoint: 'coaps+tcp://192.168.1.179:39685',
                                priority: '0',
                            },
                        ],
                        validUntil: '0',
                        policy: {
                            bitFlags: 3,
                        },
                        anchor: 'ocf://3fd5d9f4-ef2b-48b9-6b30-86a0e553c96d',
                        href: '/oic/p/',
                    },
                    {
                        validUntil: '0',
                        endpointInformations: [
                            {
                                endpoint: 'coap://192.168.1.179:54940',
                                priority: '0',
                            },
                            {
                                endpoint: 'coaps://192.168.1.179:49245',
                                priority: '0',
                            },
                            {
                                endpoint: 'coap+tcp://192.168.1.179:55037',
                                priority: '0',
                            },
                            {
                                endpoint: 'coaps+tcp://192.168.1.179:39685',
                                priority: '0',
                            },
                        ],
                        resourceTypes: ['oic.wk.res'],
                        interfaces: ['oic.if.ll', 'oic.if.b', 'oic.if.baseline'],
                        anchor: 'ocf://3fd5d9f4-ef2b-48b9-6b30-86a0e553c96d',
                        policy: {
                            bitFlags: 3,
                        },
                        href: '/oic/res/',
                    },
                    {
                        href: '/oic/sec/',
                        subRows: [
                            {
                                endpointInformations: [
                                    {
                                        endpoint: 'coaps://192.168.1.179:49245',
                                        priority: '0',
                                    },
                                    {
                                        endpoint: 'coaps+tcp://192.168.1.179:39685',
                                        priority: '0',
                                    },
                                ],
                                resourceTypes: ['oic.r.acl2'],
                                interfaces: ['oic.if.rw', 'oic.if.baseline'],
                                policy: {
                                    bitFlags: 1,
                                },
                                validUntil: '0',
                                anchor: 'ocf://3fd5d9f4-ef2b-48b9-6b30-86a0e553c96d',
                                href: '/oic/sec/acl2/',
                            },
                            {
                                anchor: 'ocf://3fd5d9f4-ef2b-48b9-6b30-86a0e553c96d',
                                policy: {
                                    bitFlags: 1,
                                },
                                validUntil: '0',
                                endpointInformations: [
                                    {
                                        endpoint: 'coaps://192.168.1.179:49245',
                                        priority: '0',
                                    },
                                    {
                                        endpoint: 'coaps+tcp://192.168.1.179:39685',
                                        priority: '0',
                                    },
                                ],
                                resourceTypes: ['oic.r.ael'],
                                interfaces: ['oic.if.rw', 'oic.if.baseline'],
                                href: '/oic/sec/ael/',
                            },
                            {
                                resourceTypes: ['oic.r.cred'],
                                interfaces: ['oic.if.rw', 'oic.if.baseline'],
                                anchor: 'ocf://3fd5d9f4-ef2b-48b9-6b30-86a0e553c96d',
                                validUntil: '0',
                                endpointInformations: [
                                    {
                                        endpoint: 'coaps://192.168.1.179:49245',
                                        priority: '0',
                                    },
                                    {
                                        endpoint: 'coaps+tcp://192.168.1.179:39685',
                                        priority: '0',
                                    },
                                ],
                                policy: {
                                    bitFlags: 1,
                                },
                                href: '/oic/sec/cred/',
                            },
                            {
                                anchor: 'ocf://3fd5d9f4-ef2b-48b9-6b30-86a0e553c96d',
                                validUntil: '0',
                                policy: {
                                    bitFlags: 1,
                                },
                                resourceTypes: ['oic.r.csr'],
                                interfaces: ['oic.if.rw', 'oic.if.baseline'],
                                endpointInformations: [
                                    {
                                        endpoint: 'coaps://192.168.1.179:49245',
                                        priority: '0',
                                    },
                                    {
                                        endpoint: 'coaps+tcp://192.168.1.179:39685',
                                        priority: '0',
                                    },
                                ],
                                href: '/oic/sec/csr/',
                            },
                            {
                                anchor: 'ocf://3fd5d9f4-ef2b-48b9-6b30-86a0e553c96d',
                                validUntil: '0',
                                policy: {
                                    bitFlags: 1,
                                },
                                endpointInformations: [
                                    {
                                        endpoint: 'coaps://192.168.1.179:49245',
                                        priority: '0',
                                    },
                                    {
                                        endpoint: 'coaps+tcp://192.168.1.179:39685',
                                        priority: '0',
                                    },
                                ],
                                resourceTypes: ['oic.r.doxm'],
                                interfaces: ['oic.if.rw', 'oic.if.baseline'],
                                href: '/oic/sec/doxm/',
                            },
                            {
                                anchor: 'ocf://3fd5d9f4-ef2b-48b9-6b30-86a0e553c96d',
                                policy: {
                                    bitFlags: 3,
                                },
                                endpointInformations: [
                                    {
                                        priority: '0',
                                        endpoint: 'coaps://192.168.1.179:49245',
                                    },
                                    {
                                        endpoint: 'coaps+tcp://192.168.1.179:39685',
                                        priority: '0',
                                    },
                                ],
                                validUntil: '0',
                                resourceTypes: ['oic.r.pstat'],
                                interfaces: ['oic.if.rw', 'oic.if.baseline'],
                                href: '/oic/sec/pstat/',
                            },
                            {
                                policy: {
                                    bitFlags: 1,
                                },
                                interfaces: ['oic.if.rw', 'oic.if.baseline'],
                                anchor: 'ocf://3fd5d9f4-ef2b-48b9-6b30-86a0e553c96d',
                                validUntil: '0',
                                endpointInformations: [
                                    {
                                        endpoint: 'coaps://192.168.1.179:49245',
                                        priority: '0',
                                    },
                                    {
                                        endpoint: 'coaps+tcp://192.168.1.179:39685',
                                        priority: '0',
                                    },
                                ],
                                resourceTypes: ['oic.r.roles'],
                                href: '/oic/sec/roles/',
                            },
                            {
                                interfaces: ['oic.if.rw', 'oic.if.baseline'],
                                endpointInformations: [
                                    {
                                        endpoint: 'coaps://192.168.1.179:49245',
                                        priority: '0',
                                    },
                                    {
                                        endpoint: 'coaps+tcp://192.168.1.179:39685',
                                        priority: '0',
                                    },
                                ],
                                policy: {
                                    bitFlags: 1,
                                },
                                resourceTypes: ['oic.r.sdi'],
                                anchor: 'ocf://3fd5d9f4-ef2b-48b9-6b30-86a0e553c96d',
                                validUntil: '0',
                                href: '/oic/sec/sdi/',
                            },
                            {
                                anchor: 'ocf://3fd5d9f4-ef2b-48b9-6b30-86a0e553c96d',
                                policy: {
                                    bitFlags: 1,
                                },
                                endpointInformations: [
                                    {
                                        endpoint: 'coaps://192.168.1.179:49245',
                                        priority: '0',
                                    },
                                    {
                                        endpoint: 'coaps+tcp://192.168.1.179:39685',
                                        priority: '0',
                                    },
                                ],
                                resourceTypes: ['oic.r.sp'],
                                interfaces: ['oic.if.rw', 'oic.if.baseline'],
                                validUntil: '0',
                                href: '/oic/sec/sp/',
                            },
                        ],
                    },
                ],
            },
            {
                endpointInformations: [
                    {
                        endpoint: 'coaps://192.168.1.179:49245',
                        priority: '0',
                    },
                    {
                        endpoint: 'coaps+tcp://192.168.1.179:39685',
                        priority: '0',
                    },
                ],
                resourceTypes: ['oic.wk.col'],
                interfaces: ['oic.if.ll', 'oic.if.create', 'oic.if.b', 'oic.if.baseline'],
                anchor: 'ocf://3fd5d9f4-ef2b-48b9-6b30-86a0e553c96d',
                policy: {
                    bitFlags: 3,
                },
                validUntil: '0',
                href: '/switches/',
            },
            {
                href: '/x.plgd.dev/',
                subRows: [
                    {
                        resourceTypes: ['x.plgd.dev.time'],
                        anchor: 'ocf://3fd5d9f4-ef2b-48b9-6b30-86a0e553c96d',
                        interfaces: ['oic.if.rw', 'oic.if.baseline'],
                        validUntil: '0',
                        policy: {
                            bitFlags: 3,
                        },
                        endpointInformations: [
                            {
                                endpoint: 'coap://192.168.1.179:54940',
                                priority: '0',
                            },
                            {
                                endpoint: 'coaps://192.168.1.179:49245',
                                priority: '0',
                            },
                            {
                                endpoint: 'coap+tcp://192.168.1.179:55037',
                                priority: '0',
                            },
                            {
                                endpoint: 'coaps+tcp://192.168.1.179:39685',
                                priority: '0',
                            },
                        ],
                        href: '/x.plgd.dev/time/',
                    },
                ],
            },
        ],
        []
    )

    return <TreeTable columns={columns} data={data || []} />
}

export const Default = Template.bind({})
Default.args = {}
