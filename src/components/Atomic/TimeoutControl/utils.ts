import { commandTimeoutUnits, MINIMAL_TTL_VALUE_MS } from './constants'
// const time = require('units-converter/dist/cjs/units/time').default
// @ts-ignore
import { time } from 'units-converter/dist/es'

const { INFINITE, NS, MS, S, M, H } = commandTimeoutUnits

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

// Normalizes a given value to a fixed float number
export const normalizeToFixedFloatValue = (value: number) => +value.toFixed(5)

// Converts a value from a given unit to a provided unit (if the unit is Infinite, it defaults to ns)
export const convertValueFromTo = (value: number | string, unitFrom: string, unitTo: string) =>
    time(value)
        .from(unitFrom === INFINITE ? NS : unitFrom)
        .to(unitTo === INFINITE ? NS : unitTo).value

export const convertAndNormalizeValueFromTo = (value: number | string, unitFrom: string, unitTo: string) =>
    normalizeToFixedFloatValue(convertValueFromTo(value, unitFrom, unitTo))

// Converts a value to ns (if the unit is Infinite, it defaults to ns)
export const convertValueToNs = (value: number, unit: string) =>
    +time(value)
        .from(unit === INFINITE ? NS : unit)
        .to(NS)
        .value.toFixed(0)

// Return true if there is a command timeout error based on the provided value and unit
export const hasCommandTimeoutError = (value: number, unit: string) => {
    const baseUnit = unit === INFINITE ? NS : unit

    const valueMs = time(value).from(baseUnit).to(MS).value
    return valueMs < MINIMAL_TTL_VALUE_MS && value !== 0
}
