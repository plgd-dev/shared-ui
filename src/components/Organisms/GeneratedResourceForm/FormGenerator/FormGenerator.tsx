import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import get from 'lodash/get'
import isObject from 'lodash/isObject'
import isFunction from 'lodash/isFunction'
import set from 'lodash/set'
import { AnimatePresence, motion } from 'framer-motion'

import { PropertiesType, Property } from '../GeneratedResourceForm.types'
import FormInput from '../../../Atomic/FormInput'
import IconNumbers from '../../../Atomic/Icon/components/IconNumbers'
import Switch from '../../../Atomic/Switch'
import Spacer from '../../../Atomic/Spacer'
import FormGroup from '../../../Atomic/FormGroup'
import { Props } from './FormGenerator.types'
import { knownResourceHref } from '../constants'
import FormGeneratorLine from './components/FormGeneratorLine'
import Editor from '../../../Atomic/Editor'
import SubHeadline from './components/SubHeadline'

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

export const getHref = (parentHref: string, href: string) => `${parentHref !== '' && !parentHref.startsWith('/') ? parentHref + '/' : parentHref}${href}`

const FormGenerator: FC<Props> = (props) => {
    const { dataTestId, href: topHref, properties, resetFormKey, schema, values, onChange, setFormError } = props

    const [components, setComponents] = useState<JSX.Element[]>([])

    const isSingleValueMode = useMemo(() => !isObject(values), [values])
    const formDefaultValues = useMemo(() => (isSingleValueMode ? values : { [topHref]: values }), [isSingleValueMode, topHref, values])
    const [hasError, setHasError] = useState(false)
    const [firstRender, setFirstRender] = useState(true)
    const [editorErrors, setEditorErrors] = useState<string[]>([])
    const [expandedGroups, setExpandedGroups] = useState<string[]>([])

    const {
        control,
        formState: { errors, isValid },
        reset,
    } = useForm<any>({ resolver: zodResolver(schema), mode: 'all', reValidateMode: 'onChange', defaultValues: formDefaultValues })

    useEffect(() => {
        reset()
    }, [reset, resetFormKey])

    const getDefaultValue = useCallback(
        (href: string) => {
            const valuesBase = href === knownResourceHref.WELL_KNOW_WOT ? values.properties : values
            return isSingleValueMode ? values : get(valuesBase, href.replace(topHref, '').substring(1).replace('/', '.'), '')
        },
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
        let firstGroup = true
        const buildProperties: any = (properties: PropertiesType, parentHref = '', readOnly = false, depth = 1) =>
            sortProperties(properties).map((property: Property & { href: string }, k) => {
                const href = getHref(parentHref, property.href)
                const key = `${href}-${k}-${depth}-${property.title}`
                const readOnlyP = property.readOnly || readOnly
                const defaultValue = getDefaultValue(href)
                const isLast = k === Object.keys(properties).length - 1

                if (property.href === knownResourceHref.WELL_KNOW_WOT) {
                    return buildProperties(property.properties, href, readOnlyP, depth)
                }

                if (['string', 'integer', 'number'].includes(property.type)) {
                    const isNumber = ['integer', 'number'].includes(property.type)
                    const formatValue = (value?: string) => (isNumber && value ? parseFloat(value) : value)

                    return (
                        <Controller
                            control={control}
                            defaultValue={defaultValue}
                            key={key}
                            name={href}
                            render={({ field }) => (
                                <FormGeneratorLine
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
                                                dataTestId={dataTestId?.concat(`-${href}`)}
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
                                    isLast={isLast}
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
                                <FormGeneratorLine
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
                                    isLast={isLast}
                                    label={property.title || property.href}
                                />
                            )}
                        />
                    )
                } else if (property.type === 'object') {
                    if (property.properties) {
                        const show = expandedGroups.includes(key)

                        if (firstGroup && expandedGroups.length === 0 && firstRender) {
                            firstGroup = false
                            setExpandedGroups([...expandedGroups, key])
                        }

                        return (
                            <Spacer key={key} type='mb-4 mt-4'>
                                <FormGeneratorLine
                                    component={
                                        <>
                                            <SubHeadline
                                                hasLine
                                                expanded={show}
                                                headline={property.title || property.href}
                                                onToggle={() => {
                                                    if (expandedGroups.includes(key)) {
                                                        setExpandedGroups(expandedGroups.filter((group) => group !== key))
                                                    } else {
                                                        setExpandedGroups([...expandedGroups, key])
                                                    }
                                                }}
                                            />
                                            <AnimatePresence>
                                                {show && (
                                                    <motion.div
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{
                                                            opacity: 0,
                                                            height: 0,
                                                        }}
                                                        initial={{ opacity: 0, height: 0 }}
                                                        transition={{
                                                            duration: 0.3,
                                                        }}
                                                    >
                                                        {buildProperties(property.properties, href, readOnlyP, depth + 1)}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    }
                                    isLast={isLast}
                                />
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
                                    <FormGeneratorLine
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
            setFirstRender(false)
        }
    }, [control, dataTestId, errors, expandedGroups, firstRender, getDefaultValue, handleEditorChange, handleValueChange, properties])

    return <>{components}</>
}

FormGenerator.displayName = 'FormGenerator'

export default FormGenerator
