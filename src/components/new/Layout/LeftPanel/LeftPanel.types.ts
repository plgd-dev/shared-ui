import { tagVariants } from './constants'
import { SyntheticEvent } from 'react'
import { Strategy } from '@floating-ui/core/src/types'

export type MenuTagVariantType = typeof tagVariants[keyof typeof tagVariants]

type MenuItemTag = {
    text: string
    variant: MenuTagVariantType
}

export type MenuItem = {
    icon: string
    id: string
    tag?: MenuItemTag
    title: string
    children?: MenuItem[]
}

type MenuGroup = {
    title: string
    items?: MenuItem[]
}

export type Props = {
    activeId?: string
    collapsed?: boolean
    menu?: MenuGroup[]
    newFeature?: {
        onClick: () => void
        onClose: () => void
    }
}

export type LeftPanelItemType = {
    item: MenuItem
    collapsed?: boolean
    active: string | null
    handleItemClick: (item: MenuItem, e: SyntheticEvent) => void
    key: number
}

export type LeftPanelSubItemsType = {
    item: MenuItem
    collapsed?: boolean
    active: string | null
    isActive?: boolean
    floating: any
    x: number | null
    y: number | null
    strategy: Strategy
}
