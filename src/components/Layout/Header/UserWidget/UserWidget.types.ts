import { ReactNode } from 'react'

export type DropdownItemType = {
    title: string
    onClick: () => void
    dataTestId?: string
}

export type Props = {
    dataTestId?: string
    description?: string
    dropdownItems?: DropdownItemType[]
    image?: ReactNode
    loading?: boolean
    logoutTitle?: string
    name: string
    onLogout?: () => void
}
