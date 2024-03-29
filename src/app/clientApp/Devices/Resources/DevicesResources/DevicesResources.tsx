import { FC, useMemo } from 'react'
import { useIntl } from 'react-intl'

import Switch from '../../../../../components/Atomic/Switch'
import { useLocalStorage } from '../../../../../common/hooks'
import DevicesResourcesList from '../../../../../components/Organisms/DevicesResourcesList'
import TableActionButton from '../../../../../components/Organisms/TableActionButton'
import DevicesResourcesTree from '../../../../../components/Organisms/DevicesResourcesTree'
import TreeExpander from '../../../../../components/Atomic/TreeExpander'
import { IconEdit, IconPlus, IconTrash } from '../../../../../components/Atomic/Icon'
import { tagVariants } from '../../../../../components/Atomic/Tag/constants'
import TagGroup from '../../../../../components/Atomic/TagGroup'
import Tag from '../../../../../components/Atomic/Tag'
import { devicesStatuses, RESOURCE_TREE_DEPTH_SIZE } from '../../constants'
import { canBeResourceEdited, canCreateResource, getLastPartOfAResourceHref } from '../../utils'
import { messages as t } from '../../Devices.i18n'
import { Props } from './DevicesResources.types'
import { messages as app } from '../../../App/App.i18n'
import * as styles from './DevicesResources.styles'

export const DevicesResources: FC<Props> = ({ data, deviceId, deviceStatus, isActiveTab, isOwned, loading, onCreate, onDelete, onUpdate, pageSize }) => {
    const { formatMessage: _ } = useIntl()
    const [treeViewActive, setTreeViewActive] = useLocalStorage('treeViewActive', false)
    const isUnregistered = devicesStatuses.UNREGISTERED === deviceStatus

    const columns = useMemo(
        () => [
            {
                Header: _(t.href),
                accessor: 'href',
                Cell: ({ value, row }: { value: any; row: any }) => {
                    const {
                        original: { deviceId: deviceIdOrigin, href, endpointInformations },
                    } = row

                    const edit = canBeResourceEdited(endpointInformations) || isOwned

                    if (!edit) {
                        return <span>{value}</span>
                    }
                    return (
                        <div className='tree-expander-container'>
                            <span className='link reveal-icon-on-hover' onClick={() => onUpdate({ deviceId: deviceIdOrigin, href })}>
                                {value}
                            </span>
                        </div>
                    )
                },
                style: { width: '300px' },
            },
            {
                Header: _(t.types),
                accessor: 'resourceTypes',
                style: { width: '100%' },
                Cell: ({ value }: { value: any }) => value.join(', '),
            },
            {
                Header: _(t.actions),
                accessor: 'actions',
                disableSortBy: true,
                style: { textAlign: 'center' },
                Cell: ({ row }: { row: any }) => {
                    const {
                        original: { href, interfaces, endpointInformations },
                    } = row

                    const create = interfaces && canCreateResource(interfaces) && isOwned
                    const edit = (endpointInformations && canBeResourceEdited(endpointInformations)) || isOwned

                    return (
                        <TableActionButton
                            disabled={loading}
                            items={[
                                {
                                    onClick: () => onCreate(href),
                                    label: _(t.create),
                                    icon: <IconPlus />,
                                    hidden: !create,
                                },
                                {
                                    onClick: () => onUpdate({ deviceId, href }),
                                    label: _(t.update),
                                    icon: <IconEdit />,
                                    hidden: !edit,
                                },
                                {
                                    onClick: () => onDelete(href),
                                    label: _(t.delete),
                                    icon: <IconTrash />,
                                    hidden: !edit,
                                },
                            ]}
                        />
                    )
                },
                className: 'actions',
            },
        ],
        [onUpdate, onCreate, onDelete, loading] //eslint-disable-line
    )

    const treeColumns = useMemo(
        () => [
            {
                Header: _(t.href),
                accessor: 'href',
                Cell: ({ value, row }: { value: any; row: any }) => {
                    const {
                        original: { href, endpointInformations },
                    } = row

                    const lastValue = getLastPartOfAResourceHref(value)
                    const onLinkClick = deviceId ? () => onUpdate({ deviceId, href: href.replace(/\/$/, '') }) : undefined

                    const edit = canBeResourceEdited(endpointInformations) || isOwned

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
                                {edit ? (
                                    <span className={!row.canExpand ? 'link reveal-icon-on-hover' : ''} onClick={onLinkClick}>
                                        {`/${lastValue}/`}
                                    </span>
                                ) : (
                                    <span>{lastValue}</span>
                                )}
                            </div>
                        )
                    }

                    return (
                        <div
                            className='tree-expander-container'
                            style={{
                                marginLeft: `${row.depth === 0 ? 0 : row.depth * RESOURCE_TREE_DEPTH_SIZE}px`,
                            }}
                        >
                            {row.depth > 0 && (
                                <span
                                    style={{
                                        display: 'block',
                                        width: 15,
                                    }}
                                ></span>
                            )}
                            <span className='link reveal-icon-on-hover' onClick={onLinkClick}>
                                {`/${lastValue}`}
                            </span>
                        </div>
                    )
                },
                style: { width: '40%' },
            },
            {
                Header: _(t.types),
                accessor: 'resourceTypes',
                Cell: ({ value }: { value: any }) => {
                    if (!deviceId) {
                        return null
                    }

                    return (
                        <TagGroup
                            i18n={{
                                more: _(app.more),
                                modalHeadline: _(app.types),
                            }}
                        >
                            {value?.map?.((type: string) => (
                                <Tag key={type} variant={tagVariants.WHITE}>
                                    {type}
                                </Tag>
                            ))}
                        </TagGroup>
                    )
                },
            },
            {
                Header: _(t.actions),
                accessor: 'actions',
                disableSortBy: true,
                className: 'actions',
                Cell: ({ row }: { row: any }) => {
                    if (row.canExpand) {
                        return null
                    }

                    const {
                        original: { href, interfaces, endpointInformations },
                    } = row
                    const cleanHref = href.replace(/\/$/, '') // href without a trailing slash
                    const create = interfaces && canCreateResource(interfaces) && isOwned
                    const edit = (endpointInformations && canBeResourceEdited(endpointInformations)) || isOwned

                    return (
                        <TableActionButton
                            disabled={loading}
                            items={[
                                {
                                    onClick: () => onCreate(cleanHref),
                                    label: _(t.create),
                                    icon: <IconPlus />,
                                    hidden: !create,
                                },
                                {
                                    onClick: () => onUpdate({ deviceId, href: cleanHref }),
                                    label: _(t.update),
                                    icon: <IconEdit />,
                                    hidden: !edit,
                                },
                                {
                                    onClick: () => onDelete(cleanHref),
                                    label: _(t.delete),
                                    icon: <IconTrash />,
                                    hidden: !edit,
                                },
                            ]}
                        />
                    )
                },
            },
        ],
        [onUpdate, onCreate, onDelete, loading] //eslint-disable-line
    )

    return (
        <>
            <div css={styles.switchRow}>
                <Switch
                    checked={treeViewActive}
                    disabled={isUnregistered}
                    id='toggle-tree-view'
                    label={_(t.treeView)}
                    onChange={() => setTreeViewActive(!treeViewActive)}
                />
            </div>

            {treeViewActive ? (
                <DevicesResourcesTree columns={treeColumns} data={data} />
            ) : (
                <DevicesResourcesList
                    columns={columns}
                    data={data}
                    i18n={{
                        search: _(t.search),
                    }}
                    isActiveTab={isActiveTab}
                    pageSize={pageSize}
                />
            )}
        </>
    )
}

DevicesResources.displayName = 'DevicesResources'

export default DevicesResources
