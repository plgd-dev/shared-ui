import { NotificationCenterItem } from 'react-toastify/addons/use-notification-center'

export type NotificationCenterItemType = Partial<NotificationCenterItem> & {
    text: string
}

export type Props = {
    i18n: {
        notifications: string
        noNotifications: string
        markAllAsRead: string
    }
}

export const defaultProps: Partial<Props> = {
    i18n: {
        notifications: 'Notifications',
        noNotifications: 'No notifications',
        markAllAsRead: 'mark all as read',
    },
}
