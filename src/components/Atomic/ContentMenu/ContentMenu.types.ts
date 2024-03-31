import { ReactNode, SyntheticEvent } from 'react'
import { statuses } from './constants'

export type StatusType = (typeof statuses)[keyof typeof statuses]

export type ItemType = {
    children?: SubItemItem[]
    icon?: ReactNode
    id: string
    link: string
    title: string
    status?: StatusType
}

export type SubItemItem = Omit<ItemType, 'icon' | 'link'> & {
    contentRef?: any
}

export type Props = {
    activeItem: string
    className?: string
    handleItemClick: (item: ItemType, e: SyntheticEvent) => void
    handleSubItemClick?: (subItem: SubItemItem, item: ItemType, e: SyntheticEvent) => void
    id?: string
    menu: ItemType[]
    menuSearch?: boolean
    title?: string
}
