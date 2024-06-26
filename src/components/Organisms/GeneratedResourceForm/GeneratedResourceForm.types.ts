import { SharedProps } from './FormGenerator/FormGenerator.types'

export type Property = {
    maximum?: number
    minimum?: number
    title: string
    type: string
    readOnly?: boolean
    properties: {
        [key: string]: Property
    }
    unit?: string
}

export type PropertiesType = { [key: string]: Property }

export type Props = {
    className?: string
    dataTestId?: string
    id?: string
    setIsEditable?: (isEditable: boolean) => void
} & SharedProps
