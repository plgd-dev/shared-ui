import { ReactNode } from 'react'
import { DeviceDataType } from '../../../common/types/Devices.types'

export type Props = {
    collapsed: boolean
    columns: any
    customContent?: ReactNode
    data: DeviceDataType
    i18n: {
        delete: string
        search: string
        select: string
    }
    isActiveTab?: boolean
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
