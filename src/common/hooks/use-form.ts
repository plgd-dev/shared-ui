import { FieldValues } from 'react-hook-form/dist/types'
import { useForm as useFormLib } from 'react-hook-form'
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react'
import isFunction from 'lodash/isFunction'
import cloneDeep from 'lodash/cloneDeep'
import get from 'lodash/get'
import debounce from 'lodash/debounce'

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

    const data = useFormData.watch()

    const onChange = (data: any) => updateData(data)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceOnChange = useCallback(debounce(onChange, 500), [])

    useEffect(() => {
        const copy = cloneDeep(defaultFormData)

        const field = getObjectKeyPath(useFormData.formState.dirtyFields)
        const fieldValue = get(data, field)

        if (get(defaultFormData, field) !== fieldValue) {
            debounceOnChange(setProperty(copy, field, fieldValue))
        }
    }, [data, debounceOnChange, defaultFormData, updateData, useFormData.formState.dirtyFields])

    useEffect(() => {
        isFunction(setFormError) && setFormError((prevState: any) => ({ ...prevState, [errorKey]: Object.keys(useFormData.formState.errors).length > 0 }))
    }, [useFormData.formState.errors, setFormError, errorKey])

    return { ...useFormData }
}
