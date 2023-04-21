import { useState, useMemo, FC } from 'react'
import isFinite from 'lodash/isFinite'
import classNames from 'classnames'

import Select from '../../new/Select'
import Label from '../../new/Label'
import TextField from '../../new/TextField'
import { commandTimeoutUnits } from '../../../common/constants'
import { convertValueToNs, hasCommandTimeoutError, convertAndNormalizeValueFromTo, normalizeToFixedFloatValue, findClosestUnit } from '../../../common/utils'
import { defaultProps, Props } from './DeviceCommandTimeoutControl.types'

const { INFINITE, NS } = commandTimeoutUnits

const DeviceCommandTimeoutControl: FC<Props> = (props) => {
    const { defaultValue, defaultTtlValue, onChange, disabled, ttlHasError, onTtlHasError, isDelete, i18n } = { ...defaultProps, ...props }
    const closestUnit = useMemo(() => findClosestUnit(defaultValue), [defaultValue])
    const closestDefaultTtl = useMemo(() => {
        const unit = findClosestUnit(defaultTtlValue)
        return {
            unit,
            value: convertAndNormalizeValueFromTo(defaultTtlValue, NS, unit),
        }
    }, [defaultTtlValue])

    const [unit, setUnit] = useState(defaultValue === 0 ? INFINITE : closestUnit)
    const [inputValue, setInputValue] = useState(convertAndNormalizeValueFromTo(defaultValue, NS, closestUnit))

    const units = Object.values(commandTimeoutUnits)
        .filter((_unit) => _unit !== NS)
        .map((_unit) => ({
            value: _unit,
            label: _unit === INFINITE ? i18n.default : _unit,
        }))

    const handleOnUnitChange = ({ value: unitValue }: { value: string }) => {
        const newInputValue = unitValue === INFINITE ? 0 : convertAndNormalizeValueFromTo(inputValue, unit, unitValue)
        setInputValue(newInputValue)
        setUnit(unitValue)
        onChange(convertValueToNs(newInputValue, unitValue))

        if (unitValue === INFINITE) {
            onTtlHasError(false)
        }
    }

    const handleOnValueChange = (event: any) => {
        const onlyZerosRegex = /^0+$/
        const value = event.target.value.trim()
        const floatValue = parseFloat(value)
        const containsOneOrNoDot = (value.match(/./g) || []).length <= 1
        const isValidNumber = isFinite(floatValue) || containsOneOrNoDot
        const finiteFloatValue = isValidNumber ? value : 0
        const newInputValue = finiteFloatValue?.match?.(onlyZerosRegex) ? 0 : finiteFloatValue

        if (value === '' || containsOneOrNoDot || newInputValue >= 0) {
            setInputValue(newInputValue)
        }

        onTtlHasError(false)
    }

    const handleOnValueBlur = (event: any) => {
        const value = event.target.value.trim()
        const floatValue = parseFloat(value)

        if (floatValue === 0 || value === '') {
            onChange(0)
        } else if (isFinite(floatValue) && floatValue > 0) {
            const newValue = normalizeToFixedFloatValue(floatValue)
            setInputValue(newValue)
            onChange(convertValueToNs(newValue, unit))

            if (hasCommandTimeoutError(newValue, unit)) {
                onTtlHasError(true)
            }
        }
    }

    return (
        <Label
            inline
            className={classNames('command-timeout-label', {
                'delete-modal': isDelete,
            })}
            onClick={(e) => e.preventDefault()}
            title={i18n.commandTimeout}
        >
            <div className='ttl-label-content d-flex align-items-center justify-content-end'>
                {unit !== INFINITE ? (
                    <TextField
                        className={classNames('ttl-value-input', { error: ttlHasError })}
                        disabled={disabled || unit === INFINITE}
                        onBlur={handleOnValueBlur}
                        onChange={handleOnValueChange}
                        placeholder={`${i18n.default} (${closestDefaultTtl.value}${closestDefaultTtl.unit})`}
                        value={inputValue}
                    />
                ) : (
                    <span className='m-r-10'>{`${closestDefaultTtl.value}${closestDefaultTtl.unit}`}</span>
                )}

                <Select
                    className='ttl-unit-dropdown'
                    isDisabled={disabled}
                    onChange={handleOnUnitChange}
                    options={units}
                    styles={{
                        control: ({ ...css }) => ({
                            ...css,
                            width: '100px',
                            minWidth: '100px !important',
                            borderTopLeftRadius: '0 !important',
                            borderBottomLeftRadius: '0 !important',
                        }),
                    }}
                    value={units.filter((option) => option.value === unit)}
                />
            </div>
            {ttlHasError && <div className='error-message'>{i18n.minimalValueIs}</div>}
        </Label>
    )
}

DeviceCommandTimeoutControl.displayName = 'DeviceCommandTimeoutControl'
DeviceCommandTimeoutControl.defaultProps = defaultProps

export default DeviceCommandTimeoutControl
