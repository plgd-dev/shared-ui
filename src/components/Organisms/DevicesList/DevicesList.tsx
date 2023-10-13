import React, { FC, useCallback, useMemo } from 'react'
import ReactDOM from 'react-dom'

import Button from '../../Atomic/Button'
import Table, { TableSelectionPanel } from '../../Atomic/TableNew'
import { DEVICES_DEFAULT_PAGE_SIZE } from '../../../common/constants'
import { Props, defaultProps } from './DevicesList.types'
import { useIsMounted } from '../../../common/hooks'

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
    const isMounted = useIsMounted()

    return (
        <>
            <Table
                autoHeight={true}
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
            {isMounted &&
                document.querySelector('#modal-root') &&
                ReactDOM.createPortal(
                    <TableSelectionPanel
                        actionPrimary={
                            <Button onClick={() => onDeleteClick()} variant='primary'>
                                {i18n.delete}
                            </Button>
                        }
                        i18n={{
                            select: i18n.select,
                        }}
                        leftPanelCollapsed={collapsed}
                        selectionInfo={`${selectedCount} device${selectedCount > 1 ? 's' : ''} `}
                        show={selectedCount > 0}
                    />,
                    document.querySelector('#modal-root') as Element
                )}
            {customContent}
        </>
    )
}

DevicesList.displayName = 'DevicesList'
DevicesList.defaultProps = defaultProps

export default DevicesList
