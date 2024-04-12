import { createContext } from 'react'
import { FormContextType } from './FormContext.types'
import { inputAligns, inputSizes } from '../../components/Atomic/FormInput/constants'

export const getFormContextDefault = (i18nDefault = '') => ({
    updateData: (newData: any) => {},
    commonFormGroupProps: {
        errorTooltip: true,
        fullSize: true,
        marginBottom: false,
    },
    commonInputProps: {
        align: inputAligns.RIGHT,
        inlineStyle: true,
        size: inputSizes.SMALL,
    },
    commonTimeoutControlProps: {
        align: inputAligns.RIGHT,
        errorTooltip: true,
        i18n: {
            default: i18nDefault,
            duration: '',
            placeholder: '',
            unit: '',
        },
        inlineStyle: true,
        size: inputSizes.SMALL,
        smallMode: true,
        watchUnitChange: true,
    },
    compactFormComponentsView: false,
})

export const FormContext = createContext<FormContextType>(getFormContextDefault(''))
