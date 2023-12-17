import { ReactNode } from 'react'

export type Information = {
    attribute: string
    certFormat?: boolean
    copyValue?: string
    value: string
}

export type Props = {
    className?: string
    defaultOpen?: boolean
    error?: {
        groupTitle: string
        title: string
        message: string
    }
    hasExpand?: boolean
    i18n: {
        copy: string
    }
    information?: {
        groupTitle: string
        rows: Information[]
    }
    title: string
    statusTag?: ReactNode
    time?: ReactNode
}

export const defaultProps: Partial<Props> = {
    hasExpand: true,
}
