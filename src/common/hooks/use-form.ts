import { FieldValues } from 'react-hook-form/dist/types'
import { useForm as useFormLib } from 'react-hook-form'
import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import isFunction from 'lodash/isFunction'
import cloneDeep from 'lodash/cloneDeep'
import set from 'lodash/set'
import { zodResolver } from '@hookform/resolvers/zod'
import isEqual from 'lodash/isEqual'
import { useRecoilState } from 'recoil'

import { FormContext, getFormContextDefault } from '../context/FormContext'
import { dirtyFormState } from '../../../../../src/store/recoil.store'
import { useBeforeUnload } from './useBeforeUnload'

type UseFormOptionsType = {
    defaultFormData: any
    errorKey: string
    schema?: any
}

export function useForm<TFieldValues extends FieldValues = FieldValues>(options: UseFormOptionsType) {
    const { defaultFormData, errorKey, schema } = options

    const { setFormDirty, setFormError, updateData } = useContext(FormContext)

    const useFormData = useFormLib<TFieldValues>({
        mode: 'all',
        reValidateMode: 'onSubmit',
        defaultValues: defaultFormData,
        resolver: schema ? zodResolver(schema) : undefined,
    })

    const data = useFormData.watch()

    useEffect(() => {
        isFunction(setFormError) && setFormError((prevState: any) => ({ ...prevState, [errorKey]: Object.keys(useFormData.formState.errors).length > 0 }))
    }, [useFormData.formState.errors, setFormError, errorKey])

    useEffect(() => {
        isFunction(setFormDirty) && setFormDirty((prevState: any) => ({ ...prevState, [errorKey]: useFormData.formState.isDirty }))
    }, [useFormData.formState.dirtyFields, setFormDirty, errorKey, useFormData.formState.isDirty])

    const updateField = useCallback((field: string, fieldValue: any) => updateData(set(cloneDeep(data), field, fieldValue)), [data, updateData])

    return { ...useFormData, updateField }
}

export function useFormData(options: any) {
    const { defaultFormState, data, i18n } = options

    const [formData, setFormData] = useState<any>(null)
    const [formDirty, setFormDirty] = useState(defaultFormState)
    const [formError, setFormError] = useState(defaultFormState)
    const [resetIndex, setResetIndex] = useState(0)

    const isDirtyData = useMemo(() => !!data && !!formData && !isEqual(data, formData), [data, formData])
    const isDirty = useMemo(() => Object.values(formDirty).some((i) => i), [formDirty])
    const hasError = useMemo(() => Object.values(formError).some((i) => i), [formError])

    const [dirtyState, setDirtyState] = useRecoilState(dirtyFormState)

    const handleReset = useCallback(() => {
        setFormData(data)
        setFormDirty(defaultFormState)
        setFormError(defaultFormState)
        setResetIndex((prev) => prev + 1)
    }, [data, defaultFormState])

    useEffect(() => {
        if (data) {
            setFormData(data)
        }
    }, [data])

    useEffect(() => {
        const dirty = isDirty || isDirtyData

        if (dirtyState !== dirty) {
            setDirtyState(dirty)
        }
    }, [dirtyState, isDirty, isDirtyData, setDirtyState])

    useBeforeUnload({
        when: (isDirty || isDirtyData) && process.env.REACT_APP_DIRTY_FORM_CHECKER !== 'false',
        message: i18n.promptDefaultMessage,
    })

    const context = useMemo(
        () => ({
            ...getFormContextDefault(i18n.default),
            updateData: (newFormData: any) => setFormData(newFormData),
            setFormDirty,
            setFormError: () => {},
            compactFormComponentsView: true,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    )

    return {
        formData,
        setFormData,
        formError,
        setFormError,
        formDirty,
        setFormDirty,
        resetIndex,
        handleReset,
        dirty: isDirty || isDirtyData,
        context,
        hasError,
    }
}
