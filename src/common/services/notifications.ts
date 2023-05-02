export type NotificationType = {
    deviceId: string
    type: string
}

let data: NotificationType[] = []

export const notifications = {
    getNotifications: (deviceId?: string) => (deviceId ? data.filter((notification) => notification.deviceId === deviceId) : data),
    addNotification: (notification: NotificationType) => {
        data = [...data, notification]
    },
    getLastNotification: (deviceId?: string): NotificationType | undefined => {
        if (deviceId) {
            const deviceData = data.filter((notification) => notification.deviceId === deviceId)
            return deviceData ? deviceData[deviceData.length - 1] : undefined
        } else {
            return data[data.length - 1]
        }
    },
}
