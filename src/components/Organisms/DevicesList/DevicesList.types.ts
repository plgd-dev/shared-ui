import { DeviceDataType, ResourcesType } from '../../../common/types/Devices.types'
import { ReactNode } from 'react'

export type Props = {
    collapsed: boolean
    columns: any
    customContent?: ReactNode
    data: DeviceDataType
    i18n: {
        delete: string
        search: string
    }
    isAllSelected: boolean
    loading: boolean
    onDeleteClick: (deviceId?: string) => void
    selectedDevices: string[]
    setIsAllSelected?: (isAllSelected: boolean) => void
    setSelectedDevices: (data?: any) => void
    unselectRowsToken?: string | number
}

export const defaultProps = {
    data: undefined,
}
