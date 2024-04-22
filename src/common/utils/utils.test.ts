import { getMinutesBetweenDates } from './time'
import { parseStreamedData } from './parse-streamed-data'
import { isValidGuid } from './is-valid-guid'
import { isBrowserTabActive } from './is-browser-tab-active'
import { getValue } from './get-value'
import { getAppMode } from './get-app-mode'
import { getApiErrorMessage } from './get-api-error-message'
import {
    getResourceUpdateNotificationKey,
    canCreateResource,
    normalizeToFixedFloatValue,
    convertValueFromTo,
    convertValueToNs,
    hasCommandTimeoutError,
    convertAndNormalizeValueFromTo,
    findClosestUnit,
    checkIfValidUUID,
} from './devices'
import { knownInterfaces } from '../constants'

describe('utils/time | getMinutesBetweenDates', () => {
    it('returns the correct number of minutes between two dates', () => {
        const startDate = new Date('2022-01-01T00:00:00')
        const endDate = new Date('2022-01-01T01:00:00')
        const result = getMinutesBetweenDates(startDate, endDate)

        expect(result).toBe(60)
    })

    it('returns zero when both dates are the same', () => {
        const startDate = new Date('2022-01-01T00:00:00')
        const endDate = new Date('2022-01-01T00:00:00')
        const result = getMinutesBetweenDates(startDate, endDate)

        expect(result).toBe(0)
    })

    it('returns negative value when end date is before start date', () => {
        const startDate = new Date('2022-01-01T01:00:00')
        const endDate = new Date('2022-01-01T00:00:00')
        const result = getMinutesBetweenDates(startDate, endDate)

        expect(result).toBe(-60)
    })
})

describe('utils/parse-streamed-data | parseStreamedData', () => {
    it('returns an array of parsed objects from a streamed string', () => {
        const stream = '{"result": {"key1": "value1"}}\n\n{"result": {"key2": "value2"}}'
        const result = parseStreamedData(stream)

        expect(result).toEqual([{ key1: 'value1' }, { key2: 'value2' }])
    })

    it('returns an empty array when the stream is empty', () => {
        const stream = ''
        const result = parseStreamedData(stream)

        expect(result).toEqual([])
    })
})

describe('utils/is-valid-guid | isValidGuid', () => {
    it('returns true for a valid GUID', () => {
        const guid = '3f2504e0-4f89-11d3-9a0c-0305e82c3301'
        const result = isValidGuid(guid)

        expect(result).toBe(true)
    })

    it('returns false for a string that is not a valid GUID', () => {
        const guid = 'not a valid guid'
        const result = isValidGuid(guid)

        expect(result).toBe(false)
    })

    it('returns false for a string that is too long to be a valid GUID', () => {
        const guid = '12345678-1234-1234-1234-1234567890123456'
        const result = isValidGuid(guid)

        expect(result).toBe(false)
    })

    it('returns true for a valid GUID with braces', () => {
        const guid = '{3f2504e0-4f89-11d3-9a0c-0305e82c3301}'
        const result = isValidGuid(guid)

        expect(result).toBe(true)
    })

    it('returns false for a valid GUID with only one brace', () => {
        const guid = '{3f2504e0-4f89-11d3-9a0c-0305e82c3301'
        const result = isValidGuid(guid)

        expect(result).toBe(false)
    })
})

describe('utils/is-browser-tab-active | isBrowserTabActive', () => {
    let visibilityStateMock: jest.SpyInstance

    beforeEach(() => {
        visibilityStateMock = jest.spyOn(document, 'visibilityState', 'get')
    })

    afterEach(() => {
        visibilityStateMock.mockRestore()
    })

    it('returns true when the browser tab is active', () => {
        visibilityStateMock.mockReturnValue('visible')
        const result = isBrowserTabActive()

        expect(result).toBe(true)
    })

    it('returns false when the browser tab is not active', () => {
        visibilityStateMock.mockReturnValue('hidden')
        const result = isBrowserTabActive()

        expect(result).toBe(false)
    })
})

describe('utils/get-value | getValue', () => {
    it('returns the value when it is not null or undefined', () => {
        const value = 'test value'
        const result = getValue(value)

        expect(result).toBe(value)
    })

    it('returns the default placeholder when the value is null', () => {
        const value = null
        const result = getValue(value)

        expect(result).toBe('-')
    })

    it('returns the default placeholder when the value is undefined', () => {
        const value = undefined
        const result = getValue(value)

        expect(result).toBe('-')
    })

    it('returns the provided placeholder when the value is null', () => {
        const value = null
        const placeholder = 'N/A'
        const result = getValue(value, placeholder)

        expect(result).toBe(placeholder)
    })

    it('returns the provided placeholder when the value is undefined', () => {
        const value = undefined
        const placeholder = 'N/A'
        const result = getValue(value, placeholder)

        expect(result).toBe(placeholder)
    })
})

describe('utils/get-app-mode | getAppMode', () => {
    let originalEnv: NodeJS.ProcessEnv

    beforeEach(() => {
        originalEnv = process.env
    })

    afterEach(() => {
        process.env = originalEnv
    })

    it('returns the value of NODE_ENV when it is defined', () => {
        process.env = { ...originalEnv, NODE_ENV: 'development' }
        const result = getAppMode()

        expect(result).toBe('development')
    })

    it('returns "production" when NODE_ENV is not defined', () => {
        // @ts-ignore
        process.env = { ...originalEnv, NODE_ENV: undefined }
        const result = getAppMode()

        expect(result).toBe('production')
    })

    it('returns "production" when process.env is not accessible', () => {
        process.env = undefined as any
        const result = getAppMode()

        expect(result).toBe('production')
    })
})

describe('utils/get-api-error-message | getApiErrorMessage', () => {
    it('returns the error message from the response data err field', () => {
        const error = {
            response: {
                data: {
                    err: 'Error message from err field',
                    message: 'Error message from message field',
                },
            },
            message: 'Error message from error object',
        }
        const result = getApiErrorMessage(error)

        expect(result).toBe('Error message from err field')
    })

    it('returns the error message from the response data message field when err field is not present', () => {
        const error = {
            response: {
                data: {
                    message: 'Error message from message field',
                },
            },
            message: 'Error message from error object',
        }
        const result = getApiErrorMessage(error)

        expect(result).toBe('Error message from message field')
    })

    it('returns the error message from the error object when response data is not present', () => {
        const error = {
            message: 'Error message from error object',
        }
        const result = getApiErrorMessage(error)

        expect(result).toBe('Error message from error object')
    })

    it('returns undefined when no error message is present', () => {
        const error = {}
        const result = getApiErrorMessage(error)

        expect(result).toBeUndefined()
    })
})

describe('utils/devices | getResourceUpdateNotificationKey', () => {
    it('returns the correct resource update notification key', () => {
        const deviceId = 'device1'
        const href = '/a/b/c'
        const result = getResourceUpdateNotificationKey(deviceId, href)

        expect(result).toBe('devices.resource.update.device1./a/b/c')
    })
})

describe('utils/devices | canCreateResource', () => {
    it('returns true when the interfaces array includes OIC_IF_CREATE', () => {
        const interfaces = ['oic.if.a', knownInterfaces.OIC_IF_CREATE]
        const result = canCreateResource(interfaces)

        expect(result).toBe(true)
    })

    it('returns false when the interfaces array does not include OIC_IF_CREATE', () => {
        const interfaces = ['oic.if.baseline', 'oic.if.all']
        const result = canCreateResource(interfaces)

        expect(result).toBe(false)
    })
})

describe('utils/devices | normalizeToFixedFloatValue', () => {
    it('returns a normalized fixed float value', () => {
        const value = 123.456789
        const result = normalizeToFixedFloatValue(value)

        expect(result).toBe(123.45679)
    })
})

describe('utils/devices | convertValueFromTo', () => {
    it('converts a value from one unit to another', () => {
        const value = 1
        const unitFrom = 's'
        const unitTo = 'ms'
        const result = convertValueFromTo(value, unitFrom, unitTo)

        expect(result).toBe(1000)
    })
})

describe('utils/devices | convertValueToNs', () => {
    it('converts a value to nanoseconds', () => {
        const value = 1
        const unit = 's'
        const result = convertValueToNs(value, unit)

        expect(result).toBe(1000000000)
    })
})

describe('utils/devices | hasCommandTimeoutError', () => {
    it('returns true when the value in milliseconds is less than the minimal TTL value', () => {
        const value = 1
        const unit = 'ms'
        const result = hasCommandTimeoutError(value, unit)

        expect(result).toBe(true)
    })

    it('returns false when the value in milliseconds is greater than or equal to the minimal TTL value', () => {
        const value = 1000
        const unit = 'ms'
        const result = hasCommandTimeoutError(value, unit)

        expect(result).toBe(false)
    })
})

describe('utils/devices | convertAndNormalizeValueFromTo', () => {
    it('converts and normalizes a value from one unit to another', () => {
        const value = 1
        const unitFrom = 's'
        const unitTo = 'ms'
        const result = convertAndNormalizeValueFromTo(value, unitFrom, unitTo)

        expect(result).toBe(1000)
    })
})

describe('utils/devices | findClosestUnit', () => {
    it('finds the closest unit for a value in nanoseconds', () => {
        const value = 60000000000 // 60 seconds in nanoseconds
        const result = findClosestUnit(value)

        expect(result).toBe('min')
    })
})

describe('utils/devices | checkIfValidUUID', () => {
    it('returns true for a valid UUID', () => {
        const uuid = '3f2504e0-4f89-11d3-9a0c-0305e82c3301'
        const result = checkIfValidUUID(uuid)

        expect(result).toBe(true)
    })

    it('returns false for an invalid UUID', () => {
        const uuid = 'not a valid uuid'
        const result = checkIfValidUUID(uuid)

        expect(result).toBe(false)
    })
})
