import { Dispatch, SetStateAction } from 'react'
import { Props as TimeoutControlProps } from '../../components/Atomic/TimeoutControl/TimeoutControl.types'
import { Props as InputProps } from '../../components/Atomic/FormInput/FormInput.types'
import { Props as FormGroupProps } from '../../components/Atomic/FormGroup/FormGroup.types'

export type FormContextType = {
    updateData: (newData: any) => void
    setFormError?: Dispatch<SetStateAction<any>>
    setFormDirty?: Dispatch<SetStateAction<any>>
    commonFormGroupProps: Pick<FormGroupProps, 'errorTooltip' | 'fullSize' | 'marginBottom'>
    commonInputProps: Pick<InputProps, 'inlineStyle' | 'align' | 'size'>
    commonTimeoutControlProps: Pick<TimeoutControlProps, 'align' | 'i18n' | 'inlineStyle' | 'size' | 'watchUnitChange' | 'smallMode' | 'errorTooltip'>
    i18n?: any
    setStep?: (step: number) => void
    onSubmit?: () => void
}
