import { PropertiesType } from '../GeneratedResourceForm.types'
import { ZodObject } from 'zod'

export type SharedProps = {
    href: string
    i18n: {
        invalidNumber: string
        minValue: (field: string, length: number) => string
        maxValue: (field: string, length: number) => string
    }
    onChange?: (values: any) => void
    properties: PropertiesType
    resetFormKey?: number
    setFormError?: (formError: boolean) => void
    values?: any
}

export type Props = { schema: ZodObject<any> } & SharedProps
