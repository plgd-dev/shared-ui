import { tagVariants } from './constants'
import { ReactNode, SyntheticEvent } from 'react'
import { Strategy } from '@floating-ui/core/src/types'

export type MenuTagVariantType = (typeof tagVariants)[keyof typeof tagVariants]

type MenuItemTag = {
    text: string
    variant: MenuTagVariantType | string
}

export type MenuItem = {
    children?: Omit<MenuItem, 'icon'>[]
    disabled?: boolean
    exact?: boolean
    icon: ReactNode
    id: string
    link?: string
    paths?: string[]
    tag?: MenuItemTag
    title: any
}

export type MenuGroup = {
    title: any
    items?: MenuItem[]
}

export type Props = {
    activeId?: string
    className?: string
    collapsed?: boolean
    id?: string
    menu?: MenuGroup[]
    newFeature?: {
        onClick: () => void
        onClose: () => void
        i18n: {
            headline: string
            description: string
        }
    }
    versionMark?: ReactNode
    onItemClick?: (item: MenuItem, e: SyntheticEvent) => void
    setCollapsed?: (collapsed: boolean) => void
}

export type LeftPanelItemType = {
    active: string | null
    collapsed?: boolean
    handleItemClick: (item: MenuItem, e: SyntheticEvent) => void
    item: MenuItem
    key: number
}

export type LeftPanelSubItemsType = {
    active: string | null
    collapsed?: boolean
    floating: any
    handleItemClick: (item: MenuItem, e: SyntheticEvent) => void
    isActive?: boolean
    item: MenuItem
    strategy: Strategy
    x: number | null
    y: number | null
}