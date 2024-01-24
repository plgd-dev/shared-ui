import { createContext } from 'react'
import { FormContextType } from './FormContext.types'

export const FormContext = createContext<FormContextType>({
    onSubmit: (d: any) => {},
    updateData: (s: string, d: string) => {},
})
