import { DEVICES_RESOURCE_UPDATE_WS_KEY, knownInterfaces } from '../constants'

export const getResourceUpdateNotificationKey = (deviceId: string, href: string) => `${DEVICES_RESOURCE_UPDATE_WS_KEY}.${deviceId}.${href}`

export const canCreateResource = (interfaces: string[]) => interfaces.includes(knownInterfaces.OIC_IF_CREATE)
