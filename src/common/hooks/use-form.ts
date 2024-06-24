import { FieldValues } from 'react-hook-form/dist/types'
import { useForm as useFormLib } from 'react-hook-form'
import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import isFunction from 'lodash/isFunction'
import cloneDeep from 'lodash/cloneDeep'
import set from 'lodash/set'
import { zodResolver } from '@hookform/resolvers/zod'
import isEqual from 'lodash/isEqual'
import { RecoilState, useRecoilState } from 'recoil'

import { FormContext, getFormContextDefault } from '../context/FormContext'
import { useBeforeUnload } from './useBeforeUnload'

type UseFormOptionsType = {
    defaultFormData: any
    errorKey: string
    schema?: any
}

export function useForm<TFieldValues extends FieldValues = FieldValues>(options: UseFormOptionsType) {
    const { defaultFormData, errorKey, schema } = options

    const { setFormErrorKey, setFormDirtyKey, updateData } = useContext(FormContext)

    const [fomError, setFormError] = useState<any>({})
    const [formDirty, setFormDirty] = useState<any>({})

    const useFormData = useFormLib<TFieldValues>({
        mode: 'all',
        reValidateMode: 'onSubmit',
        defaultValues: defaultFormData,
        resolver: schema ? zodResolver(schema) : undefined,
    })

    const data = useFormData.watch()

    useEffect(() => {
        const error = Object.keys(useFormData.formState.errors).length > 0

        if (fomError[errorKey] !== error) {
            setFormError((prevState: any) => ({ ...prevState, [errorKey]: error }))
            isFunction(setFormErrorKey) && setFormErrorKey(errorKey, error)
        }
    }, [useFormData.formState, errorKey, fomError, setFormErrorKey])

    useEffect(() => {
        const dirty = useFormData.formState.isDirty && Object.keys(useFormData.formState.dirtyFields).length > 0

        if (formDirty[errorKey] !== dirty) {
            setFormDirty((prevState: any) => ({ ...prevState, [errorKey]: dirty }))
            isFunction(setFormDirtyKey) && setFormDirtyKey(errorKey, dirty)
        }
    }, [useFormData.formState, errorKey, setFormDirtyKey, formDirty])

    const updateField = useCallback(
        (field: string, fieldValue: any) => {
            updateData(set(cloneDeep(data), field, fieldValue))
        },
        [data, updateData]
    )

    return { ...useFormData, updateField, setFormError }
}

type UseFormDataOptionsType<DataType> = {
    defaultFormState: any
    data: DataType
    i18n: {
        default: string
        promptDefaultMessage: string
    }
    dirtyFormState: RecoilState<boolean>
}

export function useFormData<DataType>(options: UseFormDataOptionsType<DataType>) {
    const { defaultFormState, data, i18n, dirtyFormState } = options

    const [formData, setFormData] = useState<DataType | null>(null)
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
        // console.log(data)

        if (dirtyState !== dirty) {
            setDirtyState(dirty)
        }
    }, [dirtyState, isDirty, isDirtyData, setDirtyState])

    useBeforeUnload({
        when: (isDirty || isDirtyData) && process.env.REACT_APP_DIRTY_FORM_CHECKER !== 'false',
        message: i18n.promptDefaultMessage,
    })

    const updateFormError = useCallback((errorKey: string, value: any) => setFormError((prevState: any) => ({ ...prevState, [errorKey]: value })), [])
    const updateFormDirty = useCallback((errorKey: string, value: any) => {
        setFormDirty((prevState: any) => ({ ...prevState, [errorKey]: value }))
    }, [])

    const context = useMemo(
        () => ({
            ...getFormContextDefault(i18n.default),
            updateData: (newFormData: any) => setFormData(newFormData),
            setFormDirty: () => {},
            setFormDirtyKey: updateFormDirty,
            setFormError: () => {},
            setFormErrorKey: updateFormError,
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
