import { FC } from 'react'
import { useIntl } from 'react-intl'
import { useMediaQuery } from 'react-responsive'

import ActionButton from '../../new/ActionButton'
import { canCreateResource } from '../../../common/utils'
import { Props, defaultProps } from './DevicesResourcesActionButton.types'
import TableActions from '../../new/TableNew/TableActions'

const DevicesResourcesActionButton: FC<Props> = (props) => {
    const { disabled, href, deviceId, i18n, interfaces, onCreate, onUpdate, onDelete } = { ...defaultProps, ...props }
    const { formatMessage: _ } = useIntl()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1281px)',
    })

    if (isDesktopOrLaptop) {
        const items = [
            { icon: 'trash', onClick: () => onDelete(href), id: `delete-row-${deviceId}`, tooltipText: i18n.delete },
            { icon: 'edit', onClick: () => onUpdate({ deviceId, href }), id: `edit-row-${deviceId}`, tooltipText: i18n.update },
        ]

        if (canCreateResource(interfaces)) {
            items.push({ icon: 'plus', onClick: () => onCreate(href), id: `create-row-${deviceId}`, tooltipText: i18n.create })
        }

        return <TableActions items={items} />
    }

    return (
        <ActionButton
            disabled={disabled}
            items={[
                {
                    onClick: () => onCreate(href),
                    label: i18n.create,
                    icon: 'plus',
                    hidden: !canCreateResource(interfaces),
                },
                {
                    onClick: () => onUpdate({ deviceId, href }),
                    label: i18n.update,
                    icon: 'edit',
                },
                {
                    onClick: () => onDelete(href),
                    label: i18n.delete,
                    icon: 'trash',
                },
            ]}
            menuProps={{
                placement: 'bottom-end',
            }}
        />
    )
}

DevicesResourcesActionButton.displayName = 'DevicesResourcesActionButton'
DevicesResourcesActionButton.defaultProps = defaultProps

export default DevicesResourcesActionButton
