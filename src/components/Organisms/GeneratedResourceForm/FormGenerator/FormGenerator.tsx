import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import get from 'lodash/get'
import isObject from 'lodash/isObject'
import isFunction from 'lodash/isFunction'
import set from 'lodash/set'

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
import Editor from '../../../Atomic/Editor'

export const sortProperties = (properties: PropertiesType) =>
    properties
        ? Object.keys(properties)
              .map((href: string) => {
                  // @ts-ignore
                  const property = properties[href] as Property
                  return { ...property, href }
              })
              .sort((a, b) => (a.href || a.href).localeCompare(b.href || b.href))
              .sort((a, b) =>
                  a.hasOwnProperty('properties') && !b.hasOwnProperty('properties')
                      ? 1
                      : b.hasOwnProperty('properties') && !a.hasOwnProperty('properties')
                        ? -1
                        : 0
              )
        : []

export const getHref = (parentHref: string, href: string) => `${parentHref !== '' ? parentHref + '/' : parentHref}${href}`

const FormGenerator: FC<Props> = (props) => {
    const { href: topHref, properties, resetFormKey, schema, values, onChange, setFormError } = props

    const [components, setComponents] = useState<JSX.Element[]>([])

    const isSingleValueMode = useMemo(() => !isObject(values), [values])
    const formDefaultValues = useMemo(() => (isSingleValueMode ? values : { [topHref]: values }), [isSingleValueMode, topHref, values])
    const [hasError, setHasError] = useState(false)
    const [editorErrors, setEditorErrors] = useState<string[]>([])

    const {
        control,
        formState: { errors, isValid },
        reset,
    } = useForm<any>({ resolver: zodResolver(schema), mode: 'all', reValidateMode: 'onChange', defaultValues: formDefaultValues })

    useEffect(() => {
        reset()
    }, [reset, resetFormKey])

    const getDefaultValue = useCallback(
        (href: string) => (isSingleValueMode ? values : get(values, href.replace(topHref, '').substring(1).replace('/', '.'), '')),
        [isSingleValueMode, topHref, values]
    )

    const handleValueChange = useCallback(
        (value: any, href?: string) => {
            if (isFunction(onChange)) {
                if (isSingleValueMode) {
                    onChange(value === undefined ? '' : value)
                } else if (href) {
                    onChange(set(values, href, value === undefined ? '' : value))
                }
            }
        },
        [onChange, isSingleValueMode, values]
    )

    const handleEditorChange = useCallback(
        (value: any, href: string) => {
            try {
                handleValueChange(JSON.parse(value), href)
                setEditorErrors(editorErrors.filter((error) => error !== href))
            } catch (e) {
                setEditorErrors([...editorErrors, href])
            }
        },
        [editorErrors, handleValueChange]
    )

    useEffect(() => {
        if (editorErrors.length > 0) {
            setHasError(true)
            isFunction(setFormError) && setFormError(true)
        } else {
            if (isValid && editorErrors.length === 0 && hasError) {
                setHasError(false)
                isFunction(setFormError) && setFormError(false)
            } else if (!isValid && !hasError) {
                setHasError(true)
                isFunction(setFormError) && setFormError(true)
            }
        }
    }, [editorErrors, hasError, isValid, setFormError])

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
                                                    handleValueChange(formatValue(e.target.value), property.href)
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
                                            <Switch
                                                checked={field.value}
                                                key={`${key}-input`}
                                                name={field.name}
                                                onChange={(e) => {
                                                    field.onChange(e)
                                                    handleValueChange(e.target.checked, property.href)
                                                }}
                                            />
                                        </div>
                                    }
                                    label={property.title || property.href}
                                />
                            )}
                        />
                    )
                } else if (property.type === 'object') {
                    if (property.properties) {
                        return (
                            <Spacer key={key} type='mb-5 mt-8'>
                                <Spacer type='mb-4'>
                                    <Headline style={{ textTransform: 'capitalize' }} type='h5'>
                                        {property.title || property.href}
                                    </Headline>
                                </Spacer>
                                <Spacer type={`pl-${5 * depth}`}>{buildProperties(property.properties, href, readOnlyP, depth + 1)}</Spacer>
                            </Spacer>
                        )
                    } else {
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
                                            <Editor
                                                height='200px'
                                                i18n={{
                                                    viewText: 'view',
                                                }}
                                                json={field.value || {}}
                                                onChange={(value) => {
                                                    field.onChange(value)
                                                    handleEditorChange(value, property.href)
                                                }}
                                            />
                                        }
                                        label={property.title || property.href}
                                    />
                                )}
                            />
                        )
                    }
                } else {
                    return <div key={key} />
                }
            })

        if (properties) {
            setComponents(buildProperties(properties))
        }
    }, [control, errors, getDefaultValue, handleEditorChange, handleValueChange, properties])

    return <>{components}</>
}

FormGenerator.displayName = 'FormGenerator'

export default FormGenerator
