import { FC, memo, useMemo, useState } from 'react'
import { useIntl } from 'react-intl'
import isFunction from 'lodash/isFunction'

import TableActionButton from '../../../../../components/Organisms/TableActionButton'
import { ItemType } from '../../../../../components/Organisms/TableActionButton/TableActionButton.types'
import { IconClose, IconNetwork, IconPlus, IconArrowDetail } from '../../../../../components/Atomic/Icon'
import { devicesOwnerships } from '../../constants'
import { canSetDPSEndpoint } from '../../utils'
import { getDevicesResourcesAllApi } from '../../rest'
import { messages as t } from '../../Devices.i18n'

import { Props } from './DevicesListActionButton.types'

const { OWNED, UNSUPPORTED } = devicesOwnerships

const DevicesListActionButton: FC<Props> = memo((props) => {
    const { deviceId, onView, ownershipStatus, onOwnChange, showDpsModal, resourcesLoadedCallback } = props

    const isOwned = useMemo(() => ownershipStatus === OWNED, [ownershipStatus])
    const isUnsupported = useMemo(() => ownershipStatus === UNSUPPORTED, [ownershipStatus])

    const getDefaultItems = () => {
        const defaultItems: ItemType[] = []

        if (isOwned) {
            defaultItems.push({
                id: 'dps',
                onClick: () => showDpsModal(deviceId),
                label: _(t.setDpsEndpoint),
                icon: <IconNetwork />,
                loading: true,
            })
        }

        if (!isUnsupported) {
            defaultItems.push({
                id: 'own',
                onClick: () => onOwnChange(),
                label: isOwned ? _(t.disOwnDevice) : _(t.ownDevice),
                icon: isOwned ? <IconClose /> : <IconPlus />,
            })
        }

        defaultItems.push({
            id: 'detail',
            onClick: () => onView(deviceId),
            label: _(t.details),
            icon: <IconArrowDetail />,
        })

        return defaultItems
    }
    const { formatMessage: _ } = useIntl()
    const [resources, setResources] = useState(undefined)
    const [items, setItems] = useState(getDefaultItems())

    const handleToggle = async (isOpen: boolean) => {
        if (isOpen && isOwned && !resources) {
            const { data } = await getDevicesResourcesAllApi(deviceId)

            setResources(data.resources)
            isFunction(resourcesLoadedCallback) && resourcesLoadedCallback(data.resources)
            const hasDPS = canSetDPSEndpoint(data.resources)

            setItems(() => {
                const newItems: ItemType[] = []
                items.forEach((item) => {
                    if (item.id === 'dps') {
                        if (hasDPS) {
                            newItems.push({
                                ...item,
                                loading: false,
                            })
                        }
                    } else {
                        newItems.push(item)
                    }
                })

                return newItems
            })
        }
    }

    return <TableActionButton items={items} onToggle={handleToggle} />
})

DevicesListActionButton.displayName = 'DevicesListActionButton'

export default DevicesListActionButton
