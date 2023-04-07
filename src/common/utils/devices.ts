import { DEVICES_RESOURCE_UPDATE_WS_KEY } from '../constants'

export const getResourceUpdateNotificationKey = (deviceId: string, href: string) => `${DEVICES_RESOURCE_UPDATE_WS_KEY}.${deviceId}.${href}`
