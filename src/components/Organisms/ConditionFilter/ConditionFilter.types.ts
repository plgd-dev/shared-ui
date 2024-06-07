import { ReactNode } from 'react'

export type Props = {
    className?: string
    children?: ReactNode
    dataTestId?: string
    defaultOpen?: boolean
    id?: string
    listName?: string
    listOfItems?: string[]
    onItemDelete?: (item: number) => void
    status?: ReactNode
    title: string
}
