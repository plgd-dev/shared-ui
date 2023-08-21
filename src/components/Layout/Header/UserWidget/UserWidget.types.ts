import { ReactNode } from 'react'

export type DropdownItemType = {
    title: string
    onClick: () => void
    dataTestId?: string
}

export type Props = {
    defaultOpen?: boolean
    description?: string
    dropdownItems?: DropdownItemType[]
    image?: ReactNode
    loading?: boolean
    name: string
    dataTestId?: string
}
