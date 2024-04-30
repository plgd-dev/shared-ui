export type Property = {
    maximum?: number
    minimum?: number
    title: string
    type: string
    readOnly?: boolean
    properties: {
        [key: string]: Property
    }
}

export type PropertiesType = { [key: string]: Property }

export type Props = {
    className?: string
    id?: string
    i18n: {
        general: string
        minLength: (field: string, length: number) => string
    }
    properties: PropertiesType
}
