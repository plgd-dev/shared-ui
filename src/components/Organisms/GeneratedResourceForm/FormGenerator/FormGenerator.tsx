import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import get from 'lodash/get'
import isObject from 'lodash/isObject'
import isFunction from 'lodash/isFunction'

import { PropertiesType, Property } from '../GeneratedResourceForm.types'
import FormInput from '../../../Atomic/FormInput'
import IconNumbers from '../../../Atomic/Icon/components/IconNumbers'
import Switch from '../../../Atomic/Switch'
import Spacer from '../../../Atomic/Spacer'
import Headline from '../../../Atomic/Headline'
import { ModalStrippedLine } from '../../../Atomic/Modal'
import FormGroup from '../../../Atomic/FormGroup'
import { Props } from './FormGenerator.types'
import { knownResourceHref } from '../constants'

export const sortProperties = (properties: PropertiesType) =>
    properties
        ? Object.keys(properties).map((href: string) => {
              // @ts-ignore
              const property = properties[href] as Property
              return { ...property, href }
          })
        : []

export const getHref = (parentHref: string, href: string) => `${parentHref !== '' ? parentHref + '/' : parentHref}${href}`

const FormGenerator: FC<Props> = (props) => {
    const { href: topHref, properties, resetFormKey, schema, values, onChange, setFormError } = props

    const [components, setComponents] = useState<JSX.Element[]>([])

    const isSingleValueMode = useMemo(() => !isObject(values), [values])
    const formDefaultValues = useMemo(() => (isSingleValueMode ? values : { [topHref]: values }), [isSingleValueMode, topHref, values])
    const [hasError, setHasError] = useState(false)

    const {
        control,
        formState: { errors, isValid },
        reset,
    } = useForm<any>({ resolver: zodResolver(schema), mode: 'all', reValidateMode: 'onChange', defaultValues: formDefaultValues })

    useEffect(() => {
        reset()
    }, [reset, resetFormKey])

    const getDefaultValue = useCallback(
        (href: string) => (isSingleValueMode ? values : get(values, href.replace(topHref, '').substring(1), '')),
        [isSingleValueMode, topHref, values]
    )

    const handleValueChange = useCallback(
        (value: any) => {
            if (isFunction(onChange)) {
                if (isSingleValueMode) {
                    onChange(value === undefined ? '' : value)
                }
            }
        },
        [onChange, isSingleValueMode]
    )

    useEffect(() => {
        if (isValid && hasError) {
            setHasError(false)
            isFunction(setFormError) && setFormError(false)
        } else if (!isValid && !hasError) {
            setHasError(true)
            isFunction(setFormError) && setFormError(true)
        }
    }, [hasError, isValid, setFormError])

    useEffect(() => {
        const buildProperties: any = (properties: PropertiesType, parentHref = '', readOnly = false, depth = 1) =>
            sortProperties(properties).map((property: Property & { href: string }, k) => {
                const href = getHref(parentHref, property.href)
                const key = `${href}-${k}-${depth}-${property.title}`
                const readOnlyP = property.readOnly || readOnly
                const defaultValue = getDefaultValue(href)

                if (property.href === knownResourceHref.WELL_KNOW_WOT) {
                    return buildProperties(property.properties, href, readOnlyP, depth)
                }

                if (['string', 'integer', 'number'].includes(property.type)) {
                    const isNumber = ['integer', 'number'].includes(property.type)
                    const formatValue = (value?: string) => (isNumber && value ? parseInt(value, 10) : value)

                    return (
                        <Controller
                            control={control}
                            defaultValue={defaultValue}
                            key={key}
                            name={href}
                            render={({ field }) => (
                                <ModalStrippedLine
                                    smallPadding
                                    component={
                                        <FormGroup
                                            errorTooltip
                                            error={get(errors, `${field.name}.message`) as any}
                                            id={href}
                                            marginBottom={false}
                                            tooltipPortalTarget={document.getElementById('toast-root')!}
                                            tooltipZIndex={1000}
                                        >
                                            <FormInput
                                                icon={isNumber && !property.unit ? <IconNumbers /> : undefined}
                                                name={field.name}
                                                onChange={(e) => {
                                                    field.onChange(formatValue(e.target.value))
                                                    handleValueChange(formatValue(e.target.value))
                                                }}
                                                readOnly={readOnlyP}
                                                rightContent={property.unit}
                                                size='small'
                                                type={isNumber ? 'number' : 'text'}
                                                value={isNumber ? formatValue(field.value) : field.value}
                                            />
                                        </FormGroup>
                                    }
                                    label={property.title || property.href}
                                />
                            )}
                        />
                    )
                } else if (property.type === 'boolean') {
                    return (
                        <Controller
                            control={control}
                            defaultValue={defaultValue}
                            key={key}
                            name={href}
                            render={({ field }) => (
                                <ModalStrippedLine
                                    smallPadding
                                    component={
                                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Switch checked={field.value} key={`${key}-input`} name={field.name} onChange={field.onChange} />
                                        </div>
                                    }
                                    label={property.title}
                                />
                            )}
                        />
                    )
                } else if (property.type === 'object' && property.properties) {
                    return (
                        <Spacer key={key} type='mb-5 mt-8'>
                            <Spacer type='mb-4'>
                                <Headline type='h5'>{property.title || property.href}</Headline>
                            </Spacer>
                            <Spacer type={`pl-${5 * depth}`}>{buildProperties(property.properties, href, readOnlyP, depth + 1)}</Spacer>
                        </Spacer>
                    )
                } else {
                    return <div key={key} />
                }
            })

        if (properties) {
            console.log(properties)
            setComponents(buildProperties(properties))
        }
    }, [control, errors, getDefaultValue, handleValueChange, properties])

    return <>{components}</>
}

FormGenerator.displayName = 'FormGenerator'

export default FormGenerator
