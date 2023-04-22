import { FC, useCallback, useMemo } from 'react'

import Button from '../../new/Button'
import Table, { TableSelectionPanel } from '../../new/TableNew'
import { DEVICES_DEFAULT_PAGE_SIZE } from '../../../common/constants'
import { Props, defaultProps } from './DevicesList.types'

const DevicesList: FC<Props> = (props) => {
    const {
        collapsed,
        customContent,
        data,
        i18n,
        isAllSelected,
        columns,
        onDeleteClick,
        setIsAllSelected,
        setSelectedDevices,
        selectedDevices,
        unselectRowsToken,
    } = { ...defaultProps, ...props }

    const validData = useCallback((data: any) => (!data || data[0] === undefined ? [] : data), [])
    const selectedCount = useMemo(() => Object.keys(selectedDevices).length, [selectedDevices])

    return (
        <>
            <Table
                columns={columns}
                data={validData(data)}
                defaultPageSize={DEVICES_DEFAULT_PAGE_SIZE}
                defaultSortBy={[
                    {
                        id: 'name',
                        desc: false,
                    },
                ]}
                i18n={{
                    search: i18n.search,
                }}
                onRowsSelect={(isAllRowsSelected, selection) => {
                    isAllRowsSelected !== isAllSelected && setIsAllSelected && setIsAllSelected(isAllRowsSelected)
                    setSelectedDevices(selection)
                }}
                paginationPortalTargetId='paginationPortalTarget'
                primaryAttribute='id'
                unselectRowsToken={unselectRowsToken}
            />
            <TableSelectionPanel
                actionPrimary={
                    <Button onClick={() => onDeleteClick()} variant='primary'>
                        {i18n.delete}
                    </Button>
                }
                leftPanelCollapsed={collapsed}
                selectionInfo={`${selectedCount} device${selectedCount > 1 ? 's' : ''} `}
                show={selectedCount > 0}
            />
            {customContent}
        </>
    )
}

DevicesList.displayName = 'DevicesList'
DevicesList.defaultProps = defaultProps

export default DevicesList
