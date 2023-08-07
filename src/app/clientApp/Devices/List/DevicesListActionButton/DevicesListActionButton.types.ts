import { devicesOwnerships } from '../../constants'

export type Props = {
    deviceId: string
    onDelete: () => void
    onOwnChange: () => void
    onView: (deviceId: string) => void
    ownershipStatus: keyof typeof devicesOwnerships
    resourcesLoadedCallback: (data: any) => void
    showDpsModal: (deviceId: string) => void
}
