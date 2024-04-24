import { FieldValues } from 'react-hook-form/dist/types'
import { useForm as useFormLib } from 'react-hook-form'
import { useCallback, useContext, useEffect } from 'react'
import isFunction from 'lodash/isFunction'
import cloneDeep from 'lodash/cloneDeep'
import set from 'lodash/set'
import { zodResolver } from '@hookform/resolvers/zod'

import { FormContext } from '../context/FormContext'

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

    const updateField = useCallback(
        (field: string, fieldValue: any, asArray = false) => {
            const copy = cloneDeep(data)

            if (asArray) {
                // @ts-ignore

                updateData(set(copy, field, fieldValue))
            } else {
                updateData(set(copy, field, fieldValue))
            }
        },
        [data, updateData]
    )

    return { ...useFormData, updateField }
}
