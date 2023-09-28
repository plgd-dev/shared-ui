import { ChangeEvent, FC, useMemo, useState } from 'react'
import isFunction from 'lodash/isFunction'
import startCase from 'lodash/startCase'

import { Props } from './TimeoutControl.types'
import * as styles from './TimeoutControl.styles'
import FormGroup from '../FormGroup'
import FormLabel from '../FormLabel'
import FormInput from '../FormInput'
import FormSelect from '../FormSelect'
import { commandTimeoutUnits } from './constants'
import { findClosestUnit, convertAndNormalizeValueFromTo, convertValueToNs, normalizeToFixedFloatValue, hasCommandTimeoutError } from './utils'
import { inputSizes } from '../FormInput/constants'

const { INFINITE, NS } = commandTimeoutUnits

const TimeoutControl: FC<Props> = (props) => {
    const { defaultValue, defaultTtlValue, onChange, disabled, ttlHasError, onTtlHasError, i18n, watchUnitChange } = props
    const closestUnit = useMemo(() => findClosestUnit(defaultValue), [defaultValue])
    const closestDefaultTtl = useMemo(() => {
        const unit = findClosestUnit(defaultTtlValue)
        return {
            unit,
            value: convertAndNormalizeValueFromTo(defaultTtlValue, NS, unit),
        }
    }, [defaultTtlValue])

    const [isDefault, setIsDefault] = useState(false)
    const [unit, setUnit] = useState(defaultValue === 0 ? INFINITE : closestUnit)
    const [inputValue, setInputValue] = useState<number | string>(convertAndNormalizeValueFromTo(defaultValue, NS, closestUnit))

    const units = Object.values(commandTimeoutUnits)
        .filter((_unit) => _unit !== NS)
        .map((_unit) => ({
            value: _unit,
            label: _unit === INFINITE ? i18n.default : _unit,
        }))

    const handleOnUnitChange = ({ value: unitValue }: { value: string }) => {
        if (unitValue === INFINITE) {
            !isDefault && setIsDefault(true)
            watchUnitChange && setInputValue(closestDefaultTtl.value)
            setUnit(closestDefaultTtl.unit)

            watchUnitChange && onChange(convertValueToNs(closestDefaultTtl.value, closestDefaultTtl.unit))
            watchUnitChange && isFunction(onTtlHasError) && onTtlHasError(false)
        } else {
            isDefault && setIsDefault(false)

            const newInputValue = watchUnitChange ? convertAndNormalizeValueFromTo(inputValue, unit, unitValue) : (inputValue as number)
            watchUnitChange && setInputValue(newInputValue)

            setUnit(unitValue)
            onChange(convertValueToNs(newInputValue, unitValue))
        }
    }

    const handleOnValueChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const onlyZerosRegex = /^0+$/
        const value = event.target.value.trim()
        const floatValue = parseFloat(value)
        const containsOneOrNoDot = (value.match(/./g) || []).length <= 1
        const isValidNumber = isFinite(floatValue) || containsOneOrNoDot
        const finiteFloatValue = isValidNumber ? value : 0
        // @ts-ignore
        const newInputValue = finiteFloatValue?.match?.(onlyZerosRegex) ? 0 : finiteFloatValue

        if (value === '' || containsOneOrNoDot || newInputValue >= 0) {
            setInputValue(newInputValue)
        }

        isFunction(onTtlHasError) && onTtlHasError(false)
    }

    const handleOnValueBlur = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = event.target.value.trim()
        const floatValue = parseFloat(value)

        if (floatValue === 0 || value === '') {
            onChange(0)
        } else if (isFinite(floatValue) && floatValue > 0) {
            const newValue = normalizeToFixedFloatValue(floatValue)
            setInputValue(newValue)
            onChange(convertValueToNs(newValue, unit))

            if (hasCommandTimeoutError(newValue, unit) && isFunction(onTtlHasError)) {
                onTtlHasError(true)
            }
        }
    }

    return (
        <div css={styles.timeoutControl}>
            <FormGroup error={ttlHasError ? '' : undefined} id='Command Timeout' inline={true}>
                <FormLabel text={i18n.duration} />
                <FormInput
                    css={styles.input}
                    disabled={disabled || isDefault}
                    onBlur={handleOnValueBlur}
                    onChange={handleOnValueChange}
                    placeholder={i18n.placeholder}
                    size={inputSizes.NORMAL}
                    value={!isDefault ? inputValue : `${closestDefaultTtl.value}${closestDefaultTtl.unit}`}
                />
            </FormGroup>
            <div css={styles.right}>
                <FormGroup id='Unit' inline={true}>
                    <FormLabel text={startCase(i18n.unit)} />
                    <FormSelect
                        css={styles.input}
                        defaultValue={units.filter((option) => option.value === unit)}
                        disabled={disabled}
                        name='unit'
                        onChange={handleOnUnitChange}
                        options={units}
                    />
                </FormGroup>
            </div>
        </div>
    )
}

TimeoutControl.displayName = 'TimeoutControl'

export default TimeoutControl
