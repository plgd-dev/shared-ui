// @ts-ignore
import * as converter from 'units-converter/dist/es/index'
import isFunction from 'lodash/isFunction'

import { getApiErrorMessage } from '../../../common/utils'
import Notification from '../../../components/Atomic/Notification/Toast'
import { compareIgnoreCase } from '../../../components/Atomic/Table/Utils'
import { errorCodes } from '../../../common/services'
import {
    knownInterfaces,
    knownResourceTypes,
    DEVICES_WS_KEY,
    DEVICES_RESOURCE_REGISTRATION_WS_KEY,
    DEVICES_RESOURCE_UPDATE_WS_KEY,
    commandTimeoutUnits,
    MINIMAL_TTL_VALUE_MS,
    devicesProvisionStatuses,
    devicesStatusSeverities,
    devicesOnboardingStatuses,
} from './constants'
import { ResourcesType } from './Devices.types'
import { getDevicesResourcesApi, updateDevicesResourceApi } from './rest'
import { messages as t } from './Devices.i18n'
import { getWellKnownConfig } from '../utils'
import notificationId from '../notificationId'

const time = converter.time
const { INFINITE, NS, MS, S, M, H } = commandTimeoutUnits

// Returns the extension for resources API for the selected interface
export const interfaceGetParam = (currentInterface: string | null, join = '?') =>
    currentInterface && currentInterface !== '' ? `${join}resourceInterface=${currentInterface}` : ''

// Return true if a resource contains the oic.if.create interface, meaning a new resource can be created from this resource
export const canCreateResource = (interfaces: string[]) => interfaces.includes(knownInterfaces.OIC_IF_CREATE)

export const canBeResourceEdited = (endpoints?: { endpoint: string }[]) =>
    endpoints && endpoints.some((e: { endpoint: string }) => e.endpoint.indexOf('coap://') > -1 || e.endpoint.indexOf('coap+tcp://') > -1)

// Returns true if a device has a resource oic.wk.con which holds the device name property
export const canChangeDeviceName = (links: ResourcesType[]) => links.findIndex((link) => link.resourceTypes.includes(knownResourceTypes.OIC_WK_CON)) !== -1

export const canBeOwned = (links: ResourcesType[]) => links.findIndex((link) => link.resourceTypes.includes(knownResourceTypes.OIC_R_DOMX)) !== -1

export const hasGeneratedResourcesForm = (links: ResourcesType[]) => links.findIndex((link) => link.resourceTypes.includes(knownResourceTypes.WOT_THING)) !== -1

export const canSetDPSEndpoint = (resources: ResourcesType[]) => !!getDPSEndpoint(resources)

export const getDPSEndpoint = (resources: ResourcesType[]) => {
    const index = resources.findIndex((resource) => resource.resourceTypes.includes(knownResourceTypes.X_PLGD_DPS_CONF))
    return index >= 0 ? resources[index] : null
}

// Returns the href for the resource which can do a device name change
export const getDeviceChangeResourceHref = (links: ResourcesType[]) =>
    links.find((link) => link.resourceTypes.includes(knownResourceTypes.OIC_WK_CON))?.href || ''

// Handle the errors occurred during resource update
export const handleUpdateResourceErrors = (error: any, { id: deviceId, href }: { id: string; href: string }, _: any) => {
    const errorMessage = getApiErrorMessage(error)

    if (errorMessage?.includes?.(errorCodes.DEADLINE_EXCEEDED)) {
        // Resource update went through, but it will be applied once the device comes online
        Notification.warning(
            {
                title: _(t.resourceUpdate),
                message: _(t.resourceWasUpdatedOffline),
            },
            {
                notificationId: notificationId.SU_CA_HANDLE_UPDATE_RESOURCE_ERRORS_DEADLINE_EXCEEDED,
            }
        )
    } else if (errorMessage?.includes?.(errorCodes.COMMAND_EXPIRED)) {
        // Command timeout
        Notification.warning(
            {
                title: _(t.resourceUpdate),
                message: `${_(t.update)} ${_(t.commandOnResourceExpired, {
                    deviceId,
                    href,
                })}`,
            },
            {
                notificationId: notificationId.SU_CA_HANDLE_UPDATE_RESOURCE_ERRORS_COMMAND_EXPIRED,
            }
        )
    } else if (errorMessage?.includes?.(errorCodes.INVALID_ARGUMENT)) {
        // JSON validation error
        Notification.error(
            {
                title: _(t.resourceUpdateError),
                message: _(t.invalidArgument),
            },
            { notificationId: notificationId.SU_CA_HANDLE_UPDATE_RESOURCE_ERRORS_INVALID_ARGUMENT }
        )
    } else {
        Notification.error(
            {
                title: _(t.resourceUpdateError),
                message: errorMessage,
            },
            {
                notificationId: notificationId.SU_CA_HANDLE_UPDATE_RESOURCE_ERRORS,
            }
        )
    }
}

// Handle the errors occurred during resource create
export const handleCreateResourceErrors = (error: any, { id: deviceId, href }: { id: string; href: string }, _: any) => {
    const errorMessage = getApiErrorMessage(error)

    if (errorMessage?.includes?.(errorCodes.DEADLINE_EXCEEDED)) {
        // Resource create went through, but it will be applied once the device comes online
        Notification.warning(
            {
                title: _(t.resourceCreate),
                message: _(t.resourceWasCreatedOffline),
            },
            {
                notificationId: notificationId.SU_CA_HANDLE_CREATE_RESOURCE_ERRORS_DEADLINE_EXCEEDED,
            }
        )
    } else if (errorMessage?.includes?.(errorCodes.COMMAND_EXPIRED)) {
        // Command timeout
        Notification.warning(
            {
                title: _(t.resourceCreate),
                message: `${_(t.create)} ${_(t.commandOnResourceExpired, {
                    deviceId,
                    href,
                })}`,
            },
            {
                notificationId: notificationId.SU_CA_HANDLE_CREATE_RESOURCE_ERRORS_COMMAND_EXPIRED,
            }
        )
    } else if (errorMessage?.includes?.(errorCodes.INVALID_ARGUMENT)) {
        // JSON validation error
        Notification.error(
            {
                title: _(t.resourceCreateError),
                message: _(t.invalidArgument),
            },
            {
                notificationId: notificationId.SU_CA_HANDLE_CREATE_RESOURCE_ERRORS_INVALID_ARGUMENT,
            }
        )
    } else {
        Notification.error(
            {
                title: _(t.resourceCreateError),
                message: errorMessage,
            },
            {
                notificationId: notificationId.SU_CA_HANDLE_CREATE_RESOURCE_ERRORS,
            }
        )
    }
}

// Handle the errors occurred shadowSynchronization set
export const handleShadowSynchronizationErrors = (error: any, _: any) => {
    const errorMessage = getApiErrorMessage(error)

    if (errorMessage?.includes?.(errorCodes.DEADLINE_EXCEEDED)) {
        // Shadow synchronization set went through, but it will be applied once the device comes online
        Notification.warning(
            {
                title: _(t.shadowSynchronization),
                message: _(t.shadowSynchronizationWasSetOffline),
            },
            {
                notificationId: notificationId.SU_CA_HANDLE_SHADOW_SYNCHRONIZATION_ERRORS_DEADLINE_EXCEEDED,
            }
        )
    } else {
        Notification.error(
            {
                title: _(t.shadowSynchronizationError),
                message: errorMessage,
            },
            {
                notificationId: notificationId.SU_CA_HANDLE_SHADOW_SYNCHRONIZATION_ERRORS,
            }
        )
    }
}

// Handle the errors occurred during resource fetch
export const handleFetchResourceErrors = (error: any, _: any) =>
    Notification.error(
        {
            title: _(t.resourceRetrieveError),
            message: getApiErrorMessage(error),
        },
        {
            notificationId: notificationId.SU_CA_HANDLE_FETCH_RESOURCE_ERRORS,
        }
    )

// Handle the errors occurred during resource fetch
export const handleDeleteResourceErrors = (error: any, { id: deviceId, href }: { id: string; href: string }, _: any) => {
    const errorMessage = getApiErrorMessage(error)

    if (errorMessage?.includes?.(errorCodes.DEADLINE_EXCEEDED)) {
        // Resource update went through, but it will be applied once the device comes online
        Notification.warning(
            {
                title: _(t.resourceDelete),
                message: _(t.resourceWasDeletedOffline),
            },
            {
                notificationId: notificationId.SU_CA_HANDLE_DELETE_RESOURCE_ERRORS_DEADLINE_EXCEEDED,
            }
        )
    } else if (errorMessage?.includes?.(errorCodes.COMMAND_EXPIRED)) {
        // Command timeout
        Notification.warning(
            {
                title: _(t.resourceDelete),
                message: `${_(t.delete)} ${_(t.commandOnResourceExpired, {
                    deviceId,
                    href,
                })}`,
            },
            {
                notificationId: notificationId.SU_CA_HANDLE_DELETE_RESOURCE_ERRORS_COMMAND_EXPIRED,
            }
        )
    } else {
        Notification.error(
            {
                title: _(t.resourceDeleteError),
                message: errorMessage,
            },
            {
                notificationId: notificationId.SU_CA_HANDLE_DELETE_RESOURCE_ERRORS,
            }
        )
    }
}

// Handle the errors occurred during devices delete
export const handleDeleteDevicesErrors = (error: any, _: any, singular = false) => {
    const errorMessage = getApiErrorMessage(error)

    Notification.error(
        {
            title: !singular ? _(t.devicesDeletionError) : _(t.deviceDeletionError),
            message: errorMessage,
        },
        {
            notificationId: notificationId.SU_CA_HANDLE_DELETE_DEVICES_ERRORS,
        }
    )
}

// Handle the errors occurred during devices delete
export const handleOwnDevicesErrors = (error: any, _: any) => {
    const errorMessage = getApiErrorMessage(error)

    Notification.error(
        {
            title: _(t.deviceOwnError),
            message: errorMessage,
        },
        {
            notificationId: notificationId.SU_CA_HANDLE_OWN_DEVICES_ERRORS,
        }
    )
}

// Async function for waiting
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/** Tree Structure utilities **/
// Shout out to @oskarbauer for creating this script :)

// A recursive function which "densify" the subRows
const deDensisfy = (objectToDeDensify: any) => {
    const { href, ...rest } = objectToDeDensify

    const keys = Object.keys(rest)
    return keys
        .map((thisKey) => {
            const value = objectToDeDensify[thisKey]
            if (value.subRows) {
                value.subRows = deDensisfy(value.subRows)
            }
            return value
        })
        .sort((a, b) => {
            return compareIgnoreCase(a.href, b.href)
        })
}

// A recursive function for creating a tree structure from the href attribute
const addItem = (objToAddTo: any, item: any, position: any) => {
    const { href, ...rest } = item
    const parts = href.split('/')
    const isLast = position === parts.length - 1
    position = position + 1
    const key = `/${parts.slice(1, position).join('/')}/`

    if (isLast) {
        objToAddTo[key] = { ...objToAddTo[key], ...rest, href: key }
    } else {
        objToAddTo[key] = {
            ...objToAddTo[key],
            ...(key === href ? rest : {}),
            href: key,
            subRows: { ...(objToAddTo[key]?.subRows || {}) }, // subRows is the next level in the tree structure
        }
        // Go deeper with recursion
        addItem(objToAddTo[key].subRows, item, position)
    }
}

export const createNestedResourceData = (data: any) => {
    // Always construct the objects from scratch
    let firstSwipe = {}
    if (data) {
        data.forEach((item: any) => {
            addItem(firstSwipe, item, 1)
        })
    }
    // Then take the object structure and output the tree scructure
    const output = deDensisfy(firstSwipe)

    // Finally sort the output by href
    return output.sort((a, b) => compareIgnoreCase(a.href, b.href))
}
/** End **/

// Returns the last section of a resource href, no matter if it ends with a trailing slash or not
export const getLastPartOfAResourceHref = (href: string) => {
    if (!href) {
        return ''
    }
    const values = href.split('/').filter((_t) => _t)
    return values[values.length - 1]
}

// Converts a value to ns (if the unit is Infinite, it defaults to ns)
export const convertValueToNs = (value: number, unit: string) =>
    +time(value)
        .from(unit === INFINITE ? NS : unit)
        .to(NS)
        .value.toFixed(0)

// Converts a value from a given unit to a provided unit (if the unit is Infinite, it defaults to ns)
export const convertValueFromTo = (value: number, unitFrom: string, unitTo: string) =>
    time(value)
        .from(unitFrom === INFINITE ? NS : unitFrom)
        .to(unitTo === INFINITE ? NS : unitTo).value

// Normalizes a given value to a fixed float number
export const normalizeToFixedFloatValue = (value: any) => +value.toFixed(5)

// Return a unit for the value which is the "nicest" after a conversion from ns
export const findClosestUnit = (value: number) => {
    const fromValue = time(value).from(NS)

    if (fromValue.to(MS).value < 1000) {
        return MS
    } else if (fromValue.to(S).value < 60) {
        return S
    } else if (fromValue.to(M).value < 60) {
        return M
    } else {
        return H
    }
}

// Return true if there is a command timeout error based on the provided value and unit
export const hasCommandTimeoutError = (value: number, unit: string) => {
    const baseUnit = unit === INFINITE ? NS : unit

    const valueMs = time(value).from(baseUnit).to(MS).value
    return valueMs < MINIMAL_TTL_VALUE_MS && value !== 0
}

export const convertAndNormalizeValueFromTo = (value: number, unitFrom: string, unitTo: string) =>
    normalizeToFixedFloatValue(convertValueFromTo(value, unitFrom, unitTo))

// Redux and event key for the notification state of a single device
export const getDeviceNotificationKey = (deviceId: string) => `${DEVICES_WS_KEY}.${deviceId}`

// Redux and event key for the notification state for a registration or unregistration of a resource
export const getResourceRegistrationNotificationKey = (deviceId: string) => `${DEVICES_RESOURCE_REGISTRATION_WS_KEY}.${deviceId}`

// Redux and event key for the notification state for an update of a single resource
export const getResourceUpdateNotificationKey = (deviceId: string, href: string) => `${DEVICES_RESOURCE_UPDATE_WS_KEY}.${deviceId}.${href}`

export const isValidEndpoint = (endpoint: string) => !endpoint.match(/[^a-zA-Z0-9\-+:./]/)

// Updates the resource through rest API
export const updateResourceMethod = async (
    { deviceId, href, currentInterface = '' }: { deviceId: string; href: string; currentInterface: string },
    resourceDataUpdate: any,
    successCallback: () => void,
    errorCallback: (error: any) => void
) => {
    try {
        await updateDevicesResourceApi({ deviceId, href, currentInterface }, resourceDataUpdate)

        if (isFunction(successCallback)) {
            successCallback()
        }
    } catch (error) {
        if (error) {
            isFunction(errorCallback) && errorCallback(error)
        }
    }
}

export const getColorByProvisionStatus = (provisionStatus: string) => {
    switch (provisionStatus) {
        case devicesProvisionStatuses.INITIALIZED:
        case devicesProvisionStatuses.PROVISIONING_CREDENTIALS:
        case devicesProvisionStatuses.PROVISIONED_CREDENTIALS:
        case devicesProvisionStatuses.PROVISIONING_ACLS:
        case devicesProvisionStatuses.PROVISIONED_ACLS:
        case devicesProvisionStatuses.PROVISIONING_CLOUD:
        case devicesProvisionStatuses.PROVISIONED_CLOUD:
        case devicesProvisionStatuses.PROVISIONED:
            return devicesStatusSeverities.SUCCESS
        case devicesProvisionStatuses.TRANSIENT_FAILURE:
            return devicesStatusSeverities.WARNING
        case devicesProvisionStatuses.FAILURE:
            return devicesStatusSeverities.ERROR
        case devicesProvisionStatuses.UNINITIALIZED:
        default:
            return devicesStatusSeverities.GREY
    }
}

export const getOnboardingEndpoint = (resources: ResourcesType[]) => {
    const index = resources.findIndex((resource) => resource.resourceTypes.includes(knownResourceTypes.OIC_R_COAP_CLOUD_CONF_RES_URI))
    return index >= 0 ? resources[index] : null
}

export const hasOnboardingFeature = () => {
    const wellKnowConfig = getWellKnownConfig()

    if (!wellKnowConfig.remoteProvisioning) {
        return false
    }

    const { authority, coapGateway, deviceOauthClient, id } = wellKnowConfig.remoteProvisioning

    return !!(authority && coapGateway && deviceOauthClient?.clientId && deviceOauthClient?.providerName && deviceOauthClient?.scopes && id)
}

export const getColorByOnboardingStatus = (provisionStatus: string) => {
    switch (provisionStatus) {
        case devicesOnboardingStatuses.REGISTERED:
            return devicesStatusSeverities.SUCCESS
        case devicesOnboardingStatuses.FAILED:
            return devicesStatusSeverities.ERROR
        case devicesOnboardingStatuses.NA:
        case devicesOnboardingStatuses.UNINITIALIZED:
            return devicesStatusSeverities.GREY
        default:
            return devicesStatusSeverities.WARNING
    }
}

export type loadResourceDataParams = {
    href: string
    deviceId: string
    successCallback?: () => void
    errorCallback?: () => void
}
export const loadResourceData = async ({ href, deviceId, successCallback, errorCallback }: loadResourceDataParams) => {
    try {
        const { data: deviceData } = await getDevicesResourcesApi({
            deviceId,
            href,
        })

        isFunction(successCallback) && successCallback()

        return deviceData.data
    } catch (error) {
        error && isFunction(errorCallback) && errorCallback()
    }
}
