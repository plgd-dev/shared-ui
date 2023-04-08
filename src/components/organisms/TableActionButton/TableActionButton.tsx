import { FC } from 'react'
import { useMediaQuery } from 'react-responsive'

import ActionButton from '../../new/ActionButton'
import { Props, ItemType } from './TableActionButton.types'
import TableActions from '../../new/TableNew/TableActions'

const TableActionButton: FC<Props> = (props) => {
    const { disabled, items } = props
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1281px)',
    })

    if (isDesktopOrLaptop) {
        const innerItems =
            items
                .map((item: ItemType) => ({
                    icon: item.icon!,
                    onClick: item.onClick!,
                    id: item.id!,
                    tooltipText: item.label,
                    hidden: item.hidden,
                }))
                .filter((item) => !item.hidden) || []

        return <TableActions items={innerItems} />
    }

    return (
        <ActionButton
            disabled={disabled}
            items={items}
            menuProps={{
                placement: 'bottom-end',
            }}
        />
    )
}

TableActionButton.displayName = 'TableActionButton'

export default TableActionButton
