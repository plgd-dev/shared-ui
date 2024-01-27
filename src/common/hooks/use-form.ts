import { FieldValues } from 'react-hook-form/dist/types'
import { useForm as useFormLib } from 'react-hook-form'
import { Dispatch, SetStateAction, useEffect } from 'react'
import isFunction from 'lodash/isFunction'
import cloneDeep from 'lodash/cloneDeep'
import get from 'lodash/get'

import { getObjectKeyPath, setProperty } from '../../components/Atomic/_utils/utils'

type UseFormOptionsType = {
    defaultFormData: any
    errorKey: string
    setFormError?: Dispatch<SetStateAction<any>>
    updateData: (newData: any) => void
}

export function useForm<TFieldValues extends FieldValues = FieldValues>(options: UseFormOptionsType) {
    const { defaultFormData, setFormError, updateData, errorKey } = options
    const useFormData = useFormLib<TFieldValues>({ mode: 'all', reValidateMode: 'onSubmit', values: defaultFormData })

    // const values = useFormData.watch()

    useEffect(() => {
        const values = useFormData.getValues()
        if (defaultFormData && useFormData.formState.isDirty) {
            const copy = cloneDeep(defaultFormData)

            const field = getObjectKeyPath(useFormData.formState.dirtyFields)
            const fieldValue = get(values, field)

            if (get(defaultFormData, field) !== fieldValue) {
                updateData(setProperty(copy, field, fieldValue))
            }
        }
    }, [defaultFormData, useFormData.formState.isDirty, useFormData.formState.dirtyFields])

    useEffect(() => {
        isFunction(setFormError) && setFormError((prevState: any) => ({ ...prevState, [errorKey]: Object.keys(useFormData.formState.errors).length > 0 }))
    }, [useFormData.formState.errors, setFormError])

    return { ...useFormData }
}
