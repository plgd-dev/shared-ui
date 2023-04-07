import { AnyAction } from 'redux'

export type ForwardProps = {
    deviceResourceUpdateListener: ({
        deviceId,
        href,
        deviceName,
    }: {
        deviceId: string
        href: string
        deviceName: string
    }) => ({ resourceChanged }: { resourceChanged: boolean }) => void
    isNotificationActive: (key: string) => (state: any) => boolean
    toggleActiveNotification: (key: string) => AnyAction
}

export type NotificationI18n = {
    on: string
    off: string
    notifications: string
}

export type Props = {
    deviceId: string
    deviceName?: string
    href: string
    i18n: NotificationI18n
    isUnregistered?: boolean
} & ForwardProps
