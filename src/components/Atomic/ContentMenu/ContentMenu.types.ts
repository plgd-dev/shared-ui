import { ReactNode, SyntheticEvent } from 'react'

export type ItemType = {
    children?: SubItemItem[]
    icon: ReactNode
    id: string
    link: string
    title: string
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
    title: string
}
