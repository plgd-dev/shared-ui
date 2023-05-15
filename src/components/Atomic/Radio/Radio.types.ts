import { SyntheticEvent } from 'react'

export type RadioItem = {
    label?: string
    value: string
}

export type Props = {
    className?: string
    defaultValue?: string
    error?: boolean
    id?: string
    items: RadioItem[]
    name: string
    onChange: (value: string, e: SyntheticEvent) => void
}
