import { FC, memo } from 'react'
import { useMediaQuery } from 'react-responsive'
import isFunction from 'lodash/isFunction'

import ActionButton from '../../Atomic/ActionButton'
import { Props, ItemType } from './TableActionButton.types'
import TableActions from '../../Atomic/TableNew/TableActions'

const TableActionButton: FC<Props> = memo((props) => {
    const { dataTestId, disabled, items, onToggle } = props

    const onChange = (matches: boolean) => {
        // just simulate -> all items are visible
        isFunction(onToggle) && matches && onToggle(true)
    }

    const isDesktopOrLaptop = useMediaQuery(
        {
            query: '(min-width: 1281px)',
        },
        undefined,
        onChange
    )

    if (isDesktopOrLaptop) {
        const innerItems =
            items
                .map((item: ItemType) => ({
                    icon: item.icon!,
                    onClick: item.onClick!,
                    id: item.id!,
                    tooltipText: item.label,
                    hidden: item.hidden,
                    dataTestId: item.dataTestId,
                }))
                .filter((item) => !item.hidden) || []

        return <TableActions items={innerItems} />
    }

    return (
        <ActionButton
            dataTestIdDropdown={dataTestId}
            disabled={disabled}
            items={items}
            menuProps={{
                placement: 'bottom-end',
            }}
            onToggle={onToggle}
            portalTarget={document.getElementById('modal-root')}
        />
    )
})

TableActionButton.displayName = 'TableActionButton'

export default TableActionButton
