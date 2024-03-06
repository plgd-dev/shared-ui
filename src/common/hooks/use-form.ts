import { FieldValues } from 'react-hook-form/dist/types'
import { useForm as useFormLib } from 'react-hook-form'
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react'
import isFunction from 'lodash/isFunction'
import cloneDeep from 'lodash/cloneDeep'

import { setProperty } from '../../components/Atomic/_utils/utils'

type UseFormOptionsType = {
    defaultFormData: any
    errorKey: string
    setFormError?: Dispatch<SetStateAction<any>>
    setFormDirty?: Dispatch<SetStateAction<any>>
    updateData: (newData: any) => void
}

export function useForm<TFieldValues extends FieldValues = FieldValues>(options: UseFormOptionsType) {
    const { defaultFormData, setFormError, setFormDirty, updateData, errorKey } = options
    const useFormData = useFormLib<TFieldValues>({ mode: 'all', reValidateMode: 'onSubmit', defaultValues: defaultFormData })

    const data = useFormData.watch()

    useEffect(() => {
        isFunction(setFormError) && setFormError((prevState: any) => ({ ...prevState, [errorKey]: Object.keys(useFormData.formState.errors).length > 0 }))
    }, [useFormData.formState.errors, setFormError, errorKey])

    useEffect(() => {
        // useFormData.formState.isDirty && console.log('dirty fields:', errorKey, useFormData.formState.dirtyFields, useFormData.formState.isDirty)
        isFunction(setFormDirty) && setFormDirty((prevState: any) => ({ ...prevState, [errorKey]: useFormData.formState.isDirty }))
    }, [useFormData.formState.dirtyFields, setFormDirty, errorKey, useFormData.formState.isDirty])

    const updateField = useCallback(
        (field: string, fieldValue: any) => {
            const copy = cloneDeep(data)

            updateData(setProperty(copy, field, fieldValue))
        },
        [data, updateData]
    )

    return { ...useFormData, updateField }
}
