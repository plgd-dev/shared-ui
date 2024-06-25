import { ChangeEvent, FC, useContext, useMemo, useState } from 'react'
import isFunction from 'lodash/isFunction'
import startCase from 'lodash/startCase'
import debounce from 'lodash/debounce'

import { defaultProps, i18nType, Props } from './TimeoutControl.types'
import * as styles from './TimeoutControl.styles'
import FormGroup from '../FormGroup'
import FormLabel from '../FormLabel'
import FormInput, { inputSizes } from '../FormInput'
import FormSelect, { selectSizes } from '../FormSelect'
import { commandTimeoutUnits } from './constants'
import { findClosestUnit, convertAndNormalizeValueFromTo, convertValueToNs, normalizeToFixedFloatValue, hasCommandTimeoutError } from './utils'
import { FormContext } from '../../../common/context/FormContext'

const { INFINITE, NS } = commandTimeoutUnits

export const TimeoutControlCore: FC<Props> = (props) => {
    const {
        align,
        compactFormComponentsView,
        defaultValue,
        defaultTtlValue,
        disableDefaultValue,
        error,
        errorTooltip,
        onChange,
        disabled,
        ttlHasError,
        onTtlHasError,
        i18n,
        inlineStyle,
        required,
        rightStyle,
        size,
        smallMode,
        unitClassName,
        unitMenuZIndex,
        unitMenuPortalTarget,
        watchUnitChange,
    } = {
        ...defaultProps,
        ...props,
    }
    const closestUnit = useMemo(() => findClosestUnit(defaultValue), [defaultValue])
    const closestDefaultTtl = useMemo(() => {
        const unit = findClosestUnit(defaultTtlValue)
        return {
            unit,
            value: convertAndNormalizeValueFromTo(defaultTtlValue, NS, unit),
        }
    }, [defaultTtlValue])

    const [isDefault, setIsDefault] = useState(defaultValue === 0)
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
            watchUnitChange && isFunction(props.onBlur) && props.onBlur(convertValueToNs(closestDefaultTtl.value, closestDefaultTtl.unit))
        } else {
            isDefault && setIsDefault(false)

            const newInputValue = watchUnitChange ? convertAndNormalizeValueFromTo(inputValue, unit, unitValue) : (inputValue as number)
            watchUnitChange && setInputValue(newInputValue)

            setUnit(unitValue)
            onChange(convertValueToNs(newInputValue, unitValue))
            watchUnitChange && isFunction(props.onBlur) && props.onBlur(convertValueToNs(newInputValue, unitValue))
        }
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
            // isFunction(props.onBlur) && props.onBlur(convertValueToNs(newValue, unit))

            if (hasCommandTimeoutError(newValue, unit) && isFunction(onTtlHasError)) {
                onTtlHasError(true)
            }
        }
    }

    const debounceCallback = debounce(handleOnValueBlur, 300)

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
        debounceCallback(event)
    }

    const onBlur = () => {
        isFunction(props.onBlur) && props.onBlur(convertValueToNs(typeof inputValue === 'string' ? parseInt(inputValue, 10) : inputValue, unit))
    }

    const getError = () => {
        if (ttlHasError) {
            return ''
        }
        if (error) {
            return error
        }

        return undefined
    }

    return (
        <div css={styles.timeoutControl}>
            <div css={styles.left}>
                <FormGroup error={getError()} errorTooltip={errorTooltip} fullSize={!!align} id='Command Timeout' inline={!align} marginBottom={!align}>
                    {i18n.duration ? <FormLabel required={required} text={i18n.duration} /> : undefined}
                    <FormInput
                        align={align}
                        compactFormComponentsView={compactFormComponentsView}
                        css={[styles.input, smallMode && styles.inputSmall]}
                        disabled={disabled || (isDefault && disableDefaultValue)}
                        inlineStyle={inlineStyle}
                        onBlur={
                            watchUnitChange
                                ? (e) => {
                                      handleOnValueBlur(e)
                                      onBlur()
                                  }
                                : onBlur
                        }
                        onChange={handleOnValueChange}
                        placeholder={i18n.placeholder}
                        size={size || inputSizes.NORMAL}
                        value={isDefault && !!disableDefaultValue ? `${closestDefaultTtl.value}${closestDefaultTtl.unit}` : inputValue}
                    />
                </FormGroup>
            </div>
            <div css={[styles.right, smallMode && styles.rightSmall]} style={rightStyle}>
                <FormGroup id='Unit' inline={!align} marginBottom={!align}>
                    {i18n.unit && <FormLabel text={startCase(i18n.unit)} />}
                    <FormSelect
                        align={align}
                        autoWidth={align === 'right'}
                        className={unitClassName}
                        css={[smallMode && styles.selectSmall]}
                        defaultValue={units.filter((option) => option.value === unit)}
                        disabled={disabled}
                        inlineStyle={inlineStyle}
                        menuPortalTarget={unitMenuPortalTarget}
                        menuZIndex={unitMenuZIndex}
                        name='unit'
                        onChange={(e) => {
                            handleOnUnitChange(e)
                            // onBlur()
                        }}
                        options={units}
                        size={size === inputSizes.SMALL ? selectSizes.SMALL : undefined}
                    />
                </FormGroup>
            </div>
        </div>
    )
}

// make i18n optional
const TimeoutControl: FC<Omit<Props, 'i18n'> & { i18n?: i18nType }> = (props) => {
    const { commonTimeoutControlProps, compactFormComponentsView } = useContext(FormContext)

    return (
        <TimeoutControlCore
            {...props}
            {...(compactFormComponentsView && props.compactFormComponentsView !== false
                ? commonTimeoutControlProps
                : {
                      i18n: {
                          default: props.i18n?.default || '',
                          duration: props.i18n?.duration || '',
                          unit: props.i18n?.unit || '',
                          placeholder: props.i18n?.placeholder || '',
                      },
                  })}
        />
    )
}

TimeoutControl.displayName = 'TimeoutControl'

export default TimeoutControl
