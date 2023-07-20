// @ts-ignore
import * as converter from 'units-converter/dist/es/index'
import { DEVICES_RESOURCE_UPDATE_WS_KEY, knownInterfaces, commandTimeoutUnits, MINIMAL_TTL_VALUE_MS } from '../constants'
import { compareIgnoreCase } from '../../components/Atomic/Table/Utils'

const time = converter.time

const { INFINITE, NS, MS, S, M, H } = commandTimeoutUnits

export const getResourceUpdateNotificationKey = (deviceId: string, href: string) => `${DEVICES_RESOURCE_UPDATE_WS_KEY}.${deviceId}.${href}`

export const canCreateResource = (interfaces: string[]) => interfaces?.includes(knownInterfaces.OIC_IF_CREATE)

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

const addItem = (objToAddTo: any, item: any, position: number) => {
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
    return output.sort((a, b) => {
        return compareIgnoreCase(a.href, b.href)
    })
}
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

export const checkIfValidUUID = (str: string) => {
    // Regular expression to check if string is a valid UUID
    const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi

    return regexExp.test(str)
}
