// @ts-ignore
import * as converter from 'units-converter/dist/es/index'
import { DEVICES_RESOURCE_UPDATE_WS_KEY, knownInterfaces, commandTimeoutUnits, MINIMAL_TTL_VALUE_MS } from '../constants'

const time = converter.time

const { INFINITE, NS, MS, S, M, H } = commandTimeoutUnits

export const getResourceUpdateNotificationKey = (deviceId: string, href: string) => `${DEVICES_RESOURCE_UPDATE_WS_KEY}.${deviceId}.${href}`

export const canCreateResource = (interfaces: string[]) => interfaces.includes(knownInterfaces.OIC_IF_CREATE)

export const normalizeToFixedFloatValue = (value: any) => +value.toFixed(5)

export const convertValueFromTo = (value: number, unitFrom: string, unitTo: string) =>
    time(value)
        .from(unitFrom === INFINITE ? NS : unitFrom)
        .to(unitTo === INFINITE ? NS : unitTo).value

export const convertValueToNs = (value: number, unit: string) =>
    +time(value)
        .from(unit === INFINITE ? NS : unit)
        .to(NS)
        .value.toFixed(0)

export const hasCommandTimeoutError = (value: number, unit: string) => {
    const baseUnit = unit === INFINITE ? NS : unit

    const valueMs = time(value).from(baseUnit).to(MS).value
    return valueMs < MINIMAL_TTL_VALUE_MS && value !== 0
}

export const convertAndNormalizeValueFromTo = (value: number, unitFrom: string, unitTo: string) =>
    normalizeToFixedFloatValue(convertValueFromTo(value, unitFrom, unitTo))

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
