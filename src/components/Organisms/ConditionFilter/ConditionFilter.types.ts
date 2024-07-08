import { ReactNode } from 'react'

export type Props = {
    className?: string
    children?: ReactNode
    dataTestId?: string
    defaultOpen?: boolean
    id?: string
    isTest?: boolean
    listName?: string
    listOfItems?: string[]
    onItemDelete?: (item: number) => void
    status?: ReactNode
    title: string
}
